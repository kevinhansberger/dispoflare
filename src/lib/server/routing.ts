import * as routing from '$sdk/routing'

export async function getRoutingZones(
  zones: Zone[] | Promise<Zone[]>,
  env: App.Platform['env'],
): Promise<Array<Zone>> {
  const allZones = await zones
  const routingZones: Array<PromiseSettledResult<Routing>> =
    await Promise.allSettled(
      allZones.map((zone: Zone) => routing.get(zone, env)),
    )
  return routingZones
    .filter((zone) => zone.status === 'fulfilled' && zone.value.enabled)
    .map((rZone) => allZones.find((aZone) => aZone.name === rZone.value.name))
}
