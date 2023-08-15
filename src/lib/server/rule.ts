import * as rules from '../../../sdk/rules'

export async function getRules(
  zones: Zone[] | Promise<Zone[]>,
  env: App.Platform['env'],
): Promise<Array<Rule>> {
  return rules.list(await zones, env)
}

export async function createRule(
  {
    rule,
    zone,
    address,
    expire,
    remove,
  }: {
    rule: string
    zone: Zone
    address: string
    expire: string
    remove: Date | boolean
  },
  env: App.Platform['env'],
): Promise<void> {
  if (remove === true) {
    remove = new Date(expire)
    remove.setMonth(remove.getMonth() + 1)
  }
  await rules.post(
    {
      actions: [
        {
          type: 'forward',
          value: [address],
        },
      ],
      enabled: true,
      matchers: [
        {
          field: 'to',
          type: 'literal',
          value: `${rule}@${zone.name}`,
        },
      ],
      name: JSON.stringify({
        dispoflare: true,
        activate: new Date(),
        expire,
        remove,
      }),
    },
    zone,
    env,
  )
}

export async function dropRule(
  rule: Rule,
  env: App.Platform['env'],
): Promise<void> {
  await rules.remove(rule, env)
}

export async function updateRule(
  rule: Rule,
  env: App.Platform['env'],
): Promise<Rule> {
  return rules.put(rule, env)
}
