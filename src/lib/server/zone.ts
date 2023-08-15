import * as zones from '../../../sdk/zones'

export async function getZones(env: App.Platform['env']): Promise<Array<Zone>> {
  return zones.list(env)
}
