<script>
  import { page } from '$app/stores'
</script>

<nav class="container">
  <ul>
    <li>
      <strong>
        Dispo<em>flare</em>
      </strong>
    </li>
  </ul>
  <ul style:gap="1em">
    <li>
      <a
        href="/"
        aria-label="Create"
        data-tooltip="Create"
        data-placement="bottom"
        aria-current={$page.url.pathname === '/'}
      >
        ➕
      </a>
    </li>
    <li>
      <a
        href="/manage"
        aria-label="Manage"
        data-tooltip="Manage"
        data-placement="bottom"
        aria-current={$page.url.pathname === '/manage'}
      >
        📅
      </a>
    </li>
    <li>
      <a
        href="/settings"
        aria-label="Settings"
        data-tooltip="Settings"
        data-placement="bottom"
        aria-current={$page.url.pathname === '/settings'}
      >
        ⚙️
      </a>
    </li>
  </ul>
</nav>

<style>
  [aria-current='true'] {
    --background-color: var(--primary-focus);
  }
</style>
