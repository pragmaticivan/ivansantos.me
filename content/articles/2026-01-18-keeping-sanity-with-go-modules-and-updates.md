---
title: "Keeping sanity with Go modules and updates"
date: "2026-01-18"
description: "Learn how to avoid supply chain risks by enforcing update cooldowns in Go, using Dependabot for CI and my new tool, go-check-updates, for local development."
image: /content/images/articles/2026-01-18-keeping-sanity-with-go-modules-and-updates/update-cooldown-zone.png
language: "en"
slug: "2026-01-18-keeping-sanity-with-go-modules-and-updates"
tags: ["dependabot", "go"]
---

If you work in an environment where security is a first-class citizen of the SDLC, you know that keeping up with package and module updates can be incredibly demanding. It’s a constant stream of noise: patch bumps, minor releases, major overhauls.

But there is a hidden risk in being too eager. When you update modules the moment a new version drops, you might unwittingly become the target of an exploited dependency that hasn't been patched or flagged by the maintainer yet. We've seen supply chain attacks happen, and being on the "bleeding edge" of updates sometimes means you're the one doing the bleeding.

## The Case for a Cooldown

A "cooldown period" is a simple but effective strategy: you only update modules after they have been out for a certain period of time. This buffer gives the community time to discover, report, and address any potential issues or zero-day supply chain problems. If a package is malicious or broken, chances are it will be pulled or patched within that first week.

Dependabot supports this concept, which helps automate this sanity check in your repositories. But we don't just update dependencies in CI. There are plenty of times when we update modules locally on our own machines while developing features.

## The Gap in Local Development

I also write a lot of TypeScript, and one of the tools I love for updating packages locally is [npm-check-updates](https://www.npmjs.com/package/npm-check-updates). It helps me interactively select which dependencies I want to update as a batch, but crucially, it also allows me to configure a cooldown. This ensures I don't update packages to versions that are younger than, say, 7 days.

When I looked for a similar workflow in Go, I realized it wasn't available in the native CLI with the same developer experience and simplicity of this tool.

## Enter `go-check-updates`

I decided to bring that experience to the Go ecosystem. Say hello to [go-check-updates](https://github.com/pragmaticivan/go-check-updates).

It is heavily inspired by `npm-check-updates` but uses excellent CLI packages such as [Bubble Tea](https://github.com/charmbracelet/bubbletea) and [Lip Gloss](https://github.com/charmbracelet/lipgloss) for a modern, interactive CLI experience.

## Putting it into Practice

Here is how you can pair a safe Dependabot configuration with `go-check-updates` to keep your sanity.

### Dependabot Config

You can configure Dependabot to respect a cooldown to avoid zero-day issues. By default, Dependabot creates a PR as soon as an update is available, but you can instruct it to wait.

Here is an example configuration using the `cooldown` option (currently in experiment) to enforce a 7-day waiting period:

```yaml
version: 2
updates:
  - package-ecosystem: "gomod"
    directory: "/"
    schedule:
      interval: "weekly" # or monthly if you have too many services to deal with
    # Wait 7 days before opening a PR for any new version
    cooldown:
      default-days: 7
```

It is worth noting that the cooldown option is only available for version updates, not security updates. Dependabot will still open security PRs immediately to ensure you are patched against known vulnerabilities.

### Local Updates

When updating locally, you can achieve the same level of safety with `go-check-updates` (or `gcu` for short).

First, install the tool:

```bash
go install github.com/pragmaticivan/go-check-updates/cmd/gcu@latest
```

Then you can use it to check for updates while respecting a cooldown period. By default, running `gcu` is a "dry run." It just lists what's available without changing anything.

<img src="/content/images/articles/2026-01-18-keeping-sanity-with-go-modules-and-updates/gcu.png" width="100%" alt="GCU" />

If you want to interactively select which packages to update, you can use the interactive mode:

<img src="/content/images/articles/2026-01-18-keeping-sanity-with-go-modules-and-updates/gcu-interactive.png" width="100%" alt="GCU Interactive" />

Once you are ready to commit to the changes, you can use the `-u` flag to apply them and run `go mod tidy` automatically.

This ensures that whether you are merging a PR from Dependabot or updating modules on your laptop, you are never pulling in unverified code the second it hits the proxy.

## One Last Thing

You might ask: if everyone waits a week, are we just shifting the problem?

Not really. First, registries and security researchers are constantly scanning for threats; that delay gives them time to catch and remove bad packages before they reach you. Second, there will always be "bleeding edge" users acting as canaries.

Cooldowns aren't a silver bullet. But reducing your exposure by 80-90% with a free, simple technique? That seems hard to beat.


## Worthy of Reference

* https://blog.yossarian.net/2025/11/21/We-should-all-be-using-dependency-cooldowns
* https://docs.github.com/en/code-security/reference/supply-chain-security/dependabot-options-reference#cooldown-
* https://blog.yossarian.net/2025/12/13/cooldowns-redux
