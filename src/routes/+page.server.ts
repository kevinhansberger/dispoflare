import type { PageServerLoad, Actions } from './$types'

import { redirect } from '@sveltejs/kit'

import { getAddresses } from '$lib/server/address'
import { getRoutingZones } from '$lib/server/routing'
import { getSetting } from '$lib/server/settings'
import { getZones } from '$lib/server/zone'

export const load: PageServerLoad = async ({ platform }) => ({
  streamed: {
    routingZones: getRoutingZones(getZones(platform?.env), platform?.env),
    addresses: getAddresses(platform?.env),
    randomSize: getSetting('random-size', platform?.env),
  },
})

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData()

    const rule = formData.get('rule')
    const zone = JSON.parse(formData.get('zone'))
    const address = formData.get('address')
    const expire = formData.get('expire')
    const remove = !!formData.get('remove')

    await createRule({ rule, zone, address, expire, remove })

    throw redirect(303, '/manage')
  },
} satisfies Actions
