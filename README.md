# Next.js + Cloudflare Workers + KV Example

This project is a Next.js app designed to run on Cloudflare Workers, using Cloudflare KV for dynamic content storage. It uses Tailwind CSS and shadcn/ui for beautiful UI components.

## Features
- **Homepage** (`/`): Displays `about_us` and `title` from Cloudflare KV.
- **Contact Page** (`/contact`): Displays `contact` information from Cloudflare KV.
- **Cloudflare KV**: Used for dynamic content storage.
- **shadcn/ui + Tailwind CSS**: For modern, beautiful UI.

---

## 🚀 Deployment (Cloudflare Workers)

### 1. Configure wrangler.toml
- Set your `account_id`, `kv_namespaces.id`, and `kv_namespaces.preview_id` in `wrangler.toml` (find these in the Cloudflare dashboard).
- Set the `compatibility_date` to the current date (e.g., `2024-06-30`).
- If you see Node.js compatibility warnings, add `compatibility_flags = ["nodejs_compat"]` to your `wrangler.toml`.

### 2. Build and Deploy
```sh
npm install
npm run build
npx wrangler publish
```

### 3. Local Development
```sh
npm run dev
```

---

## Notes
- Do **not** commit secrets or API tokens to your repo.
- For each deployment, ensure your `wrangler.toml` is configured for the correct Cloudflare account and KV namespace.

---

## Useful Links
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Cloudflare KV Docs](https://developers.cloudflare.com/kv/)
- [shadcn/ui Docs](https://ui.shadcn.com/)
- [Next.js Docs](https://nextjs.org/docs)
