<script lang="ts">
  import Milestone from './Milestone.svelte'

  export let rule: Rule
</script>

<details>
  <summary
    style={{
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    }}
  >
    <header
      style={{
        display: 'flex',
        flexGrow: '1',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {rule.matchers[0].value}
      <code>
        {#if rule.enabled}
          {#if rule.actions[0].type === 'worker'}
            ⏲️ Deprecated
          {:else}
            📨 Active
          {/if}
        {:else}
          🗃️ Expired
        {/if}
      </code>
    </header>
  </summary>

  <article class="grid">
    <Milestone name="📨 Activate" date={rule.data?.activate} />
    <Milestone name="🗃️ Expire" date={rule.data?.expire} />
    <Milestone name="⏲️ Deprecate" date={rule.data?.deprecate} />
    <Milestone name="🗑️ Remove" date={rule.data?.remove} />
  </article>
</details>
