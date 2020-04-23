---
template: post
title: 3 bons motivos para usar Nuxt.js em seus projetos Vue ✔
slug: 3-bons-motivos-para-usar-nuxt-em-seus-projetos-vue
draft: false
date: 2020-04-23T04:34:00.000Z
description: >-
  O Nuxt.js é um framework do Vue.js que trás diversos benefícios para tornar o
  projeto produtivo, escalável e performático.
category: VueJS
tags:
  - NuxtJS
  - VueJS
  - Frontend
  - Javascript
---
O [Nuxt,js](https://nuxtjs.org/guide) é um framework Vue.js que facilita quando o objetivo é tirar de vez aquela grande ideia do papel, algo que você planeje desenvolver pensando em maximizar cada aspecto do seu frontend desde a produtividade da equipe até a performace da aplicação. O framework trás um ambiente pronto para produção, abstraindo diversas configurações e situações que te permitem focar mais na solução do seu problema e menos em aspectos tecnológicos que um ambiente maduro exige.

Certo, então quais seriam TODAS essas maravilhas que o Nuxt.js pode nos proporcionar... Veremos a seguir.

![Nuxt.js: um framework Vue.js](/media/nuxtjs-introduction-1-638.jpg "Nuxt.js: um framework Vue.js")

## 1. Estrutura de diretórios e arquivo de configuração central

"Onde vou colocar minhas views?", "views ou pages?", "Onde e como configuro essa biblioteca que adiconei?!" são perguntas normais ao começar um novo projeto com o Vue-cli, por exemplo. Talvez para alguém mais experiente, isso não seja um problema, mas para novos usuários e pessoas que migram de outros frameworks, isso possa ser uma barreira.

Com o Nuxt, ao criar um novo projeto, você tem uma estrutura de pastas bem intuitiva que te ajuda a deixar seu projeto organizado desde o início. Por exemplo, o framework já deixa uma pasta onde você deverá adicionar seus Layouts, Pages, Componentes, Middlewares e muito mais. Outro ponto importante é um arquivo javascript onde toda a configuração do framework pode ser customizada em um só local, bem como a de outras bibliotecas que se integram ao projeto como o Axios para se fazer requisições HTTP. 

## 2. Rotas? Não se preocupe com elas

Uma das melhores features do Nuxt é que você precisa se preocupar com as rotas, elas são criadas dinâmicamente de acordo com a estrutura do seu diretório "Pages" que é onde você deveria colocar os componentes responsáveis por cada página que é renderizada. Conforme a aplicação vai ficando robusta, lidar com rotas vai se tornando um processo repetitivo e confuso e o Nuxt nos dá uma mão nisso. Vamos a um exemplo: 

```pages/
--| user/
-----| index.vue
-----| one.vue
--| index.vue
```

Essa estrutura dentro da pasta "pages" irá gerar, automaticamente, o seguinte arquivo de rotas:

```javascript
router: {
  routes: [
    {
      name: 'index',
      path: '/',
      component: 'pages/index.vue'
    },
    {
      name: 'users-id',
      path: '/users/:id?',
      component: 'pages/users/_id.vue'
    },
    {
      name: 'slug',
      path: '/:slug',
      component: 'pages/_slug/index.vue'
    },
    {
      name: 'slug-comments',
      path: '/:slug/comments',
      component: 'pages/_slug/comments.vue'
    }
  ]
}
```

## 3. Universal Mode e Static Generated 🌎

Ao iniciar qualquer projeto frontend nos principais frameworks da atualidade como Vue, Angular e React, você estará iniciando, por padrão, uma **SPA – Single Page Application**. Uma SPA, como o nome diz, é uma aplicação de página única que é renderizada completamente em sua primeira requisição dentro de um elemento html como uma div. Apesar dos diversos benefícios dessa abordagem, ela não é eficiente pensando na performace do primeiro acesso, afinal, só temos nossa página inicial após o framework buscar todas as informações que ele precisa e renderizá-las (**Client Side Rendering**). Isso tem seu custo quando pensamos numa aplicação robusta e na indexação dos mecanismos de busca como Google, Bing e outros crawlers. 

Com o Nuxt, temos a possibilidade de desenvolver uma aplicação utilizando o **Universal Mode** que trás o melhor das duas abordagens**.** Nesse modo, conseguimos utilizar o **Server Side Rendering – SSR** onde temos páginas sendo renderizadas pelo servidor, assim, quando realizamos uma requisição, o frontend já recebe perfeitamente seu conteúdo, o que acelera a primeira interação do usuário com o sistema.O Nuxt utiliza um servidor NodeJs que serve sua aplicação, e, após o renderização, você pode continuar navegando pelas rotas da aplicaçao sem precisar realizar novas requisições, sendo elas tratadas diretamente pela aplicação como em uma **SPA**. Isso é possível graças ao Prefetching do Nuxt que busca antecipadamente as informações de uma rota quando ela está visível na sua tela.

![Nuxt.js smart prefetching](/media/51692960-4158be80-1ffe-11e9-9299-61881d06412e.gif "Nuxt.js smart prefetching")

Uma das grande inovações do Nuxt é a **Static Generated.** Com ela, você consegue gerar, dinâmicamente, uma pasta dist com todos os arquivos estáticos da sua aplicação com o comando `nuxt generate`. Caso você não tenha uma página com constantes mudanças como em um blog, portifólio ou uma página institucional, essa abordagem será perfeita pois não há nenhum tipo de renderização em tempo de uso, apenas quando os arquivos são gerados. 

```
-| pages/
----| about.vue
----| index.vue
```

Com esse esquema de páginas, você irá gerar o seguinte diretório:

```
-| dist/
----| about/
------| index.html
----| index.html
```

## Outros motivos

Pra mim, os 3 motivos acima são os principais para se usar o Nuxt em uma aplicação real. Mas claro, existem outros bons motivos que agregam valor no uso desse framework como:

* Adição de 2 lifecycle hooks para a captura de eventos que são o `AsyncData` e `fetch`. Muito úteis ao utilizar o Universal Mode;
* O Nuxt suporta integração com diversos módulos que podem vir a ser importantes para a aplicação como o i18n, PWA, Markdown, Sitemap, Analytics e CMS;
* Modularização do Vuex que nos permite organizar em arquivos diferentes os Store's responsáveis por cada módulo do sistema;
* O Axios pode ser facilmente configurado no arquivo de configurações central, além disso, a aplicação já conta com uma Progressbar nativa já integrada ao axios que pode ser facilmente customizada ao seu gosto;

Lembra de mais algo? Deseja fazer uma consideração? Comenta aí embaixo! Até a próxima 😎