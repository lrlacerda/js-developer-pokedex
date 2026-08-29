# 📱 Pokedex

Projeto de estudo front-end que consome a [PokeAPI](https://pokeapi.co) para exibir uma Pokedex navegável, com listagem paginada de Pokémons e uma página de detalhes para cada um. Construído em HTML, CSS e JavaScript puro (vanilla), sem frameworks ou etapa de build.

## ✨ Funcionalidades

- Listagem de Pokémons com nome, número, tipo(s) e imagem, buscados diretamente da PokeAPI;
- Paginação por botão "Load More", carregando mais Pokémons sob demanda até o total de 248 registros;
- Página de detalhes (`pokemon-details.html`) com número, tipo(s), habilidades, altura, peso e estatísticas base de cada Pokémon;
- Layout responsivo estilizado por tipo de Pokémon (cores diferentes para cada tipo).

## 🚀 Tecnologias utilizadas

| Tecnologia | Uso no projeto |
| --- | --- |
| HTML5 | Estrutura das páginas |
| CSS3 (Normalize.css, Google Fonts) | Estilização e responsividade |
| JavaScript (vanilla) | Consumo da API e manipulação do DOM |
| [PokeAPI](https://pokeapi.co) | Fonte dos dados de Pokémons |

## 🗄️ Estrutura do projeto

```
js-developer-pokedex/
├── assets/
│   ├── css/
│   │   ├── global.css
│   │   ├── pokedex.css
│   │   └── pokemon-details.css
│   └── js/
│       ├── pokemon-model.js      # Classe Pokemon
│       ├── poke-api.js           # Chamadas à PokeAPI e conversão dos dados
│       ├── main.js               # Listagem e paginação
│       └── pokemon-details.js    # Lógica da página de detalhes
├── img/
├── index.html               # Listagem de Pokémons
└── pokemon-details.html     # Detalhes de um Pokémon específico
```

## ▶️ Como executar

Este é um projeto estático, sem dependências ou build. Basta abrir o arquivo `index.html` diretamente no navegador, ou servir a pasta com uma extensão como o Live Server do VS Code para evitar restrições de CORS/fetch em `file://`.

## 📬 Contato

Lucas Ribeiro Lacerda
