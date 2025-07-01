interface KVNamespace {
    get(key: string): Promise<string | null>;
}

declare global {
    interface CloudflareEnv {
        kv_store: KVNamespace;
    }
}

export {}