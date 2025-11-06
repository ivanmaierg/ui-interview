## UI Interview – React + TypeScript + Vite

Minimal React + TypeScript app bootstrapped with Vite. This project is configured to use pnpm and Node via `.nvmrc`.

### Requirements
- Node 22.12+ (recommended: use `nvm` with the provided `.nvmrc`)
- pnpm 9.x (via Corepack)

### Setup
```bash
cd /Users/ivanmaierg/Desktop/ui-interview
nvm install
nvm use
corepack enable
corepack prepare pnpm@9.12.0 --activate
pnpm install
```

### Scripts
- `pnpm dev`: start Vite dev server
- `pnpm build`: type-check and build for production
- `pnpm preview`: preview the production build
- `pnpm lint`: run ESLint

### Troubleshooting
- Vite requires recent Node:
  - Error: “Vite requires Node.js version 20.19+ or 22.12+ / crypto.hash is not a function”
  - Fix: ensure `node -v` is ≥ 22.12.0. Run `nvm install && nvm use`.
- pnpm not found:
  - Run `corepack enable` then `corepack prepare pnpm@9.12.0 --activate`.

### Notes
- References to online sandboxes (e.g., StackBlitz) were removed in favor of local development using pnpm.


## Goal
Implement a search page for Star Wars characters using the Star Wars API.  
How do you display the data associated with each character?

👉 [https://swapi.py4e.com/](https://swapi.py4e.com/)

---

### User
- Star Wars fan who wants to search for their favorite characters from the Star Wars universe  
- Would primarily access the app from a mobile device  
- Wants to mark (favorite) characters  

---

### Features
- Pagination  
- Search  

API example:  
[https://swapi.dev/api/people/1/](https://swapi.dev/api/people/1/)

---

### Favorite Feature
Display:
- Name  
- `"gender": "male"`
