# Next.js + Cloudflare Workers + KV Example

This project is a Next.js app designed to run on Cloudflare Workers, using Cloudflare KV for dynamic content storage. It uses Tailwind CSS and shadcn/ui for beautiful UI components.

## Features
- **Homepage** (`/`): Displays `about_us` and `title` from Cloudflare KV.
- **Contact Page** (`/contact`): Displays `contact` information from Cloudflare KV.
- **Cloudflare KV**: Used for dynamic content storage.
- **shadcn/ui + Tailwind CSS**: For modern, beautiful UI.

---

## 🚀 Deployment (Cloudflare Dashboard)

You can deploy this app by linking your repository directly from the Cloudflare dashboard. No need to manually fill in secrets or IDs in `wrangler.toml`.

### 1. Push Your Code
Push your code to GitHub, GitLab, or Bitbucket.

### 2. Link Your Repo in Cloudflare
- Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
- Navigate to **Pages** (for static/Jamstack) or **Workers** (for serverless/edge).
- Click **Create Project** and connect your Git provider.
- Select your repository.

### 3. Configure Build Settings
- **Framework preset**: Next.js
- **Build command**: `npm run build`
- **Output directory**: `.next`

### 4. Add KV Namespace Binding
- In the Cloudflare dashboard, go to your project **Settings** > **Functions** (or **Environment Variables**).
- Add a KV namespace binding:
  - **Binding name**: `kv_store` (must match your code and `wrangler.toml`)
  - **Select or create a KV namespace**

### 5. Deploy
- Cloudflare will build and deploy your app automatically on every push.

### 6. Populate KV Store
- Use the Cloudflare dashboard or Wrangler CLI to add the following keys to your KV namespace:
  - `about_us`
  - `title`
  - `contact`

---

## 🚀 Cloudflare Pages + Next.js Adapter

This project uses the official [@cloudflare/next-on-pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/) adapter for Next.js on Cloudflare Pages.

### Build & Output Settings
- **Build command:** `npm run build-cloudflare` (runs `npx next-on-pages build`)
- **Output directory:** `.vercel/output/static`

### Steps
1. Install dependencies:
   ```sh
   npm install
   ```
2. Build for Cloudflare Pages:
   ```sh
   npm run build
   ```
3. Deploy via the Cloudflare Pages dashboard (link your repo, set build command/output as above).

---

## Notes
- You do **not** need to fill in `account_id`, `id`, or `preview_id` in `wrangler.toml` when deploying via the dashboard.
- Do **not** commit secrets or API tokens to your repo.
- For manual deployments with Wrangler CLI, you will need to fill in the IDs in `wrangler.toml`.

---

## Useful Links
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Cloudflare KV Docs](https://developers.cloudflare.com/kv/)
- [shadcn/ui Docs](https://ui.shadcn.com/)
- [Next.js Docs](https://nextjs.org/docs)
