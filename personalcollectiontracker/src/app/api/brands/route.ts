import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

import type {
    BrandFilter,
    BrandInput,
    CreateBrandMutation,
    GetAllBrandsQuery,
} from '@/__generated__/graphql';

import { CREATE_BRAND, GET_ALL_BRANDS } from '@/graphQL/brands';
import { ApolloClientSingleton, getRequestParams } from '@/utils';

const GET = async (request: NextRequest): Promise<NextResponse> => {
    const { deleted, description, id, logoUrl, name } = getRequestParams(
        request.nextUrl.searchParams
    );

    const filter: BrandFilter = {
        deleted: deleted ? !!deleted : undefined,
        description,
        id,
        logoUrl,
        name,
    };

    const result = await ApolloClientSingleton.query<GetAllBrandsQuery>(
        GET_ALL_BRANDS,
        { filter }
    );

    const brands = result.data.brands;

    return NextResponse.json({ brands });
};

const POST = async (request: NextRequest): Promise<NextResponse> => {
    const { description, logoUrl, name } = await request.json();

    const input: BrandInput = {
        description,
        logoUrl,
        name,
    };

    const result = await ApolloClientSingleton.mutation<CreateBrandMutation>(
        CREATE_BRAND,
        { input }
    );

    const brand = result.data?.createBrand;

    return NextResponse.json({ brand });
};

export { GET, POST };
