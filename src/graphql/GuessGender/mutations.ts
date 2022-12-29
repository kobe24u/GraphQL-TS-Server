const mutations = {
  dummyGuess: async (_, { query }, contextValue) => {
    return "male";
  },
};

const mutationDefs = `
  dummyGuess(query: String): String!
`;
export { mutations, mutationDefs };
