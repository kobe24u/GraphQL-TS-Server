import { gql } from "graphql-request";

export const schema = gql`
  type Language {
    code: ID!
    name: String
    native: String
    rtl: Boolean!
  }

  type Continent {
    code: ID!
    countries: [Country!]!
    name: String!
  }

  type State {
    code: String
    country: Country!
    name: String!
  }

  type Country {
    capital: String
    code: ID!
    currency: String
    emoji: String!
    emojiU: String!
    languages: [Language!]!
    name: String!
    native: String!
    phone: String!
    states: [State!]!
    continent: Continent!
  }
`;
