---
title: "Introducing NestJS OpenTelemetry (OTEL)"
date: "2025-11-10"
description: "A deep dive into my side project that simplifies OpenTelemetry integration for NestJS applications, making observability a breeze."
language: "en"
slug: "2025-11-10-introducing-nestjs-otel"
image: /content/images/articles/grafana-nestjs-otel-traces.png
tags: ["nestjs", "opentelemetry", "observability", "opensource", "typescript"]
---

Observability is one of those things that everyone agrees is important, but setting it up can often feel like a massive headache. You need metrics, traces, logs, and somehow you have to glue them all together. If you're working with [NestJS](https://nestjs.com/), you might have found yourself juggling multiple libraries just to get a simple Prometheus counter or a Jaeger trace.

That's exactly why I built [nestjs-otel](https://github.com/pragmaticivan/nestjs-otel). It's a wrapper around the OpenTelemetry SDK that makes integrating observability into your NestJS applications feel native and intuitive.

<img src="/content/images/articles/grafana-nestjs-otel-dashboard.png" width="100%" alt="Grafana Dashboards" />


## Why I Built It

I love NestJS for its opinionated structure and decorators. But when I started working with OpenTelemetry, I felt like I was fighting against the framework rather than working with it. I wanted a way to simply annotate a method and have it traced, or add a counter to a controller without writing boilerplate code every time.

`nestjs-otel` bridges that gap. It brings the power of OpenTelemetry to NestJS with a developer experience that feels right at home.

## Key Features

Here is what makes `nestjs-otel` special:

- **Decorators Galore**: Use `@Span`, `@Traceable`, and `@OtelMethodCounter` to instrument your code declaratively.
- **Seamless Integration**: Works with the standard OpenTelemetry SDK.
- **Metrics & Tracing**: Support for both, including Prometheus exporters.
- **Dependency Injection**: Access `TraceService` and `MetricService` anywhere in your app.

## Embracing Community Instrumentation

One of the core philosophies of `nestjs-otel` is to not reinvent the wheel. Instead of creating custom instrumentation for everything, it relies on the robust ecosystem provided by the OpenTelemetry community.

For example, libraries like [`@opentelemetry/instrumentation-nestjs-core`](https://www.npmjs.com/package/@opentelemetry/instrumentation-nestjs-core) provide excellent auto-instrumentation that adheres to well-defined semantic conventions. `nestjs-otel` plays nicely with these, allowing you to layer your custom business logic traces on top of standard framework traces without conflict.

## Getting Started

Installation is straightforward. You just need the package and the OpenTelemetry SDK:

```bash
npm i nestjs-otel @opentelemetry/sdk-node --save
```

### 1. Configure the SDK

First, you'll need to set up the OpenTelemetry SDK. I recommend creating a `tracing.ts` file to configure your exporters (like Jaeger or Prometheus) and auto-instrumentations. This ensures the SDK starts before your NestJS application bootstraps.

```ts
// tracing.ts
import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
// ... other imports and exporter setup

const otelSDK = new NodeSDK({
  // ... config
  instrumentations: [getNodeAutoInstrumentations()],
});

export default otelSDK;
```

Then, in your `main.ts`, start the SDK before creating the app:

```ts
import otelSDK from './tracing';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  await otelSDK.start();
  const app = await NestFactory.create(AppModule);
  // ...
}
bootstrap();
```

### 2. Import the Module

After that, configuring the module is as simple as:

```ts
import { OpenTelemetryModule } from 'nestjs-otel';

@Module({
  imports: [
    OpenTelemetryModule.forRoot({
      metrics: {
        hostMetrics: true,
      },
    }),
  ],
})
export class AppModule {}
```

## The Power of Decorators

This is where the magic happens. Instead of manually starting and ending spans, you can just use the `@Span` decorator.

```ts
import { Span } from 'nestjs-otel';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  @Span('CRITICAL_SECTION')
  async getBooks() {
    // This method is now traced!
    return [`Harry Potter and the Philosopher's Stone`];
  }
}
```

Need to trace every method in a class? `@Traceable` has you covered.

```ts
import { Traceable } from 'nestjs-otel';

@Injectable()
@Traceable()
export class UsersService {
  findAll() {
    return [];
  }
}
```

## Metrics Made Easy

Counting things shouldn't be hard. With `@OtelMethodCounter`, you can track how many times a method is called without polluting your business logic.

```ts
import { OtelMethodCounter } from 'nestjs-otel';
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @OtelMethodCounter() // Generates app_AppController_doSomething_calls_total
  doSomething() {
    // ...
  }
}
```

## See it in Action

<img src="/content/images/articles/grafana-nestjs-otel-drilldown.png" width="100%" alt="Drilldown View in Grafana" />


If you're like me, you learn best by looking at code. I've put together a [fully working example](https://github.com/pragmaticivan/nestjs-otel-prom-grafana-tempo) that demonstrates two applications communicating with each other.

It comes with a complete Docker Compose setup including:
- **Prometheus** for metrics
- **Grafana** for dashboards
- **Tempo** for distributed tracing
- **Loki** for logs

It's a great way to see how metrics, spans, and dashboards all come together in a real-world scenario.

## Conclusion

Building `nestjs-otel` has been a wild ride—part deep dive into the rabbit hole of observability, part scratching my own itch to make NestJS play nice with OpenTelemetry. It started as a simple wrapper and has grown into a tool that I rely on daily to keep my sanity when debugging distributed systems.

But this is just the beginning! The observability landscape is moving fast, and I'm excited to see where we can take this project. Whether you're a seasoned SRE or just a developer tired of `console.log` debugging, I'd love for you to take `nestjs-otel` for a spin. Break it, fix it, star it, or send a PR. It's all open source, and contributions are more than welcome. Let's make our NestJS apps not just functional, but truly observable, one span at a time.

Check out the code on [GitHub](https://github.com/pragmaticivan/nestjs-otel), and let me know if it saves you a headache or two!
