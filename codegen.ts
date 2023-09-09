import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000",
  documents: ["./src/**/*.gql"],
  generates: {
    "./src/graphql/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typed-document-node",
        "graphql-codegen-svelte-apollo",
      ],
      config: {
        clientPath: "../apolloClient",
      },
    },
  },
};
export default config;
