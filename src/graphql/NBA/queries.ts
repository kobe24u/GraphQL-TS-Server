const queries = {
  getAllPlayers: async (_, __, contextValue) => {
    return await contextValue.dataSources.nbaAPI.getAllPlayers();
  },
};

const queryDefs = `
    getAllPlayers: [NBAPlayer]
`;

export { queries, queryDefs };
