const queries = {
  getCountry: (_, { countryCode }, contextValue) => {
    return contextValue.dataSources.countryAPI.getCountry(countryCode);
  },
};

const queryDefs = `
    getCountry(countryCode: String): Country
`;

export { queries, queryDefs };
