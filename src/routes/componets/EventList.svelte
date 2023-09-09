<script lang="ts">
  import { EventListQuery } from "../../graphql/generated";

  $: data = EventListQuery({});
</script>

<div class="flex flex-col gap-5">
  {#if $data.loading}
    <li>Loading...</li>
  {/if}
  {#each $data.data.events || [] as event}
    <div class="bg-white p-3 shadow rounded-xl">
      <a href="events/{event.id}">
        <div class="text-center">
          <h1>{event.Title}</h1>
          <p class="mt-2">{event.Description}</p>
          <p>{new Date(event.start).toDateString()}</p>
          <p>{new Date(event.end).toDateString()}</p>
        </div>
      </a>
    </div>
  {/each}
</div>
