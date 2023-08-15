// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import '../sdk/api'

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    interface Platform {
      env: {
        // Bindings to KV.
        // https://developers.cloudflare.com/workers/runtime-apis/kv/
        KV_SETTINGS: KVNamespace

        // Bindings to Durable Object.
        // https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
        // MY_DURABLE_OBJECT: DurableObjectNamespace

        // Bindings to R2.
        // https://developers.cloudflare.com/workers/runtime-apis/r2/
        // MY_BUCKET: R2Bucket

        // Bindings to Variables.
        // https://developers.cloudflare.com/workers/platform/environment-variables/
        CLOUDFLARE_API_TOKEN: string
        CLOUDFLARE_ACCOUNT_ID: string
        SENTRY_DSN: string
      }
      context: {
        waitUntil(promise: Promise<any>): void
      }
      caches: CacheStorage & { default: Cache }
    }

    type Settings = Setting[]

    type Setting = {
      key: string
      name: string
      value: number | string
      min?: number
      max?: number
      step?: number
      metadata?: Metadata
    }

    type Metadata = {
      [key: string]: string
    }
  }
}

export {}
