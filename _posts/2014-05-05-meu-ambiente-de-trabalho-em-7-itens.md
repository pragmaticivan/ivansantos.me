---
layout: post
title: "Meu ambiente de trabalho em 7 itens"
description: ""
category:
date: 2014-05-05
permalink: /blog/2014-05-05-meu-ambiente-de-trabalho-em-7-itens
image_graph: /assets/images/posts/myworkflow.jpg
language: pt-br
---

<!-- more -->

Resolvi adotar uma antiga brincadeira que a algum tempo atrás foi seguida por muitos desenvolvedores, consequentemente acabei vendo em blogs que costumo ler, como o do [Fernando Vieira](http://simplesideias.com.br/meu-ambiente-de-desenvolvimento-em-7-itens/) e o do [Zeno Rocha](http://zenorocha.com/meu-ambiente-de-trabalho-em-7-itens/). Pensei então, muito tempo atrás quando se fala em tecnologia significa muitas mudanças, e agora? O que todas essas pessoas estão usando no momento? Meu ambiente atual é:

![My Workflow]({{ site.url }}/assets/images/posts/myworkflow.jpg)


### Máquina / Sistemas Operacionais
Usuário apaixonado desde 2009, utilizo Mac OS X desde então. Possuo uma considerável equipamento(`transformer`). Minha máquina atual é um Macbook Pro Retina 15" core i7 Late 2013, 16GB RAM, 500GB HD SSD. Comprei esse equipamento na minha estadia em Austin-TX.

Infelizmente no Brasil está cada vez mais salgado comprar um, por isso ainda mantenho meu primeiro macbook para emergência e viagens por questão de segurança, se trata de um Macbook White Late 2009 core 2 duo, 8GB RAM, 250GB HD.

Quando preciso de algo fora deste escopo como Windows e Linux, utilizo virtualização com VirtualBox.

E para finalizar, como parte do meu workflow de sistema operacional, utilizo [Vagrant](http://www.vagrantup.com/), e aos poucos utilizando o [Docker](https://www.docker.io/).


![Mac OS X]({{ site.url }}/assets/images/posts/mac-os-mavericks.jpg)


### Linguagens de Programação
Hoje se alguém for perguntar com qual linguagem de programação eu mais trabalho, sem dúvida falaria que ruby, até mais que javascript mesmo tendo um pé na área de front-end. Porém já trabalhei alguns anos com PHP, hoje não utilizo pra mais nada que não seja relativo a Wordpress. Gosto muito de javascript, e a algum tempo venho dando uma lida em node.js. Já trabalhei também com Objective-C em alguns poucos projetos de IOS, porém a mais de 1 ano não tenho oportunidade de trabalhar com isso.

### Editor
Quem já trabalhou comigo, sabe que utilizo o Sublime Text 3 para quase todos os meus projetos, porém ainda sinto a necessidade de quando a coisa aperta muito, utilizar IDEs como rubymine para debug de aplicações e consumo de memória em execução (Pretendo largar esse vício).

![Sublime Text Editor 3]({{ site.url }}/assets/images/posts/sublime-editor.jpg)


### Controle de Versão
Já tive a oportunidade de trabalhar com alguns sistemas de controle de versão, como por exemplo mercurial e SVN. Porém hoje em dia utilizo GIT para todos os meus projetos pessoais e da empresa que trabalho.

![Git Branching Model](/assets/images/posts/git-branching-model.jpg)

Não poderia deixar de falar de workflows no git. Para Projetos open source costumo utilizar o básico workflow baseado em Forks e Pull Requests. Para projetos privados varia um pouco, as vezes Git branching model onde apenas uma pessoa faz review do código (não acho tão eficiente), e as vezes utilizo workflow baseado em Forks, porém todos do time do projeto podem fazer review tanto da feature quanto do código (acho essa forma incrível).

Não poderia deixar de falar de uma ferramenta que utilizo muito diáriamente para trabalhar com [Git branching model](http://nvie.com/posts/a-successful-git-branching-model/), o [Git Flow](http://danielkummer.github.io/git-flow-cheatsheet/), que ajuda muito na organização e merge de branchs para feature, release e bugs.

### Terminal
Quando se trata de terminal, hoje em dia sempre menciono o Iterm 2, infelizmente não testei muitos dos outros concorrentes além do próprio terminal do Mac OS X, me sinto bem satisfeito. Utilizo também o Hotkey Window do iTerm 2 para funções rápidas fora do escopo do projeto, presionando `fn + f6` surge uma janela no topo da tela.

![iTerm 2]({{ site.url }}/assets/images/posts/iterm2.jpg)

No terminal costumo utilizar uma versão customizada do ZSH, o [Oh My Zsh](https://github.com/robbyrussell/oh-my-zsh).

Recentemente encontrei um projeto que considero irado e que tira toda a burocracia e tempo gasto para quem não trabalha com shell script para configuração de `dotfiles`. Desenvolvido por [Eduardo Lundgren](https://github.com/eduardolundgren), o [Dotfiles](https://github.com/eduardolundgren/dotfiles) é o primeiro dotfiles criado com Javascript utilizando Grunt.js, isso mesmo, se você trabalha com javascript vai adorar esse projeto.

* 1 aba: rails server
* 2 aba: guard rspec
* 3 aba: rails console / git flow
* 4 aba: (dependendo do projeto) grunt watch / gulp watch
* Hotkey Window: navegação e comandos aleatórios sem foco no projeto atual

### Browser
Após o lançamento do novo sistema de Keychain sincronizado com iCloud passei a usar muito o safari, mas após a aquisição do 1password e a fácil integração com Chromecast <3, hoje utilizo como principal navegador o Google Chrome. Tenho instalado na minha máquina o Opera, Chrome, Firefox e Safari para testar projetos no qual participo. Para testes em Internet Explorer utilizo máquina virtual.

### Software
Alguns dos aplicativos que costumo usar e outros que sempre estão em execução no meu sistema operacional:

* Google Chrome
* Slack
* Spotify
* Airmail
* Keynote
* Caffeinated
* Copy e Dropbox
* VirtualBox
* Mou
* Twitter
* Harvest
* Pivotal Tracker
* Photoshop
* 1Password
* Skype, Adium e LimeChat
* Evernote
* Skitch


### Multimídia
Em 2013 após passar alguns meses morando nos EUA, foi me apresentada uma ferramenta que hoje costumo utilizar diáriamente, e como usuário assinante, o Spotify simplesmente faz o ato de ouvir música se tornar mais social, me trazendo indicações de novos estilos e bandas que possivelmente não iria conhecer sem essa ajuda. Uso [fones de ouvido anti-sociais](http://www.amazon.com/Audio-Technica-ATH-M50-Professional-Monitor-Headphones/dp/B000ULAP4U/ref=sr_1_2?ie=UTF8&qid=1399264243&sr=8-2&keywords=audiotechnica+ath+m50) para não perder a atenção com ruídos externos enquanto trabalho. Minhas duas playlists principais para trabalho são [Workaholic Day](http://open.spotify.com/user/1298209581/playlist/6Y4nLRqsVyQmZQvkF0KXkL) e [Deep Focus](http://open.spotify.com/user/spotify/playlist/2ujjMpFriZ2nayLmrD1Jgl).


Será que algum leitor do meu blog se habilita a fazer o seu?