import { gql } from "@apollo/client";
import {  } from "../../../graphql/generated";

const createEvent = (event: Event) => {
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

const getEventsQuery = () => {
    const getEventQuery = 
};

export { createEvent, getEventsQuery };
