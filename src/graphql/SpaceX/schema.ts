import { gql } from "graphql-request";

export const schema = gql`
  type Rocket {
    active: Boolean
    boosters: Int
    company: String
    country: String
    description: String
  }
`;
