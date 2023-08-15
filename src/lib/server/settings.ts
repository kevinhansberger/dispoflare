export async function getSetting(
  key: string,
  env: App.Platform['env'],
): Promise<string | null> {
  return env?.KV_SETTINGS?.get(key) || null
}

export async function putSetting(
  key: string,
  value: string,
  env: App.Platform['env'],
): Promise<void> {
  return env?.KV_SETTINGS.put(key, value)
}
