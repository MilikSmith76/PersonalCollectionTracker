import type {
    Brand,
    BrandFilter,
    BrandInput,
    CreateBrandMutation,
    DeleteBrandMutation,
    GetAllBrandsQuery,
    GetBrandQuery,
    UpdateBrandMutation,
} from '@/__generated__/graphql';

import {
    CREATE_BRAND,
    DELETE_BRAND,
    GET_ALL_BRANDS,
    GET_BRAND,
    UPDATE_BRAND,
} from '@/graphQL';
import { EntityService } from '@/utils';

class BrandService extends EntityService<
    Brand,
    GetBrandQuery,
    GetAllBrandsQuery,
    CreateBrandMutation,
    UpdateBrandMutation,
    DeleteBrandMutation
> {
    constructor() {
        super(
            GET_BRAND,
            GET_ALL_BRANDS,
            CREATE_BRAND,
            UPDATE_BRAND,
            DELETE_BRAND
        );
    }

    public async create<InputType>(input: InputType): Promise<Brand> {
        const result = await this.createHelper(input);

        return this.validateResponse(result.data?.createBrand);
    }

    public async delete(id: number): Promise<boolean> {
        const result = await this.deleteHelper(id);

        return !!result.data?.deleteBrand;
    }

    public async get(id: number): Promise<Brand> {
        const result = await this.getHelper(id);

        return this.validateResponse(result.data.brand);
    }

    public async getAll(filter: BrandFilter): Promise<Brand[]> {
        const result = await this.getAllHelper(filter);

        return this.validateResponse(result.data.brands);
    }

    public async update(input: BrandInput): Promise<Brand> {
        const result = await this.updateHelper(input);

        return this.validateResponse(result.data?.updateBrand);
    }
}

export default BrandService;
