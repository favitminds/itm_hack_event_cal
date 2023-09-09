<script lang="ts">
  import { gql } from "@apollo/client/core";
  import { mutation } from "svelte-apollo";
  import { createForm } from "svelte-forms-lib";
  import type { MutationCreateEventArgs } from "../../../graphql/generated";

  const create_event = gql`
    mutation Mutation($arg: createEventArgs!) {
      createEvent(arg: $arg) {
        id
        Description
        end
        start
        Title
        keywords
        ai_image_style_tags
      }
    }
  `;

  const the_function = mutation<any, MutationCreateEventArgs>(create_event);

  const { form, handleChange, handleSubmit } = createForm<
    MutationCreateEventArgs["arg"]
  >({
    initialValues: {
      description: "",
      end: new Date().toString(),
      start: new Date().toString(),
      title: "",
      keywords: ["default"],
      ai_image_keywords: ["default"],
      office: "aarhus",
    },
    onSubmit: (values) => {
      console.log(values);
      the_function({
        variables: {
          arg: values,
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
