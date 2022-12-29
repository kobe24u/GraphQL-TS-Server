import { gql } from "graphql-request";

export const schema = gql`
  type Gender {
    gender: String
    name: String
    probability: Float
  }
`;
