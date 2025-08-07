import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: "http://localhost:8080/graphql",
    documents: ["src/**/*.tsx", "src/**/*.ts"],
    generates: {
        "./src/__generated__/": {
            preset: "client",
            presetConfig: {
                gqlTagName: "gql",
            },
        },
        "./src/__generated__/types.ts": {
            plugins: ["typescript", "typescript-operations"],
        },
    },
    ignoreNoDocuments: true,
};

export default config;
