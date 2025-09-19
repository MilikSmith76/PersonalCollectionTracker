import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

import type {
    BrandInput,
    DeleteBrandMutation,
    GetBrandQuery,
    UpdateBrandMutation,
} from '@/__generated__/graphql';
import type { RouteParams } from '@/interfaces';

import { DELETE_BRAND, GET_BRAND, UPDATE_BRAND } from '@/graphQL/brands';
import { ApolloClientSingleton, BAD_REQUEST } from '@/utils';

const GET = async (
    _request: NextRequest,
    context: RouteParams
): Promise<NextResponse> => {
    const { id } = await context.params;

    if (isNaN(+id)) {
        return NextResponse.json(
            { error: `${id} is not a valid id` },
            { status: BAD_REQUEST }
        );
    }

    const result = await ApolloClientSingleton.query<GetBrandQuery>(GET_BRAND, {
        id,
    });

    const brand = result.data.brand;

    return NextResponse.json({ brand });
};

const PUT = async (
    request: NextRequest,
    context: RouteParams
): Promise<NextResponse> => {
    const { id } = await context.params;

    if (isNaN(+id)) {
        return NextResponse.json(
            { error: `${id} is not a valid id` },
            { status: BAD_REQUEST }
        );
    }

    const { description, logoUrl, name } = await request.json();

    const input: BrandInput = {
        description,
        id,
        logoUrl,
        name,
    };

    const result = await ApolloClientSingleton.mutation<UpdateBrandMutation>(
        UPDATE_BRAND,
        { input }
    );

    const brand = result.data?.updateBrand;

    return NextResponse.json({ brand });
};

const DELETE = async (
    _request: NextRequest,
    context: RouteParams
): Promise<NextResponse> => {
    const { id } = await context.params;

    if (isNaN(+id)) {
        return NextResponse.json(
            { error: `${id} is not a valid id` },
            { status: BAD_REQUEST }
        );
    }

    const result = await ApolloClientSingleton.mutation<DeleteBrandMutation>(
        DELETE_BRAND,
        { id }
    );

    const success = result.data?.deleteBrand;

    return NextResponse.json({ success });
};

export { DELETE, GET, PUT };
