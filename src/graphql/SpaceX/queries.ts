const queries = {
  getRockets: (_, __, contextValue) => {
    return contextValue.dataSources.spacexAPI.getRockets();
  },
};

const queryDefs = `
    getRockets: [Rocket]
`;

export { queries, queryDefs };
