import client from "../apolloClient";
import type {
  ApolloQueryResult,
  ObservableQuery,
  WatchQueryOptions,
  MutationOptions,
} from "@apollo/client";
import { readable } from "svelte/store";
import type { Readable } from "svelte/store";
import gql from "graphql-tag";
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

/** Holds all relevant information about an event */
export type Event = {
  __typename?: "Event";
  /** The description of the event */
  Description: Scalars["String"]["output"];
  /** The title of the event */
  Title: Scalars["String"]["output"];
  /** AI image generation tags */
  ai_image_style_tags: Array<Scalars["String"]["output"]>;
  /** The end date of the event */
  end: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  /** event keywords */
  keywords: Array<Scalars["String"]["output"]>;
  /** The location of the event */
  location?: Maybe<Location>;
  /** The start date of the event */
  start: Scalars["DateTime"]["output"];
  users?: Maybe<Array<Maybe<User>>>;
};

/** Holds all relevant information about a location */
export type Location = {
  __typename?: "Location";
  id: Scalars["Int"]["output"];
  /** The name of the location */
  office: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  EventJoin?: Maybe<Event>;
  EventLeave?: Maybe<Event>;
  LocationCreate?: Maybe<Location>;
  LocationDelete?: Maybe<Location>;
  UserCreate?: Maybe<User>;
  createEvent?: Maybe<Event>;
  deleteEvent?: Maybe<Event>;
  updateEvent?: Maybe<Event>;
};

export type MutationEventJoinArgs = {
  eventId: Scalars["Int"]["input"];
  userId: Scalars["Int"]["input"];
};

export type MutationEventLeaveArgs = {
  eventId: Scalars["Int"]["input"];
  userId: Scalars["Int"]["input"];
};

export type MutationLocationCreateArgs = {
  office: Scalars["String"]["input"];
};

export type MutationLocationDeleteArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationUserCreateArgs = {
  email: Scalars["String"]["input"];
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCreateEventArgs = {
  arg: CreateEventArgs;
};

export type MutationDeleteEventArgs = {
  id: Scalars["Int"]["input"];
};

export type MutationUpdateEventArgs = {
  data: CreateEventArgs;
  id: Scalars["Int"]["input"];
};

export type Query = {
  __typename?: "Query";
  event?: Maybe<Event>;
  eventCreateDescription?: Maybe<Scalars["String"]["output"]>;
  eventCreateImage?: Maybe<Scalars["String"]["output"]>;
  events: Array<Event>;
  location?: Maybe<Location>;
  locations?: Maybe<Array<Maybe<Location>>>;
  user?: Maybe<User>;
  users: Array<User>;
};

export type QueryEventArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryEventCreateDescriptionArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryEventCreateImageArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryLocationArgs = {
  id: Scalars["Int"]["input"];
};

export type QueryUserArgs = {
  id: Scalars["Int"]["input"];
};

/** Holds all relevant information about a user */
export type User = {
  __typename?: "User";
  id: Scalars["Int"]["output"];
};

export type CreateEventArgs = {
  ai_image_keywords: Array<Scalars["String"]["input"]>;
  description: Scalars["String"]["input"];
  end: Scalars["String"]["input"];
  keywords: Array<Scalars["String"]["input"]>;
  location?: InputMaybe<Scalars["Int"]["input"]>;
  office: Scalars["String"]["input"];
  start: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

export type EventCreateMutationMutationVariables = Exact<{
  arg: CreateEventArgs;
}>;

export type EventCreateMutationMutation = {
  __typename?: "Mutation";
  createEvent?: {
    __typename?: "Event";
    id: number;
    Description: string;
    end: any;
    start: any;
    Title: string;
    keywords: Array<string>;
    ai_image_style_tags: Array<string>;
  } | null;
};

export type EventListQueryQueryVariables = Exact<{ [key: string]: never }>;

export type EventListQueryQuery = {
  __typename?: "Query";
  events: Array<{
    __typename: "Event";
    id: number;
    Description: string;
    end: any;
    keywords: Array<string>;
    ai_image_style_tags: Array<string>;
  }>;
};

export type SingleEventQueryQueryVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type SingleEventQueryQuery = {
  __typename?: "Query";
  event?: {
    __typename?: "Event";
    Title: string;
    id: number;
    start: any;
    end: any;
    Description: string;
    keywords: Array<string>;
    ai_image_style_tags: Array<string>;
  } | null;
};

export type GenerateAiAssetsQueryVariables = Exact<{
  id: Scalars["Int"]["input"];
}>;

export type GenerateAiAssetsQuery = {
  __typename?: "Query";
  eventCreateDescription?: string | null;
  eventCreateImage?: string | null;
};

export const EventCreateMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "EventCreateMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "arg" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "createEventArgs" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createEvent" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "arg" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "arg" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "Description" } },
                { kind: "Field", name: { kind: "Name", value: "end" } },
                { kind: "Field", name: { kind: "Name", value: "start" } },
                { kind: "Field", name: { kind: "Name", value: "Title" } },
                { kind: "Field", name: { kind: "Name", value: "keywords" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "ai_image_style_tags" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  EventCreateMutationMutation,
  EventCreateMutationMutationVariables
>;
export const EventListQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "EventListQuery" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "events" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "Description" } },
                { kind: "Field", name: { kind: "Name", value: "end" } },
                { kind: "Field", name: { kind: "Name", value: "keywords" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "ai_image_style_tags" },
                },
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventListQueryQuery, EventListQueryQueryVariables>;
export const SingleEventQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "SingleEventQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "event" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "Title" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "start" } },
                { kind: "Field", name: { kind: "Name", value: "end" } },
                { kind: "Field", name: { kind: "Name", value: "Description" } },
                { kind: "Field", name: { kind: "Name", value: "keywords" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "ai_image_style_tags" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SingleEventQueryQuery,
  SingleEventQueryQueryVariables
>;
export const GenerateAiAssetsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GenerateAiAssets" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "eventCreateDescription" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "eventCreateImage" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GenerateAiAssetsQuery,
  GenerateAiAssetsQueryVariables
>;

export const EventCreateMutationDoc = gql`
  mutation EventCreateMutation($arg: createEventArgs!) {
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
export const EventListQueryDoc = gql`
  query EventListQuery {
    events {
      id
      Description
      end
      keywords
      ai_image_style_tags
      __typename
    }
  }
`;
export const SingleEventQueryDoc = gql`
  query SingleEventQuery($id: Int!) {
    event(id: $id) {
      Title
      id
      start
      end
      Description
      keywords
      ai_image_style_tags
    }
  }
`;
export const GenerateAiAssetsDoc = gql`
  query GenerateAiAssets($id: Int!) {
    eventCreateDescription(id: $id)
    eventCreateImage(id: $id)
  }
`;
export const EventCreateMutation = (
  options: Omit<
    MutationOptions<any, EventCreateMutationMutationVariables>,
    "mutation"
  >
) => {
  const m = client.mutate<
    EventCreateMutationMutation,
    EventCreateMutationMutationVariables
  >({
    mutation: EventCreateMutationDoc,
    ...options,
  });
  return m;
};
export const EventListQuery = (
  options: Omit<WatchQueryOptions<EventListQueryQueryVariables>, "query">
): Readable<
  ApolloQueryResult<EventListQueryQuery> & {
    query: ObservableQuery<EventListQueryQuery, EventListQueryQueryVariables>;
  }
> => {
  const q = client.watchQuery({
    query: EventListQueryDoc,
    ...options,
  });
  var result = readable<
    ApolloQueryResult<EventListQueryQuery> & {
      query: ObservableQuery<EventListQueryQuery, EventListQueryQueryVariables>;
    }
  >(
    {
      data: {} as any,
      loading: true,
      error: undefined,
      networkStatus: 1,
      query: q,
    },
    (set) => {
      q.subscribe((v: any) => {
        set({ ...v, query: q });
      });
    }
  );
  return result;
};

export const SingleEventQuery = (
  options: Omit<WatchQueryOptions<SingleEventQueryQueryVariables>, "query">
): Readable<
  ApolloQueryResult<SingleEventQueryQuery> & {
    query: ObservableQuery<
      SingleEventQueryQuery,
      SingleEventQueryQueryVariables
    >;
  }
> => {
  const q = client.watchQuery({
    query: SingleEventQueryDoc,
    ...options,
  });
  var result = readable<
    ApolloQueryResult<SingleEventQueryQuery> & {
      query: ObservableQuery<
        SingleEventQueryQuery,
        SingleEventQueryQueryVariables
      >;
    }
  >(
    {
      data: {} as any,
      loading: true,
      error: undefined,
      networkStatus: 1,
      query: q,
    },
    (set) => {
      q.subscribe((v: any) => {
        set({ ...v, query: q });
      });
    }
  );
  return result;
};

export const GenerateAiAssets = (
  options: Omit<WatchQueryOptions<GenerateAiAssetsQueryVariables>, "query">
): Readable<
  ApolloQueryResult<GenerateAiAssetsQuery> & {
    query: ObservableQuery<
      GenerateAiAssetsQuery,
      GenerateAiAssetsQueryVariables
    >;
  }
> => {
  const q = client.watchQuery({
    query: GenerateAiAssetsDoc,
    ...options,
  });
  var result = readable<
    ApolloQueryResult<GenerateAiAssetsQuery> & {
      query: ObservableQuery<
        GenerateAiAssetsQuery,
        GenerateAiAssetsQueryVariables
      >;
    }
  >(
    {
      data: {} as any,
      loading: true,
      error: undefined,
      networkStatus: 1,
      query: q,
    },
    (set) => {
      q.subscribe((v: any) => {
        set({ ...v, query: q });
      });
    }
  );
  return result;
};
