<script lang="ts">
  import { EventListQuery } from "../../graphql/generated";

  $: data = EventListQuery({});
</script>

<div class="flex flex-col gap-12">
  {#if $data.loading}
    <li>Loading...</li>
  {/if}
  {#each $data.data.events || [] as event}
    <div class="flex flex-col rounded-2xl">
      <div
        class="relative max-h-[200px] overflow-hidden rounded-2xl border border-slate-300 shadow-lg"
      >
        <img
          src={event.ai_title}
          alt="event header"
          class="object-cover w-full h-full z-0"
        />
        <a
          href={"events/" + event.id}
          class="shadow absolute w-[40%] h-[66%] bg-white/60 text-slate-900 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center backdrop-blur border border-slate-300 z-10 rounded-lg"
        >
          <div class="text-center">
            <h1 class="text-xl font-bold">{event.Title}</h1>
            <p class="mt-2 text-sm">{event.Description}</p>
            <p class="text-xs">{new Date(event.start).toDateString()}</p>
            <p class="text-xs">{new Date(event.end).toDateString()}</p>
          </div>
        </a>
      </div>
    </div>
  {/each}
</div>
