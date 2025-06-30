// Utility for accessing Cloudflare KV in a Next.js app on Cloudflare Workers

declare global {
  // Cloudflare Workers inject the KV namespace as a global variable
  // eslint-disable-next-line no-var
  var kv_store: { get: (key: string) => Promise<string | null> };
}

export async function getKVValue(key: string): Promise<string | null> {
  if (typeof globalThis.kv_store === 'undefined') {
    throw new Error('KV store is not available in this environment.');
  }
  return await globalThis.kv_store.get(key);
}

export async function getAboutUs(): Promise<string | null> {
  return getKVValue('about_us');
}

export async function getTitle(): Promise<string | null> {
  return getKVValue('title');
}

export async function getContact(): Promise<string | null> {
  return getKVValue('contact');
} 