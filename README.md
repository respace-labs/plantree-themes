# Plantree

> The best way to build a web3 blog!

## Prepare

```bash
pnpm install
```

## Start blog

```bash
cd apps/plantree-blog-starter
```

## Develop a theme

1. copy `themes/plantree-theme-simple`, eg: `themes/plantree-theme-my-theme`

2. update `.env` in `plantree-blog-starter`

```bash
NEXT_PUBLIC_THEME=plantree-theme-my-theme
```

2. update `next.config.js` in `plantree-blog-starter`

```bash
transpilePackages: ['plantree-theme-my-theme'],
```

## theme examples

- https://github.com/trevortylerlee/astro-micro
- https://microblog-theta.vercel.app/
- https://sparkly-speculoos-0c9197.netlify.app/
- https://www.wujieli.com/
- https://enscribe.dev/
- https://dante-astro-theme.netlify.app/
- https://astro-milky-way.netlify.app/posts/
- https://astro-theme-vitesse.netlify.app/blog/
- https://astro-erudite.vercel.app/
- https://astroletter-preview.pages.dev/
- https://kai.bi/

## references

plantree-blog-starter fork from:

- https://github.com/timlrx/tailwind-nextjs-starter-blog
