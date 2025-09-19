import type {
    ApolloQueryResult,
    DocumentNode,
    FetchResult,
    OperationVariables,
    TypedDocumentNode,
} from '@apollo/client';

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import { GRAPHQL_CLIENT_NAME } from './constants';

class ApolloClintSingleton {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private static client: ApolloClient<any>;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public static getClient(): ApolloClient<any> {
        if (!this.client) {
            this.client = new ApolloClient({
                cache: new InMemoryCache(),
                link: new HttpLink({ uri: process.env.GRAPHQL_HOST }),
                name: GRAPHQL_CLIENT_NAME,
            });
        }

        return this.client;
    }

    public static mutation<Type>(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        mutation: DocumentNode | TypedDocumentNode<any, OperationVariables>,
        variables?: OperationVariables
    ): Promise<FetchResult<Type>> {
        return this.getClient().mutate<Type>({
            fetchPolicy: 'no-cache',
            mutation,
            variables,
        });
    }

    public static query<Type>(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        query: DocumentNode | TypedDocumentNode<any, OperationVariables>,
        variables?: OperationVariables
    ): Promise<ApolloQueryResult<Type>> {
        return this.getClient().query<Type>({
            fetchPolicy: 'no-cache',
            query,
            variables,
        });
    }
}

export { ApolloClintSingleton };
