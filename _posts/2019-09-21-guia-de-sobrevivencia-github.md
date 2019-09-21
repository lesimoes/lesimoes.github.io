---
title: Guia de Sobrevivência Github
layout: post
date: 2019-09-21 18:00
image: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyRH1xWERfpkmrEKKy9hBeK3W2u_Bcw8INLphH0Hbh0tpXW00G
headerImage: true
tag:
- dev
category: blog
author: lesimoes
description: Um guia rápido, porém necessário, para não sofrer com o github.
---

### Antes de tudo...

Git e Github não são a mesma coisa.
<br><br>
**Git** : Ferramenta para controle de versão (versionamento) <br>
**Github** : Site onde você pode usar o Git (por debaixo dos panos), em resumo, uma rede social que tem o Git.


Existem ferramentas GUI (Interface Gráfica do Usuário) como: [GitKraken](https://www.gitkraken.com/) ou [Github Desktop](https://desktop.github.com/)


Considere (no futuro) aprender o Git por linha de comando.


### Por que vamos usar o Github?

Porque é a melhor forma de pegar o código feito em sala de aula. Ao clonar (copiar) um código do Github você terá acesso a todas as configurações necessárias para executá-lo. 

Nesse micro-tutorial vamos ver três opções para pegar o código: 

1. Download
2. Clone
3. Fork


#### 1 - Downloadeando o projeto

<p>Primeiro vamos pelo caminho mais fácil, fazer o download do projeto: Vá até o repositório e click no botão verde *'Clone or Download'*, em seguida click em *'Download Zip'*, descompacte o arquivo e abra na sua IDE. Pronto, bem simples!</p>


#### 2 - Clonando o projeto

<p>Vá até o repositório e click no botão verde *'Clone or Download'*, em seguida copio o endereço exibido na caixinha, vai ser algo como: https://github.com/lesimoes/bostinho.git</p>

<p>Agora você pode usar uma ferramenta gráfica para clonar o projeto... Ou usar o terminal. Se você usa o Windows baixe esse cara aqui:</p>[Git](https://gitforwindows.org/)

<p>Beleza, agora vai lá no terminal (ou no Gitbash se for Windows), cria um diretório ou navegue até o diretório em que você que clonar o projeto. Feito isso digite:</p>


{% highlight bash %}
git clone https://github.com/lesimoes/bostinho.git
{% endhighlight %}


<p>Feito isso o projeto já está clonado no diretório! Sucesso total!</p>
<p>Obs.: Estamos usando o repositório do bostinho como exemplo, porém você deve substituir o endereço dele pelo projeto que quer clonar.</p>


#### 3 - Fork no projeto

<p>O fork cria um clone do projeto diretamente na sua conta do Github, para faze-lo basta ir até o repositório do projeto que Github. Na parte superior existe o botão *'Fork'*, basta clicka-lo e seguir os passos. Em instantes um novo repositório será criado na sua conta.</p>

<p>Após o fork basta seguir os passos 1 ou 2 para baixar o projeto.</p>