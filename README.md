# Amazon.com.br Clone - Projeto Acadêmico

Clone acadêmico da Amazon.com.br construído com Vue.js 3, Vite e Tailwind CSS.

## Tech Stack
- **Vue.js 3** (Composition API)
- **Vite** (build tool)
- **Tailwind CSS v3**
- **Vue Router 4** (hash mode para GitHub Pages)

## Como Rodar Localmente

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Pré-visualizar build
npm run preview
```

## Publicar no GitHub Pages

1. Faça o build: `npm run build`
2. Envie a pasta `dist/` para a branch `gh-pages`:
   ```bash
   # Usando gh-pages (instale globalmente: npm i -g gh-pages)
   npx gh-pages -d dist
   ```
3. No repositório GitHub: Settings → Pages → Source: branch `gh-pages`

## Estrutura do Projeto

```
amazon projeto/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.js
    ├── App.vue
    ├── router/
    │   └── index.js
    ├── assets/css/
    │   └── main.css
    ├── components/
    │   ├── AppHeader.vue
    │   ├── AppFooter.vue
    │   ├── SidebarDrawer.vue
    │   ├── HeroBanner.vue
    │   ├── ProductCard.vue
    │   ├── ProductCarousel.vue
    │   ├── CategoryCarousel.vue
    │   └── StarRating.vue
    └── views/
        ├── HomeView.vue
        ├── LoginView.vue
        └── ProductView.vue
```

## Aviso Legal

Este é um projeto **estritamente acadêmico**. Não é afiliado, endossado ou patrocinado pela Amazon.com, Inc.

© 2026 - Projeto Acadêmico

