import { graphql } from "../../__client_generated__";

export const GetCountryDocument = graphql(/* GraphQL */ `
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      native
      capital
      emoji
      emojiU
      currency
      phone
      states {
        name
      }
      languages {
        code
        name
        native
        rtl
      }
    }
  }
`);
