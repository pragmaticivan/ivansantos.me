---
title: Replacing your Kubernetes HPA resources with Keda ScaledObjects with zero downtime
description: "A guide to steping up your kubernetes HPA game"
image: /content/images/articles/rocket-sky-1.jpg
date: "2023-06-24"
language: "en"
slug: "2023-06-24-replacing-your-kubernetes-hpa-resoursces-with-keda-scaled-objects-with-zero-downtime"
---

## Context

Because native HPA only offers scaling by memory and CPU, extending its capabilities with Keda is fundamental to achieving reliable resource autoscaling.

Before Keda 2.11.0, replacing your HPA resources with ScaledObjects would require the deletion of the existing HPA before you create a new ScaledObject for a deployment resource.


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
  replicas: 1
  template:
    metadata:
      labels:
        app: example-service
    spec:
      containers:
      - name: nginx
        image: nginxinc/nginx-unprivileged
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
  minReplicas: 1
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
    autoscaling.keda.sh/transfer-hpa-ownership: "true" # Use to transfer an existing HPA ownership to this ScaledObject
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: example-service
  minReplicaCount:  1
  maxReplicaCount:  10
  advanced:
    horizontalPodAutoscalerConfig:
      name: example-service # Custom HPA name is required and should match the existing HPA name
  triggers:
    - type: memory
      metricType: AverageValue
      metadata:
        value: "50"
    - type: cpu
      metricType: AverageValue
      metadata:
        value: "50"
    - type: cron
      metadata:
        timezone: Asia/Kolkata  # The acceptable values would be a value from the IANA Time Zone Database.
        start: 30 * * * *       # Every hour on the 30th minute
        end: 45 * * * *         # Every hour on the 45th minute
        desiredReplicas: "10"
```

By using the combination of the annotation `autoscaling.keda.sh/transfer-hpa-ownership: "true"` and by setting `advanced.horizontalPodAutoscalerConfig.name` to match the existing HPA name, you are able to achive drop-in replacement of the HPA resource without any disruption.

## Final words

This is an experimental feature. We encourage you to try it out in your cluster and report back what you find.

Cheers!
