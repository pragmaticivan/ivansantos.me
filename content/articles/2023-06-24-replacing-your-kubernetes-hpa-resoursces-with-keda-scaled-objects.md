---
title: Replacing your Kubernetes HPA resources with KEDA ScaledObjects
description: "A guide to stepping up your kubernetes HPA game while achieving zero downtime"
image: /content/images/articles/rocket-sky-1.jpg
date: "2023-06-24"
language: "en"
slug: "2023-06-24-replacing-your-kubernetes-hpa-resoursces-with-keda-scaled-objects"
---

## Context

Because native HPA only offers scaling by memory and CPU, extending its capabilities with KEDA is fundamental to achieving reliable resource autoscaling.

Before KEDA 2.11.0, replacing your HPA resources with ScaledObjects would require the deletion of the existing HPA before you create a new ScaledObject for a deployment resource.

<img src="/content/images/articles/keda-ownership-transfer-diagram.png"  width="100%" alt="KEDA Ownership Transfer" />


## Benefits

If your platform team is currently introducing KEDA to your organization, instead of requesting planned updates for existing applications, the teams can now progressively update their HPA resource, or your platform team can programmatically send pull requests updating all the HPA manifests to perform an HPA take-over across all your company HPA resources.

## Replacing an HPA with a KEDA ScaledObject

Given you already have a deployment and an HPA in place:

```yml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: example-service
  name: example-service
spec:
  selector:
    matchLabels:
      app: example-service
  replicas: 2
  template:
    metadata:
      labels:
        app: example-service
    spec:
      containers:
      - name: nginx
        image: nginxinc/nginx-unprivileged
        resources:
          limits:
            cpu: 700m
            memory: 500Mi
          requests:
            cpu: 100m
            memory: 300Mi
        ports:
        - containerPort: 80

---

apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: example-service
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: example-service
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - resource:
        name: cpu
        target:
          averageUtilization: 50
          type: Utilization
      type: Resource
    - resource:
        name: memory
        target:
          averageUtilization: 50
          type: Utilization
      type: Resource
```

You can replace the existing HPA with a ScaledObject including the same inputs, as well as extend functionalities with scalers such as CronJobs:

```yml

apiVersion: keda.sh/v1alpha1
kind: ScaledObject
metadata:
  name: example-service
  annotations:
    scaledobject.keda.sh/transfer-hpa-ownership: "true" # Use to transfer an existing HPA ownership to this ScaledObject
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: example-service
  minReplicaCount:  2
  maxReplicaCount:  10
  advanced:
    horizontalPodAutoscalerConfig:
      name: example-service # Custom HPA name is required and should match the existing HPA name
  triggers:
    - type: memory
      metricType: Utilization
      metadata:
        value: "50"
    - type: cpu
      metricType: Utilization
      metadata:
        value: "50"
    - type: cron
      metadata:
        timezone: America/Chicago  # The acceptable values would be a value from the IANA Time Zone Database.
        start: 0 8 * * 1-6      # At 08:00 on every day-of-week from Monday through Saturday.
        end: 0 18 * * 1-6       # At 18:00 on every day-of-week from Monday through Saturday.
        desiredReplicas: "5"
    - type: new-relic
      metadata:
        nrql: "SELECT rate(count(apm.service.transaction.duration), 1 second) as 'Web throughput' FROM Metric WHERE (appName like 'example-service-%') AND (transactionType = 'Web') since 20 seconds ago"
        threshold: '10'
      authenticationRef:
        name: __REDACTED__
        kind: ClusterTriggerAuthentication
```

By using the combination of the annotation `autoscaling.keda.sh/transfer-hpa-ownership: "true"` and by setting `advanced.horizontalPodAutoscalerConfig.name` to match the existing HPA name, you are able to achive drop-in replacement of the HPA resource without any disruption.

## Final words

This is an experimental feature. We encourage you to try it out in your cluster and report back what you find.

Cheers!
