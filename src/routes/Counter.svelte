<script lang="ts">
  import { gql } from "@apollo/client/core";
  import { query } from "svelte-apollo";
  import { spring } from "svelte/motion";

  const testQ = gql`
    query ExampleQuery {
      events {
        id
        Description
        end
        start
        Title
      }
    }
  `;
  const events = query(testQ);
  console.log(events);
</script>

{#if $events.loading}
  <li>Loading...</li>
{:else if $events.error}
  <li>ERROR: {$events.error.message}</li>
{:else}
  data here
  {$events.data}
{/if}
