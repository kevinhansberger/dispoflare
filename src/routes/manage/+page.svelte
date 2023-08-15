<script lang="ts">
  import type { PageData } from './$types'

  import Rule from './Rule.svelte'

  export let data: PageData
</script>

<article style:margin="0">
  <header>
    <strong>Manage</strong>
  </header>
  {#await data.streamed.rules}
    <div aria-busy="true" />
  {:then rules}
    <div>
      {#each rules as rule (rule.tag)}
        <Rule {rule} />
      {/each}
    </div>
  {:catch error}
    <article
      style={{
        '--border-color': 'var(--form-element-invalid-border-color)',
        border: 'var(--border-width) solid var(--border-color)',
        backgroundImage: 'var(--icon-invalid)',
        backgroundPosition: 'top 0.75rem center',
        backgroundSize: '1rem auto',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
      }}
    >
      <p>
        Unable to load the rules
        <br />
        <small>Try reloading the page.</small>
      </p>
    </article>
  {/await}
</article>
