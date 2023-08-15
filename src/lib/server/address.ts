import * as addresses from '$sdk/addresses'

export async function getAddresses(
  env: App.Platform['env'],
): Promise<Array<Address>> {
  return addresses.list(env)
}
