<script lang="ts">
  export let timeZone: string | undefined
  export let date: Date

  const isoString = date.toISOString()
  const formattedDate = new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone,
  }).format(date)
</script>

<time dateTime={isoString}>{formattedDate}</time>
