import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://countries.trevorblades.com/graphql",
  documents: ["./src/graphql/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./__client_generated__/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
