<div align="center">

<a href="https://www.plantree.xyz" alt="Plantree Logo">
    <img src="https://www.plantree.xyz/images/logo-512.png" height="120"/></a>

<h1 style="border-bottom: none">
    <b>Plantree</b><br />
    The best time to plant a tree was twenty years ago. the second best time is now.
    <br>
</h1>

[Discord](https://discord.gg/nyVpH9njDu) | [Website](https://www.plantree.xyz/) | [Issues](https://github.com/plantreexyz/plantree/issues)

</div>

## Introduction

The best time to plant a tree was twenty years ago. the second best time is now.

## Features

- **Local-First** - You own your data, in spite of the cloud
- **Privacy-First** - Use End-To-End Encryption to sync data
- **Open Source** - Trust our code, not our words

## Primary tech stack

- Tauri
- Next.js
- TypeScript
- tRPC
- Prisma
- NextAuth.js
- Slate.js
- IndexedDB

## Development

After clone the repo, in the root dir:

```bash
# Install the dependencies
pnpm install

pnpm run build:packages

cd apps/desktop

pnpm dev
```

Go to: http://localhost:3000

## Mac OS installation issue

If hit [“Plantree.app” is damaged and can’t be opened. You should move it to the Trash.]

To fix it:

```bash
xattr -cr /Applications/Plantree.app
```

## ⚖️ License
