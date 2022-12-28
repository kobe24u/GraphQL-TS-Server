const schemas = `#graphql
  type Rocket {
    active: Boolean
    boosters: Int
    company: String
    country: String
    description: String
  }

  type Gender {
    gender: String
    name: String
    probability: Float
  }

  type Query {
    getRockets: [Rocket]
    guessGender(name: String): Gender
  }
`;
export default schemas;
