<script lang="ts">
  import IntlDate from './IntlDate.svelte'

  export let name: string
  export let date: Date | string | undefined
</script>

{#if date}
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <strong>
      <IntlDate date={new Date(date)} timeZone={undefined} />
    </strong>
    <small style:textTransform="uppercase">
      {name}d
    </small>
  </div>
{/if}
