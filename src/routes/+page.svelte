<script lang="ts">
  import type { PageData } from './$types'
  import { writable } from 'svelte/store'

  export let data: PageData

  const localPart = writable('')
  const today = new Date().toISOString().split('T')[0]
</script>

<form method="post">
  <article style:margin="0">
    <div class="grid">
      <label for="rule">
        Address ·
        <span
          on:click={() => ($localPart = crypto.randomUUID())}
          on:keypress={() => ($localPart = crypto.randomUUID())}
          data-tooltip="Generate a random address"
          role="button"
          tabindex="-10"
        >
          🔀
        </span>
        <input
          type="text"
          name="rule"
          placeholder="rule-local-part"
          aria-label="Address local-part"
          pattern="[a-zA-Z0-9.!#$%&’*+/=?^_`~-]+"
          style:textAlign="right"
          value={$localPart}
          required
        />
      </label>
      <label for="zone">
        @
        {#await data.streamed.routingZones}
          <select
            id="zone"
            name="zone"
            aria-label="Address domain"
            aria-busy="true"
            disabled
            required
          >
            <option value="">Loading zones…</option>
          </select>
        {:then routingZones}
          {#if routingZones.length}
            <select id="zone" name="zone" aria-label="Address domain" required>
              {#each routingZones as zone (zone.id)}
                <option value={JSON.stringify(zone)}>
                  {zone.name}
                </option>
              {/each}
            </select>
          {:else}
            <select
              id="zone"
              name="zone"
              aria-label="Address domain"
              aria-invalid="true"
              required
            >
              <option value="">
                Unable to find a domain for email routing
              </option>
            </select>
          {/if}
        {:catch error}
          <select
            id="zone"
            name="zone"
            aria-label="Address domain"
            aria-invalid="true"
            required
          >
            <option value="">Error loading zones ({error})</option>
          </select>
        {/await}
      </label>
    </div>
    <label for="address">
      Forward to ·
      <a
        href="https://dash.cloudflare.com/?zone=email/routing/routes"
        data-tooltip="Add an routing address"
      >
        ➕
      </a>
      {#await data.streamed.addresses}
        <select id="address" name="address" aria-busy="true" disabled required>
          <option value="">Loading routing addresses…</option>
        </select>
      {:then addresses}
        <select id="address" name="address" required>
          {#each addresses as address (address.tag)}
            <option value={address.email}>
              {address.email}
            </option>
          {/each}
        </select>
      {:catch error}
        <select id="address" name="address" aria-invalid="true" required>
          <option value="">
            Error loading routing addresses ({error})
          </option>
        </select>
      {/await}
    </label>
    <label for="expire">
      Expiration
      <input type="date" id="expire" name="expire" min={today} required />
    </label>
    <label for="remove">
      <input type="checkbox" id="remove" name="remove" role="switch" />
      Delete 1 month after expiration
    </label>
    <footer>
      <!-- <button type="submit" aria-busy={isCreating} disabled={isCreating}>
        {isCreating ? 'Creating...' : 'Create a disposable address'}
      </button> -->
    </footer>
  </article>
</form>
