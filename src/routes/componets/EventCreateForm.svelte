<script lang="ts">
  import { createForm } from "svelte-forms-lib";
  import { EventCreateMutation } from "../../graphql/generated";

  const the_function = EventCreateMutation;

  const { form, handleChange, handleSubmit } = createForm({
    initialValues: {
      description: "",
      end: new Date().toString(),
      start: new Date().toString(),
      title: "",
      keywords: "",
      ai_image_keywords: "",
      office: "aarhus",
    },
    onSubmit: (values) => {
      console.log(values);
      const { keywords, ai_image_keywords, ...rest } = values;
      the_function({
        variables: {
          arg: {
            ...rest,
            keywords: keywords.split(","),
            ai_image_keywords: ai_image_keywords.split(","),
          },
        },
      });
    },
  });
</script>

<form on:submit={handleSubmit}>
  <label for="title">Title</label>
  <input
    id="title"
    name="title"
    on:change={handleChange}
    bind:value={$form.title}
  />

  <label for="description">Description</label>
  <textarea
    id="description"
    name="description"
    on:change={handleChange}
    bind:value={$form.description}
  />

  <label for="keywords">Keywords</label>
  <input
    id="keywords"
    name="keywords"
    on:change={handleChange}
    placeholder="tikibar,party,friendship"
    bind:value={$form.keywords}
  />
  <label for="ai_image_keywords">AI Image Keywords</label>
  <input
    id="ai_image_keywords"
    name="ai_image_keywords"
    on:change={handleChange}
    placeholder="fantasy,space,scifi"
    bind:value={$form.ai_image_keywords}
  />

  <label for="start">Start date</label>
  <input
    type="datetime-local"
    id="start"
    name="start"
    on:change={handleChange}
    bind:value={$form.start}
  />

  <label for="end">End date</label>
  <input
    type="datetime-local"
    id="end"
    name="end"
    on:change={handleChange}
    bind:value={$form.end}
  />

  <button type="submit">Submit</button>
</form>

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
