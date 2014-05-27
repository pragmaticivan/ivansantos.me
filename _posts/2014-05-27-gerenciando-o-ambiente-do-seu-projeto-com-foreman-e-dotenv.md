---
layout: post
title: "Gerenciando o ambiente do seu projeto com Foreman e Dotenv"
description: ""
category:
date: 2014-05-27
permalink: /blog/2014-05-27-gerenciando-o-ambiente-do-seu-projeto-com-foreman-e-dotenv
image_graph: /assets/images/posts/foreman.jpg
language: pt-br
---

<!-- more -->

![Be Free!]({{ site.url }}/assets/images/posts/foreman.jpg)

### Introdução

Nenhuma aplicação costuma ser igual, geralmente cada uma tem sua particularidade quando se trata de utilização de serviços. Se você tem a sorte de sempre pegar projetos onde utiliza um simples serviço de banco de dados agradeça muito. Hoje em dia com a evolução da tecnologia para desenvolvimento de aplicações podemos contar com vários tipos de serviço, como banco de dados, background job, cron, redis, elasticsearch, guard, etc. Fazer todos os serviços rodarem ao mesmo tempo pode fazer com que você tenha um monte de abas no terminal abertas, pois alguns serviços necessitam utilização da sessão do terminal continuamente.

Se você está utilizando um Mac, por exemplo, provavelmente você usou Homebrew ou MacPorts para instalar as dependências do seu projeto, no fim você executou algo como:

{% highlight bash %}
ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents
{% endhighlight %}


No exemplo acima estou fazendo com que o serviço do Postgre seja iniciado juntamente com o sistema operacional.

Não, pera! Pense um pouco sobre isso.  Você vai rodar esse serviço a todo momento que seu sistema operacional iniciar. Se você tem alguma aplicação rodando a todo momento no seu sistema, pode até fazer sentido. Se isso não for o caso, por qual motivo você estaria fazendo algo como isso? Bom você não precisa!

David Dollar (lol, nome irado haha), percebeu que suas aplicações cada vez mais ficaram complicadas para serem executadas, isso resultou então na criação de uma gem chamada Foreman.

Foreman nada mais é que um gestor de aplicações baseado em Procfile. Seu objetivo é abstrair a quantidade de serviços que deveriam estar rodando para que sua aplicação funcione em um único local. Sendo assim então, ao invés de ter serviços desnecessários rodando em background, ou aplicações que necessitam ser executadas em várias abas do terminal para que sua aplicação funcione, você apenas agrupa e starta o necessário para sua aplicação funcionar em um único local.

### Use onde quiser!

![Be Free!]({{ site.url }}/assets/images/posts/befree.jpg)

Apesar do Foreman ser uma gem e a maioria dos desenvolvedores utilizar em aplicações ruby, isso não significa que necessariamente você precisa usar com ruby. Você pode rodar qualquer coisa que possa ser chamada pelo terminal em forma de linha de comando. Sendo assim, você possivelmente vai poder executar dependências da sua aplicação Java, Ruby, Python, Go, Javascript (Node.js) ou outra linguagem. Realmente é uma incrível ferramente que provavelmente não deveria ficar de fora do seu ambiente de desenvolvimento.

### Instalação

Para instalar o foreman é necessário ter ruby e rubygems instalado no seu sistema operacional. Basta executar `gem install foreman` para instalar a gem no sistema. Após isso é necessário criar um arquivo Procfile, na raís do projeto. É preciso definir uma chave para o nome do processo e o comando que deverá ser executado no terminal para a aplicação ser executada.
Veja um exemplo abaixo:

{% highlight bash %}

redis:          redis-server config/redis/development.conf
web:            bundle exec rails s
elasticsearch:  elasticsearch -f
sidekiq:        bundle exec sidekiq -v
solr_dev:       bundle exec rake sunspot:solr:run
solr_test:      bundle exec rake sunspot:solr:run RAILS_ENV=test
worker:         bundle exec rake resque:work QUEUE=*
guard:          bundle exec guard

{% endhighlight %}

Agora da uma olhada nesse código acima. Imagina cada comando desse rodando em uma aba do terminal, bagunça né? Ter que levantar cada serviço manualmente me daria um trabalho bem grande.

Para iniciar o ambiente de desenvolvimento basta executar o comando `foreman start`.

### Concorrência de processos
Uma feature interessante do Foreman é o suporte a execução de mais de um processo via concorrência. Você pode definir a quantidade de processos para cada aplicação(serviço) definido no Procfile.

Como exemplo, você pode incrementar  o número de workers, fazendo com que o serviço seja executado mais vezes em concorrência, veja o exemplo abaixo:

```
foreman start -c worker=2
```

### Deploy de aplicações no heroku e o isolamento de configurações de variáveis de ambiente com Dotenv

O Foreman é utilizado no deploy de aplicações no Heroku. Se alguma vez você já fez deployments usando Heroku, vai lembrar da utilização de variáveis de ambiente (env) para configurações específicas.

Provavelmente alguma você você pode ter passado pela situação, de definir uma chave onde você não pode subir para ambiente o versionamento do código. Vejamos um exemplo prático:

{% highlight ruby %}

config.paperclip_defaults = {
  :storage => :s3,
  :s3_credentials => {
    :bucket => ENV['S3_BUCKET_NAME'],
    :access_key_id => ENV['AWS_ACCESS_KEY_ID'],
    :secret_access_key => ENV['AWS_SECRET_ACCESS_KEY']
  }
}

{% endhighlight %}

No código acima estou setando algumas chaves para integração do storage S3 da Amazon com a gem Paperclip.

No heroku é bem trivial a configuração de uma variável de ambiente. Utilizando o Heroku toolbelt, podemos executar no terminal:

{% highlight bash %}
heroku config:add CONFIG_VAR_TEST=true
{% endhighlight %}

Na aplicação, podemos recuperar o valor da variável utilizando:

{% highlight ruby %}
ENV['CONFIG_VAR_TEST`]
{% endhighlight %}

Bem fácil né? O questionamento é, como definir variáveis de ambiente quando estamos no nosso ambiente de desenvolvimento?

Por nossa felicidade, o Foreman utiliza Dotenv como dependência e facilmente você pode configurar variáveis de ambiente utilizando arquivos `.env`.
Na raiz do projeto você deve criar um arquivo chamado .env definindo as variáveis da seguinte forma:

{% highlight ruby %}
VAR_TEST=true
VAR_TEST_HELLO=false
PORT_WEB=7000
{% endhighlight %}

Lembre-se que o arquivo `.env` não poderá ser versionado, assim deve-se ignorar este arquivo no `.gitignore` caso esteja utilizando git. Porém uma boa prática é utilizar um arquivo `.env.development` para que os desenvolvedores que participam do projeto possam saber quais variáveis devem ser definidas para o funcionamento adequado da aplicação.


Veja o exemplo abaixo de Procfile:

```
web: bundle exec rails s -p $PORT_WEB
```

Levando em conta que estamos querendo fazer deployment no Heroku, nem todas as configurações do ambiente de desenvolvimento podem ser as mesmas do ambiente do Heroku. Você precisa criar um novo Procfile para seu ambiente de desenvolvimento. Normalmente utilizo um Procfile.development para ambiente local e um Procfile para o Heroku. Para utilizar o procfile alternativo você pode utilizar `foreman start -f Procfile.development`.