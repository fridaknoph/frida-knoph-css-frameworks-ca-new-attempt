import React from "react";
import ApolloClient, { gql } from "apollo-boost";
import { InMemoryCache } from "apollo-boost";
import { useQuery } from "@apollo/client";

const gqlUrl = "https://countries.trevorblades.com/graphql";

const client = new ApolloClient({
  uri: gqlUrl,
  cache: new InMemoryCache(),
});

export default async function HomePage() {
  const json = await client.query({
    query: gql`
      {
        country(code: "AR") {
          name
          native
          capital
          currency
          languages {
            name
          }
        }
      }
    `,
  });
}
