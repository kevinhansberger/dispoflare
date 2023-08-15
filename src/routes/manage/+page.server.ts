import type { PageServerLoad } from './$types'

import { getRules } from '$lib/server/rule'
import { getZones } from '$lib/server/zone'

export const load: PageServerLoad = ({ platform }) => ({
  streamed: {
    rules: getRules(getZones(platform.env), platform.env),
  },
})
