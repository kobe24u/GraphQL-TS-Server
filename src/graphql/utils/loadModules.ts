const loadModules = (modules, directives) => {
  const resolvers = modules.reduce(
    (acc, m) => ({
      ...acc,
      Query: {
        ...(acc.Query || {}),
        ...m.queries,
      },
      Mutation: {
        ...(acc.Mutation || {}),
        ...m.mutations,
      },
      ...m.resolvers,
    }),
    {}
  );

  const schema = `
      ${directives.typeDefs || ""}
  
      type Query {
        ${modules.reduce((s, m) => s.concat(m.queryDefs), "")}
      }
  
      type Mutation {
        ${modules.reduce((s, m) => s.concat(m.mutationDefs), "")}
      }
    `;

  const typeDefs = [schema].concat(modules.map((m) => m.schema));

  return {
    typeDefs,
    resolvers,
    schemaDirectives: directives.resolvers || {},
  };
};

export default loadModules;
