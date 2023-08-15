import type { PageLoad } from './$types'

export const load: PageLoad = () => ({
  defaultSettings: [
    {
      key: 'random-size',
      name: 'Random address generator size (1-4)',
      value: 1,
      min: 1,
      max: 4,
    },
    {
      key: 'deletion-delay',
      name: 'Deletion delay (days)',
      value: 7,
      min: 0,
      max: 60,
    },
  ] as App.Settings,
})
