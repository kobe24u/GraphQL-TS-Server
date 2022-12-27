import { graphql } from "../../__client_generated__";

export const GetRocketsDocument = graphql(/* GraphQL */ `
  query GetRockets {
    rockets {
      active
      boosters
      company
      description
    }
  }
`);
