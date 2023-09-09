import { gql } from "@apollo/client/core";
import type { Event } from "../../../graphql/generated";
import { query } from "svelte-apollo";

const _createEvent = (event: Event) => {
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
};

export { _createEvent };
