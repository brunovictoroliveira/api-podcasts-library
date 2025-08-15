# Podcast Manager

### Descrição

Um app ao estilo Nextflix onde eu possa centralizar diferentes episódios de podcasts separados por categoria

### Domínio

Podcasts feitos em vídeo

### Features

- Listar os podcasts em sessões de categorias

  - [saúde, fitness, mentalidade, humor]

- Filtrar episódios por nome de podcast

### Como

#### Feature:

- Listar os podcasts em sessões de categorias

#### Como vou implementar:

GET: retorna lista de episódios

response:

URL das imagens: https://i.ytimg.com/vi/idvideo/ maxresdefault || hqdefault . jpg
URL Vídeo: https://www.youtube.com/watch?v= idvideo

```js
[
  {
    podcastName: "inteligência ltda",
    episode:
      "FILOSOFIA X RELIGIÃO: RODRIGO SILVA E CLÓVIS DE BARROS - Inteligência Ltda. Podcast #1616",
    videoId: "nPRACaxcCUk",
    cover: "https://i.ytimg.com/vi/nPRACaxcCUk/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=nPRACaxcCUk",
    category: ["filosofia", "religião"],
  },
  {
    podcastName: "inteligência ltda",
    episode:
      "O PLANO SECRETO DE TRUMP: DANIEL LOPEZ - Inteligência Ltda. Podcast #1610",
    videoId: "_CpPNo5Y-1w",
    cover: "https://i.ytimg.com/vi/_CpPNo5Y-1w/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=_CpPNo5Y-1w",
    category: ["política", "religião"],
  },
];
```
