import { browser } from '$app/env';
import { defaultStoreValue, RequestStatus, ResponseResultType, type PatchType, type RequestQueryParameters, type RequestResult } from '@kitql/client';
import { get, writable } from 'svelte/store';
import { kitQLClient } from '../kitQLClient';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
 
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

/** Holds all relevant information about an event */
export type Event = {
  __typename?: 'Event';
  /** The description of the event */
  Description: Scalars['String']['output'];
  /** The title of the event */
  Title: Scalars['String']['output'];
  /** AI image generation tags */
  ai_image_style_tags: Array<Scalars['String']['output']>;
  /** The end date of the event */
  end: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  /** event keywords */
  keywords: Array<Scalars['String']['output']>;
  /** The location of the event */
  location?: Maybe<Location>;
  /** The start date of the event */
  start: Scalars['DateTime']['output'];
  users?: Maybe<Array<Maybe<User>>>;
};

/** Holds all relevant information about a location */
export type Location = {
  __typename?: 'Location';
  id: Scalars['Int']['output'];
  /** The name of the location */
  office: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
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
  eventId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationEventLeaveArgs = {
  eventId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type MutationLocationCreateArgs = {
  office: Scalars['String']['input'];
};


export type MutationLocationDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUserCreateArgs = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateEventArgs = {
  arg: CreateEventArgs;
};


export type MutationDeleteEventArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateEventArgs = {
  data: CreateEventArgs;
  id: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  event?: Maybe<Event>;
  events?: Maybe<Array<Maybe<Event>>>;
  location?: Maybe<Location>;
  locations?: Maybe<Array<Maybe<Location>>>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryEventArgs = {
  id: Scalars['Int']['input'];
};


export type QueryLocationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

/** Holds all relevant information about a user */
export type User = {
  __typename?: 'User';
  id: Scalars['Int']['output'];
};

export type CreateEventArgs = {
  ai_image_keywords: Array<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  end: Scalars['String']['input'];
  keywords: Array<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['Int']['input']>;
  office: Scalars['String']['input'];
  start: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

/**
 * Init KitQL (to have clientStarted = true!)
 *
 * Waiting for: https://github.com/sveltejs/kit/issues/4447
 */
export function KQL__Init() {}
 
/* Internal. To skip await on a client side navigation in the load function (from queryLoad)! */
let clientStarted = false; // Will be true on a client side navigation
if (browser) {
	addEventListener('sveltekit:start', () => {
		clientStarted = true;
	});
}
 
/**
 * ResetAllCaches in One function!
 */
export function KQL__ResetAllCaches() {
}
 
/* Operations 👇 */