# Pattern Picture Perfect — deploy‑ready

This project is ready to run locally and deploy on Vercel.

## Run locally
```bash
yarn install
yarn dev
# open http://localhost:8080
```

## What works
- Home page with design sections (Header, Hero, Features)
- “Start Creating” button → `/create`
- `/create` form: measurements, material, reference image, full‑body photo preview
- API stubs:
  - `POST /api/generate-pattern` → returns a fake `patternId`
  - `POST /api/render-preview` → returns a placeholder URL
  - `GET  /api/download-pattern` → returns a tiny demo PDF

## Deploy on Vercel
1. Push this folder to a new GitHub repository (or upload as a repo).
2. Go to https://vercel.com/new → **Import** your repo.
3. Framework preset: **Vite**. Build command: `yarn build`. Output: `dist`.
4. Click **Deploy**.

Serverless functions live in `/api`. No extra config needed (`vercel.json` is included).

## Next steps (optional)
- Replace API stubs with real pattern engine and image overlay.
- Add PDF generator with instructions.
- Connect cloud storage for file uploads.
