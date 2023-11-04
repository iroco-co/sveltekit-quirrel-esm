<script lang="ts">
  import type { CbEvent } from "$lib/journal";

  export let events: CbEvent[];
</script>

<div class="journal">
  {#if events && events.length > 0}
    <h3>Journal:</h3>
    {#each events as event}
      <div class="journal__event">
        {event.ts}: {event.msg}
      </div>
    {/each}
  {:else}
    <h3>No events in journal</h3>
  {/if}
</div>

<style>
    .journal {
        display: flex;
        flex-direction: column;
    }
</style>
