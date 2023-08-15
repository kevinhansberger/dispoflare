<script lang="ts">
  import type { PageData } from './$types'
  import Setting from './Setting.svelte'

  export let data: PageData
</script>

<article style:margin="0">
  <header>
    <strong>Settings</strong>
  </header>
  {#each data.defaultSettings as setting (setting.key)}
    <Setting {setting} valuePromise={data[setting.key]} />
  {/each}

  <footer>⚠️ Page work in progress. Setting may not be saved.</footer>
</article>
