import type {
    ApolloQueryResult,
    FetchResult,
    OperationVariables,
    TypedDocumentNode,
} from '@apollo/client';

import ApolloClientSingleton from './apolloClientSingleton';

abstract class EntityService<
    Type,
    GetGqlType,
    GetAllGqlType,
    CreateGqlType,
    UpdateGqlType,
    DeleteGqlType,
> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private createGql: TypedDocumentNode<CreateGqlType, any>;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private deleteGql: TypedDocumentNode<DeleteGqlType, any>;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private getAllGql: TypedDocumentNode<GetAllGqlType, any>;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private getGql: TypedDocumentNode<GetGqlType, any>;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private updateGql: TypedDocumentNode<UpdateGqlType, any>;

    constructor(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getGql: TypedDocumentNode<GetGqlType, any>,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        getAllGql: TypedDocumentNode<GetAllGqlType, any>,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        createGql: TypedDocumentNode<CreateGqlType, any>,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        updateGql: TypedDocumentNode<UpdateGqlType, any>,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        deleteGql: TypedDocumentNode<DeleteGqlType, any>
    ) {
        this.getGql = getGql;
        this.getAllGql = getAllGql;
        this.createGql = createGql;
        this.updateGql = updateGql;
        this.deleteGql = deleteGql;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public abstract create(input: any): Promise<Type>;

    public abstract delete(id: number): Promise<boolean>;

    public abstract get(id: number): Promise<Type>;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public abstract getAll(filter: any): Promise<Type[]>;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public abstract update(input: any): Promise<Type>;

    protected async createHelper<InputType>(
        input: InputType
    ): Promise<FetchResult<CreateGqlType>> {
        return this.mutation(this.createGql, { input });
    }

    protected async deleteHelper(
        id: number
    ): Promise<FetchResult<DeleteGqlType>> {
        return this.mutation(this.deleteGql, { id });
    }

    protected async getAllHelper<FilterType>(
        filter: FilterType
    ): Promise<ApolloQueryResult<GetAllGqlType>> {
        return this.query(this.getAllGql, { filter });
    }

    protected async getHelper(
        id: number
    ): Promise<ApolloQueryResult<GetGqlType>> {
        return this.query(this.getGql, { id });
    }

    protected async updateHelper<InputType>(
        input: InputType
    ): Promise<FetchResult<UpdateGqlType>> {
        return this.mutation(this.updateGql, { input });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    protected validateResponse<ResponseType>(response?: any): ResponseType {
        if (!response) {
            throw new Error('An invalid response has been returned');
        }

        return response as ResponseType;
    }

    private async mutation<MutationType>(
        mutationGql: TypedDocumentNode<MutationType>,
        variables?: OperationVariables
    ): Promise<FetchResult<MutationType>> {
        const result = await ApolloClientSingleton.mutation<MutationType>(
            mutationGql,
            variables
        );

        if (result.errors) {
            throw new Error(
                'This mutation could not be performed successfully'
            );
        }

        return result;
    }

    private async query<QueryType>(
        queryGql: TypedDocumentNode<QueryType>,
        variables?: OperationVariables
    ): Promise<ApolloQueryResult<QueryType>> {
        const result = await ApolloClientSingleton.query<QueryType>(
            queryGql,
            variables
        );

        if (result.error || result.errors) {
            throw new Error('This query could not be performed successfully');
        }

        return result;
    }
}

export default EntityService;
