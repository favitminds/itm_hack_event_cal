<script lang="ts">
  import { page } from "$app/stores";
  import {
    GenerateAiAssets,
    SingleEventQuery,
  } from "../../../graphql/generated";
  import EventDetails from "../../componets/EventDetails.svelte";
  let id = $page.params.id;

  let data = SingleEventQuery({
    variables: {
      id: Number(id),
    },
  });
  let ai_assets = GenerateAiAssets({
    variables: {
      id: Number(id),
      force_update: false,
    },
  });

  let rerun_query = () => {
    GenerateAiAssets({
      variables: {
        id: Number(id),
        force_update: true,
      },
    }).subscribe(console.log);
  };
</script>

{#if $data.loading}
  <li>Loading...</li>
{:else if $data.error}
  <li>ERROR: {$data.error.message}</li>
{:else if $data.data.event && $ai_assets.data}
  <EventDetails
    event={$data.data.event}
    img={$ai_assets.data.eventCreateImage}
    ai_desc={$ai_assets.data.eventCreateDescription}
    force_update={rerun_query}
  />
{/if}
