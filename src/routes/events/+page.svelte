<script>
  import EventList from "../componets/EventList.svelte";
</script>

<div class="flex flex-col gap-10">
  <div
    class="flex flex-col text-center m-auto p-4 rounded-2xl gap-3 w-full max-w-xs bg-white shadow-md"
  >
    <p>Would you like to create a new event?</p>
    <a
      type="button"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      data-confirm="Are you sure?"
      href="/events/create">Yes !</a
    >
  </div>
  <EventList />
</div>

<style>
  :root {
    --primary-light: #a6f9d6;
    --primary: #5be2a9;
    --primary-dark: #53ce9a;
    --secondary: #1e2145;
    --white: #fff;
    --grey: #e6e6ff;
    --grey-dark: #6d7098;
    --red: #ff6b6b;
  }

  input,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    max-width: 400px;
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    border: 1px solid var(--grey);
    border-radius: 4px;
    transition: all 150ms ease;
    background: var(--white);
  }

  select {
    height: 45px;
  }

  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgb(227, 227, 245);
    border-color: var(--grey);
  }

  input:disabled,
  select:disabled,
  textarea:disabled {
    color: #ccc;
  }

  button {
    color: #fff;
    background-color: var(--primary);
    border: none;
    text-transform: uppercase;
    letter-spacing: 1.8px;
    outline: none;
    border-radius: 4px;
    display: block;
    margin-top: 12px;
    line-height: 1.8;
    font-size: 12px;
    padding: 10px 18px;
    min-width: 120px;
    transition: all 150ms ease;
    cursor: pointer;
  }

  button:disabled {
    background-color: var(--grey);
  }

  button:focus:not(:disabled) {
    box-shadow: 0 0 0 4px var(--primary-light);
  }

  button:hover:not(:disabled) {
    background-color: var(--primary-dark);
  }

  label {
    display: block;
    color: var(--grey-dark);
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 4px;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1.9px;
    line-height: 2;
  }

  /* used for errors */
  small {
    display: block;
    font-size: 12px;
    color: var(--red);
    margin-top: 10px;
  }
</style>
