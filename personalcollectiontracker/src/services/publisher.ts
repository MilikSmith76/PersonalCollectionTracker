import type {
    CreatePublisherMutation,
    DeletePublisherMutation,
    GetAllPublishersQuery,
    GetPublisherQuery,
    Publisher,
    PublisherFilter,
    PublisherInput,
    UpdatePublisherMutation,
} from '@/__generated__/graphql';

import {
    CREATE_PUBLISHER,
    DELETE_PUBLISHER,
    GET_ALL_PUBLISHERS,
    GET_PUBLISHER,
    UPDATE_PUBLISHER,
} from '@/graphQL';
import { EntityService } from '@/utils';

class PublisherService extends EntityService<
    Publisher,
    GetPublisherQuery,
    GetAllPublishersQuery,
    CreatePublisherMutation,
    UpdatePublisherMutation,
    DeletePublisherMutation
> {
    constructor() {
        super(
            GET_PUBLISHER,
            GET_ALL_PUBLISHERS,
            CREATE_PUBLISHER,
            UPDATE_PUBLISHER,
            DELETE_PUBLISHER
        );
    }

    public async create<InputType>(input: InputType): Promise<Publisher> {
        const result = await this.createHelper(input);

        return this.validateResponse(result.data?.createPublisher);
    }

    public async delete(id: number): Promise<boolean> {
        const result = await this.deleteHelper(id);

        return !!result.data?.deletePublisher;
    }

    public async get(id: number): Promise<Publisher> {
        const result = await this.getHelper(id);

        return this.validateResponse(result.data.publisher);
    }

    public async getAll(filter: PublisherFilter): Promise<Publisher[]> {
        const result = await this.getAllHelper(filter);

        return this.validateResponse(result.data.publishers);
    }

    public async update(input: PublisherInput): Promise<Publisher> {
        const result = await this.updateHelper(input);

        return this.validateResponse(result.data?.updatePublisher);
    }
}

export default PublisherService;
