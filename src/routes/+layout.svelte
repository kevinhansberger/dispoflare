<script>
  import Nav from '$lib/components/Nav.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<Nav />
<main class="container" role="document">
  <slot />
</main>
<Footer />
