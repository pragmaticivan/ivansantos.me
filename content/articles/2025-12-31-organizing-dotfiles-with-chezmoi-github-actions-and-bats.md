---
title: "Organizing Dotfiles with Chezmoi, GitHub Actions, and Bats"
date: "2025-12-31"
description: "A deep dive into a robust dotfiles setup that works across macOS and Ubuntu, handling personal and restricted environments with automated testing."
image: /content/images/articles/chezmoi.png
language: "en"
slug: "2025-12-31-organizing-dotfiles-with-chezmoi-github-actions-and-bats"
tags: ["dotfiles", "chezmoi", "automation", "github-actions", "testing"]
---

We've all been there: you sit down at a new machine, ready to code, and... muscle memory fails. Your aliases are missing, your vim bindings are wrong, and the terminal looks like it's from 1995. Keeping your digital life in sync across a personal MacBook, a locked-down work laptop, and a fleet of Linux servers shouldn't feel like a chore, right?... right? 😅.

In this post, I'll share how I tamed my [dotfiles](https://github.com/pragmaticivan/dotfiles) using **chezmoi**, validated them with **GitHub Actions**, and ensured everything works as expected with **Bats** tests.

## Why Chezmoi?

Enter [chezmoi](https://www.chezmoi.io/). It’s not just another dotfile manager; it’s a superpower for your home directory. While symlinks are great, they fall apart when you need *slightly* different configs for different machines. Chezmoi treats your dotfiles as a single source of truth but sprinkles in some templating magic.

It handles the heavy lifting:
- **Templating**: One config file, multiple outcomes based on OS, hostname, or custom variables.
- **Secrets**: Seamless integration with password managers (no more accidental API keys in git!).
- **State Management**: It knows exactly what changed and applies only the necessary updates.
- **Private Files**: You can have files that are ignored by git but managed locally, perfect for work-specific configs that shouldn't leave the machine.

## Repository Structure

I like to keep things tidy. Here is how the repository is organized:

```text
.
├── .github/workflows/   # CI pipelines for macOS and Ubuntu (The QA Team)
├── home/                # The actual dotfiles (source state)
│   ├── .chezmoi.toml.tmpl
│   ├── dot_gitconfig.tmpl
│   ├── dot_zshrc
│   └── Brewfile
├── install/             # OS-specific installation scripts
├── tests/               # Bats tests for validation
├── setup.sh             # One-line setup script
└── Makefile             # Helpers for local testing
```

## Handling Multiple Profiles (Personal vs. Restricted)

Here’s the killer feature: **Profiles**. I don't need Steam and Discord on my work laptop (well, maybe Discord), and I definitely don't need them on a headless server. I use a simple environment variable, `DOTFILES_PROFILE`, to tell my setup whether it's time to party or time to work.

### The Templated Brewfile

My `home/Brewfile` is smart enough to know the difference:

```ruby
{{- /* Chezmoi-templated Brewfile. Uses DOTFILES_PROFILE env (personal/restricted). */ -}}
# ... header ...

{{- $profile := (env "DOTFILES_PROFILE") -}}
{{- if not $profile }}{{ $profile = "personal" }}{{ end -}}

# BROWSERS #
cask "firefox"
cask "google-chrome"
{{- if eq $profile "personal" }}
cask "brave-browser"
{{- end }}

# COMMUNICATION #
cask "slack"
{{- if eq $profile "personal" }}
cask "discord"
cask "whatsapp"
{{- end }}
```

When I run `chezmoi apply`, it generates the final `Brewfile` tailored to the environment. On a work machine, I simply run:

```bash
export DOTFILES_PROFILE=restricted
chezmoi apply
```

And just like that, it skips the non-essentials.

## Smart Git Configuration

I also use templates to configure Git dynamically. For example, I want to use different diff tools on macOS vs. Windows (if I ever use it, maybe better support in the future), and I want to rewrite GitHub URLs to use SSH only when I have a TTY (interactive session), avoiding authentication issues in CI.

`home/dot_gitconfig.tmpl`:

```ini
[user]
    email = "{{ .gitemail }}"
    name = "{{ .name }}"

[difftool "sourcetree"]
    {{ if eq .chezmoi.os "darwin" -}}
    cmd = opendiff \"$LOCAL\" \"$REMOTE\"
    {{ else if eq .chezmoi.os "windows" -}}
    cmd = '' \"$LOCAL\" \"$REMOTE\"
    {{- end }}

{{ if eq .tty true -}}
[url "git@github.com:"]
    insteadOf = https://github.com/
{{ end -}}
```

## Automated Validation with GitHub Actions

There is nothing worse than pushing a "quick fix" to your dotfiles and breaking your shell on every machine you own. To save myself from my own typos, I use **GitHub Actions** to test my setup on every push. It’s like having a QA team for my `.zshrc`.

I have workflows for both **macOS** and **Ubuntu**. They do the following:
1.  **Setup**: Download and run the `setup.sh` script.
2.  **Install**: Run `chezmoi apply` to install dotfiles and packages.
3.  **Test**: Run Bats tests to verify the installation.

Here is a snippet from `.github/workflows/macos.yaml`:

```yaml
jobs:
  build:
    runs-on: macos-14 # M1 Mac

    steps:
      - name: Setup dotfiles
        run: |
          # ... setup logic ...
          bash -c "$(curl -fsLS $URL)"

      - name: Test file existence
        run: |
          brew install bats-core
          cd $(chezmoi source-path)/../
          bats --print-output-on-failure \
            tests/files/common.bats \
            tests/files/macos.bats
```

## Testing with Bats

[Bats (Bash Automated Testing System)](https://github.com/bats-core/bats-core) allows me to write unit tests for my shell scripts and configuration.

I check if critical config files exist and if tools are installed correctly.

`tests/files/common.bats`:

```bash
#!/usr/bin/env bats

@test "[common] configuration files exist" {
    files_exists=(
        "${HOME}/.zshrc"
        "${HOME}/.config/starship.toml"
        "${HOME}/.config/nvim/init.lua"
        # ...
    )

    for file in "${files_exists[@]}"; do
        echo "Checking for existence of ${file}"
        [ -f "${file}" ]
    done
}

@test "[common] verify git configuration" {
    run git config --list
    [ "$status" -eq 0 ]
}
```

This gives me confidence that my `chezmoi apply` didn't just run, but actually put files where they belong.

## The Setup Script

Finally, the entry point is a `setup.sh` script that bootstraps everything. It handles:
- Installing Homebrew (on macOS).
- Downloading the `chezmoi` binary.
- initializing the repo.
- Keeping `sudo` alive during the installation process (so I don't have to type my password multiple times).

## Conclusion

Treating your dotfiles like a software project—with CI/CD, testing, and modular configuration—pays off. It makes setting up a new machine a breeze and ensures you always have a working environment, no matter where you are.

Check out the full repository here: [github.com/pragmaticivan/dotfiles](https://github.com/pragmaticivan/dotfiles)

## Acknowledgements

This setup didn't happen in a vacuum. I stood on the shoulders of giants to build this. Huge thanks to these open-source projects for the inspiration (and many other projects that I was not able to list):

- [shunk031/dotfiles](https://github.com/shunk031/dotfiles)
- [caarlos0/dotfiles](https://github.com/caarlos0/dotfiles)
- [KevinNitroG/dotfiles](https://github.com/KevinNitroG/dotfiles)

