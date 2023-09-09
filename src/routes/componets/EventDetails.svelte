<script lang="ts">
  import type { SingleEventQueryQuery } from "../../graphql/generated";

  export let event: NonNullable<SingleEventQueryQuery["event"]>;
  export let img: string | null | undefined;
  export let ai_desc: string | null | undefined;
</script>

<div>
  <p>{event.id}</p>
  <p>{event.Description}</p>
  <p>{event.keywords}</p>
</div>

<img src={img} alt="donger" />
<div>
  {ai_desc}
</div>

<style>
</style>
