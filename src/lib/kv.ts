'use server';
// Utility for accessing Cloudflare KV in a Next.js app on Cloudflare Workers
import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function getKVValue(key: string): Promise<string | null> {
  const { env } = await getCloudflareContext({ async: true });
  if (typeof env.kv_store === 'undefined') {
    throw new Error('KV store is not available in this environment.');
  }
  return await env.kv_store.get(key);
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