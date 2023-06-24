---
title: Contribuindo em projetos Open Source utilizando git [parte 1]
description: "Um guia prático sobre como contribuir para projetos utilizando git e github"
image: /content/images/articles/github-bg.jpg
date: "2020-07-14"
language: "pt-br"
draft: true
slug: "2020-07-14-contribuindo-em-projectos-open-source-part-1"
---

## Prioridades

No início da minha carreira, perdi boa parte do meu tempo investindo em freelancing. Ainda não tinha descoberto, ou apenas realizado a importância da colaboração em projetos Open Source. Talvez por falta de incentivo, ou até mesmo por precisão financeira.

Sempre utilizei GIT para versionar meus projetos. A pouco mais de 1 ano comecei a embarcar nesse mundo, fiz novos amigos, conheci pessoas incríveis, aprendi muito. Passei a perceber que consegui adquirir tanto conhecimento lendo e revisando código de outros desenvolvedore.

Após participar de vários projetos. Incrivelmente a quantidade de contribuidores vem crescendo muito, e alguns que querem ajudar não sabem bem como começar, ou como contribuir da forma correta. Resolvi então criar este tutorial com algumas dicas que utilizo no dia-a-dia.

<img src="/content/images/articles/git-commit-graph.png" alt="Git commit graph" />

## O que é Open Source?

O termo Open Source (Código aberto em português), diz respeito a software de com código aberto, transparente e de forma colaborativa. Significa que você pode ter um executável final do projeto e também ter acesso ao código fonte de como esse executável foi produzido. Uma vez tendo acesso ao código fonte, é possível compreender como o software foi produzido e o mais importante, é possível modificar, solucionar problemas e adicionar novas funcionalidades. Um grande exemplo é o Kernel do Linux, que teve a contribuição de milhares de desenvolvedores.

## Por que eu deveria contribuir?

A maioria das vezes se resume no sentimento de solucionar um problema, publicar e ver sua solução sendo utilizada por centenas, milhares, ou até milhões de pessoas. Isso é realmente incrível!
Mas não é só isso, contribuindo você pode:

* Melhorar seus conhecimentos de desenvolvimento.
* Aprender com outros desenvolvedores.
* Praticar e/ou aprender determinada tecnologia que você esteja querendo aprender/melhorar.
* Criar sua presença online! Nada melhor do que se tornar relevante na hora de procurar um novo emprego.

## Quero ajudar mas não sei qual projeto contribuir e por onde começar

Atualmente enquanto escrevo esse post, o Github na minha visão é a maior rede de projetos open-source do mundo. São mais de 5 milhões de projetos abertos crescendo a cada dia e esperando ajuda de novos desenvolvedores.

Não basta saber a existência dessa vasta quantidade de projetos. É preciso se identificar com algum. A primeira etapa é procurar um projeto interessante para você. Um projeto que talvez você use diáriamente, e que possivelmente tenha achado algum bug. Talvez até algo que lhe traga interesse e que você queira se aperfeiçoar mais. Geralmente um outro desenvolvedor pode pedir sua ajuda por achar o seu conhecimento o suficiente para resolver determinados problemas. Essa é a magia em ter uma grande comunidade.

Após escolher um projeto, caso não saiba por onde ajudar, alguns projetos tem uma espécie de ROADMAP (Lista de funcionalidades desejáveis). Nessa lista você pode identificar o que está faltando ser implementado no projeto.

Existem algumas formas de procurar um projeto interessante no qual você possa se identificar:

* [Codetriage](http://www.codetriage.com/) – Na minha visão uma plataforma visionária! Você fala qual projeto gostaria de contribuir, e recebe algum email com algumas tarefas que precisam de ajuda.
* [GitHub Explore](https://github.com/explore) – Lista de projetos populares no Github.
* [GitHub Collections](https://github.com/collections) – Projetos listados a partir dos interesses do desenvolvedor.

## Coisas para se conhecer antes de entrar em um projeto

Atualmente sou mais ativo na comunidade ruby e javascript, ao longo do tempo conversando com outros desenvolvedores e usando vários projetos Open Source, percebi algumas características que me fazem perceber quais projetos são mais seguros e tendem a evoluir melhor como requisito para utilização em meus projetos.

## Comunidade: Um por todos e todos por um

Um projeto tende a crescer adequadamente quando possui uma boa comunidade, desenvolvedores, designers, formadores de opinião. Todos são bem-vindos e cada um contribui como pode, o importante mesmo é ajudar e fazer com que o projeto cresça da melhor forma possível.

Existem algumas divisões no processo de colaboração:

* **Owner**: Usuário que criou o projeto. Geralmente com acesso completo para edição e integração do projeto.
* **Maintainers e Collaborators**: São usuários muito ativos no projeto. Geralmente dão a direção e orientam contribuidores para que o projeto tome o caminho ideal. Tem acesso de escrita no repositório, porém normalmente segue o fluxo normal de contribuição com Pull Request.
* **Contributors**: Contributors (Contribuidores) são todos os usuários que já fizeram um pull request (contribuição) que foi aceita e mergida ao projeto.
* **Community Members**: São todos os usuários que tomam conta e contribuem de alguma forma para o projeto, seja discutindo, requisitando novas funcionalidades, contribuindo com código e até palestrando.

## Organização(Team)

Após um certo nível de maturidade, os Owners de projetos geralmente criam organizações. Tirando assim o vínculo direto do projeto ao seu perfil de usuário no Github e criando uma organização para representar todos os repositórios relativos ao projeto. Ex:

<img src="/content/images/articles/github-org.png" alt="Github org" />


Além das divisões normais, cada Organização pode ter sua própria nomenclatura para os tipos de Contribuidores do projeto, veja o exemplo abaixo:

<img src="/content/images/articles/team-org.png" alt="Team org" />

## Documentação: Disseminando conhecimento sobre o projeto, ensinando novos usuários
Um bom projeto permite que novos usuários tomem conhecimento facilmente das funcionalidades e requisitos para utilização. Utilizamos vários recursos de documentação para essa finalidade.

## Readme

Geralmente quando você cria um projeto no Github ou Bitbucket eles sempre oferecem a criação inicial do arquivo README.md. O .md representa a sintaxe markdown, se você não sabe como utilizar, sugiro ler o post “[Adicionando Markdown ao seu kit de sobrevivência na web](https://medium.com/@pragmaticivan/contribuindo-em-projetos-open-source-utilizando-git-parte-1-d2b160e0abb5)”. O readme oferece a descrição básica do projeto com detalhes de como usar, compilar ou até como contribuir e acompanhar o projeto.

## Contributing

O arquivo CONTRIBUTING lista uma breve documentação de como contribuir com o projeto. Recentemente o Github criou uma funcionalidade que integra este arquivo ao processo de Pull Request e criação de Issues. Ao iniciar a criação de uma issue, será possível ver um alerta sugestionando uma leitura no guia de contribuição do repositório:


<img src="/content/images/articles/contributing.png" alt="Contributing" />


## License

O arquivo LICENSE representa o tipo de licença do projeto. Geralmente projetos Open Source informam aos usuários e contribuidores o que eles podem e não podem fazer no projeto (usar, modificar, redistribuir, etc). Existem vários tipos de licenças, você pode descobrir qual se encaixa melhor no perfil do seu projeto no site choosealicense.com.

## Documentação e Wikis

Geralmente projetos iniciam apenas com sua documentação no arquivo README. A medida que o projeto cresce é necessário criar outras formas de documentação. Geralmente incluindo em uma pasta /doc. Ou criando páginas WIKIs. WIKIs são recursos providos pelo Github ou Bitbucket para que se possa criar documentações simples e navegáveis.

## TO BE CONTINUED…
Até então você conseguiu aprender bastante coisa sobre o mundo Open Source. Em breve tem mais novidades, acompanhe o blog! Nos vemos logo mais.
