---
layout: post
title: "Adicionando Markdown ao seu kit de sobrevivência na web"
description: ""
category:
date: 2014-04-15
permalink: /blog/2014-04-15-adicionando-markdown-ao-seu-kit-de-sobrevivencia-na-web
image_graph: /assets/images/posts/markdown-logo.jpg
language: pt-br
---


<!-- more -->
![Markdown logo](/assets/images/posts/markdown-logo.jpg)

Se você teve interesse em ler este artigo, provavelmente já ouviu falar sobre Markdown. Mas o que é isso?
>  Markdown é uma sintaxe de formatação de texto simples visualmente limpo e claro o suficiente para  ser capaz de tornar fácil a escrita e leitura de textos. Além de ter uma fácil utilização, ele pode ser convertido facilmente para HTML.

Markdown na verdade são duas coisas: (1) uma sintaxe de formatação de texto simples; e (2) uma ferramenta de software, escrita em Perl (Linguagem utilizada no primeiro script de conversão), que é utilizada para converter texto simples em HTML válido.

Criada em 2004 por John Gruber com contribuições substanciais de Aaron Swartz, o markdown foi desenvolvido com o objetivo de que pessoas consigam escrever textos simples com a facilidade para leitura e escrita, e opcionalmente conseguir converter toda a estrutura para XHTML (ou HTML) válido.

Talvez você já tenha ouvido falar sobre formatação WYSIWYG (em português: O que você vê é o que você obtém). Então agora pense sobre Markdown como uma ótima forma simplificada do WYSIWYG.

Tomando sugestões e convenções existentes para marcação de texto, a linguagem foi projetada para ser lida como está por seres humanos.

O primeiro script para conversão da linguagem foi escrito por John Gruber utilizando Perl. Atualmente é distribuido sob a lisença BSD-style (open source). Atualmente o script é implementado em outras linguagens de programação.

Hoje em dia é frequentemente utilizado para escrita de documentação, páginas estáticas e wikis de projetos. Com o tempo veio sendo adotada por milhares de desenvolvedores na comunidade de tecnologia.

### Ainda não entendeu o que é?

Vou explicar de uma forma mais amigável. Markdwon pode ser facilmente escrito com um editor de texto básico como por exemplo o TextEdit do MacOS ou o Notepad do Windows (Ok... isso não inclui usar o Word).
É uma eficiente e fácil forma para escrever textos para serem convertidos em HTML. Geralmente a extensão de arquivo desse tipo de marcação termina com `.md` ou `.markdown`. Porém, eventualmente você vai estar utilizando uma ferramenta online como por exemplo um [GIST](https://gist.github.com/) no [Github](https://github.com/) e quase sempre não vai precisar salvar esse tipo de arquivo, a não ser que por exemplo você utilize como base para criação de páginas e posts para um site estático.

Veja um exemplo de como funciona o processo de conversão:

#### Texto em Markdown:

```
A First Level Header
====================

A Second Level Header
---------------------

Now is the time for all good men to come to
the aid of their country. This is just a
regular paragraph.

The quick brown fox jumped over the lazy
dog's back.

### Header 3

> This is a blockquote.
>
> This is the second paragraph in the blockquote.
>
> ## This is an H2 in a blockquote
```

#### Convertido para HTML:

```
<h1>A First Level Header</h1>

<h2>A Second Level Header</h2>

<p>Now is the time for all good men to come to
the aid of their country. This is just a
regular paragraph.</p>

<p>The quick brown fox jumped over the lazy
dog's back.</p>

<h3>Header 3</h3>

<blockquote>
    <p>This is a blockquote.</p>

    <p>This is the second paragraph in the blockquote.</p>

    <h2>This is an H2 in a blockquote</h2>
</blockquote>
```

### Quais sites atualmente utilizam o Markdown?

Vários sites adoraram essa sintaxe como padrão para várias áreas de seu projeto. Abaixo você pode conhecer alguns deles:

* [Stack Overflow](http://stackoverflow.com/)
* [Github](https://github.com/)
* [Bitbucket](https://bitbucket.org/)
* [Reddit](http://www.reddit.com/)

Com essa larga adoção, o desenvolvedor [Jeff Atwood](http://en.wikipedia.org/wiki/Jeff_Atwood), cofundador do [Stack Overflow](http://stackoverflow.com/), pediu por uma [padronização](http://blog.codinghorror.com/the-future-of-markdown/) do Markdown.


### Projetos interessantes que trabalham com Markdown

Seguindo o fluxo de adoção, você provavelmente já deve ter ouvido falar sobre o movimento de geração de conteúdo estático. Cada vez mais os desenvolvedores estão adotando isso em seus projetos e portfolios. Um ótimo exemplo para isso são as páginas estáticas do [GitHub](https://github.com/), onde você pode desenvolver um site estático e servir em uma URL utilizando o branch `gh-pages`. Leia mais sobre como criar páginas Web para repositórios no [GitHub](https://github.com/) [aqui](http://tableless.com.br/criando-paginas-web-para-seus-repositorios-com-o-github-pages/). Ao longo do tempo foram lançadas ótimas ferramentas para geração e compilação de páginas estáticas, dois projetos mais conhecidos são o [Docpad](http://docpad.org/) e o [Jekyll](http://jekyllrb.com/), o último foi desenvolvido pela equipe do Github. Caso queira saber mais sobre isso, existe um ótimo artigo sobre DocPad escrito por Vitor Britto [aqui](http://www.vitorbritto.com.br/blog/a-nova-geracao-web-estrelando-docpad/) e um outro muito bom falando sobre Jekyll no site do [tableless](http://tableless.com.br/jekyll-servindo-sites-estaticos/).

### Aplicativos :)

A maioria das coisas sobre Markdown é free. Se você pensa em escrever e testar a conversão do markdown de forma fácil, provavelmente você vai gostar de utilizar uma das ferramentas abaixo:

* [Mou](http://mouapp.com/) - (Mac OS) Na minha opnião é a melhor ferramenta.
* [Alternativas para Mou no windows](http://alternativeto.net/software/mou/?platform=windows)
* [ReText](http://sourceforge.net/p/retext/home/ReText/) - Caso você seja usuário de linux
* [Sublime + Markdown](http://www.macstories.net/roundups/sublime-text-2-and-markdown-tips-tricks-and-links/) - Caso você queira testar direto no sublime, aconselho ler este artigo.
* [Stack Edit](http://stackedit.io) - Ótima plataforma web

### Escrevendo um livro

Markdown me surpreende a cada dia. Ao longo do tempo empresas e projetos começaram a utilizar essa sintaxe para coisas incríveis como por exemplo, escrever um livro, ou até criar exercícios baseados em livros. Elton Minetto [neste post](http://eltonminetto.net/blog/2012/11/29/escrevendo-um-livro-do-modo-nerd/) fala sobre como ele escreveu um livro utilizando Markdown aplicando ao workflow do [leanpub](https://leanpub.com/). O [GitHub](https://github.com/) a pouco tempo criou uma ferramenta chamada [GitBook](http://www.gitbook.io/) para gerar livros com exercícios utilizando Markdown.

### Tunando o Markdown

Markdown por si só é uma ótima ferramenta para o seu projeto, porém você ainda pode utilizar outras opções baseadas no no mesmo para ter uma enorme gama de possibilidades. Um exemplo disso é o MultiMarkdown.
MMD (MultiMarkdown) é uma expansão do Markdown, onde é incluído várias *features* como tabelas, notas de rodapé e citações.
MultiMarkdown pode converter texto simples em muito além do que apenas HTML. Incluindo nesta lista de conversão o PDF (no formato de LaTeX), OPML ou até OpenDocument que pode ser convertido em RTF e Microsoft Word.


### Quer aprender?

Segue abaixo alguns links interessantes para ajudar nos seus estudos sobre Markdown:

* http://daringfireball.net/projects/markdown/syntax
* https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
* https://help.github.com/articles/github-flavored-markdown
* https://github.com/fletcher/MultiMarkdown/wiki/MultiMarkdown-Syntax-Guide


### Referências

* http://fletcherpenney.net/multimarkdown/
* http://www.aaronsw.com/weblog/001189
* http://www.gitbook.io/
* http://eltonminetto.net/blog/2012/11/29/escrevendo-um-livro-do-modo-nerd/
* https://www.linuxnewmedia.com.br/lm/noticia/markdown_pode_ser_definido_como_padraeo
* https://daringfireball.net/projects/markdown/
* http://whatismarkdown.com/
* http://br-mac.org/2013/09/o-que-e-markdown.html
* http://canaltech.com.br/o-que-e/programacao/Voce-sabe-o-que-e-Markdown/
* http://en.wikipedia.org/wiki/Markdown
* https://daringfireball.net/projects/markdown/