<script lang="ts">
  import { EventListQuery } from "../../graphql/generated";

  $: data = EventListQuery({});
</script>

{#if $data.loading}
  <li>Loading...</li>
{/if}

{#each $data.data.events || [] as event}
  <a>
    <div>
      <p>{event.id}</p>
      <p>{event.Description}</p>
      <p>{event.end}</p>
      <p>{event.keywords}</p>
    </div>
  </a>
{/each}
