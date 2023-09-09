<script lang="ts">
  import type { SingleEventQueryQuery } from "../../graphql/generated";

  export let event: NonNullable<SingleEventQueryQuery["event"]>;
  export let img: string | null | undefined;
  export let ai_desc: string | null | undefined;

  function isSameDate_Naive(date1: Date, date2: Date) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  function hasSameStartAndEndDate(event) {
    return isSameDate_Naive(new Date(event.start), new Date(event.end));
  }

  function toDateStringOrDateTimeString(date: Date, event) {
    let myDate = new Date(date);
    if (hasSameStartAndEndDate(event)) {
      return myDate.toLocaleTimeString();
    } else {
      return myDate.toLocaleDateString() + " " + myDate.toLocaleTimeString();
    }
  }
</script>

<div id="page-wrapper">
  <div id="cover-photo-bar">
    <img
      id="cover-photo"
      src={img}
      alt="Cover photo displaying: {event.ai_image_style_tags.join(', ')}"
    />
  </div>
  <div id="event-info-container">
    <div>
      <h1 class="event-title">{event.Title}</h1>
    </div>

    <hr id="divider" />

    <div id="date-and-time-info">
      {#if hasSameStartAndEndDate(event)}
        <div id="date">{new Date(event.start).toLocaleDateString()}</div>
      {/if}

      <div id="start-and-end">
        <div>
          <p>{toDateStringOrDateTimeString(event.start, event)}</p>
        </div>
        <div>
          <p>{toDateStringOrDateTimeString(event.end, event)}</p>
        </div>
      </div>
    </div>

    <div id="description">
      <p>{ai_desc}</p>
    </div>

    <div id="keywords">
      <p>{event.keywords}</p>
    </div>
  </div>
</div>

<style>
  #page-wrapper {
    display: flex;
    flex-direction: column;
    /* height: 100vh; */
    flex-grow: 1;
    width: 100%;
    margin-bottom: 15px;
  }

  #cover-photo-bar {
    flex: 1;
    max-height: 400px;
    min-height: 200px;
    overflow: hidden;
  }

  #cover-photo {
    height: 400px;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  #event-info-container {
    margin-top: 15px;
    margin-left: 15%;
    margin-right: 15%;
    padding: 10px;
    flex: 4;
    display: flex;
    flex-direction: column;

    border-radius: 5px;
    border: 3px solid lightgray;
  }

  .event-title {
    font-size: 3.5rem;
    font-weight: bold;
  }

  #divider {
    border-color: rgba(228, 227, 227, 0.23);
    width: 100%;
  }

  #date {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }

  #start-and-end {
    display: flex;
    flex-direction: row;
  }

  #start-and-end > div {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  #description {
    flex: 1;
    font-size: 1.2rem;
  }

  #keywords {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100px;
    font-size: 0.7rem;
    color: darkgray;
  }
</style>
