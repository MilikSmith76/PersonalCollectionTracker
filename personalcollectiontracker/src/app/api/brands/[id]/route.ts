import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

import type { BrandInput } from '@/__generated__/graphql';
import type { RouteParams } from '@/interfaces';

import { BrandService } from '@/services';
import { BAD_REQUEST } from '@/utils';

const brandService = new BrandService();

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

    const brand = await brandService.get(+id);

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

    const brand = await brandService.update(input);

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

    const success = await brandService.delete(+id);

    return NextResponse.json({ success });
};

export { DELETE, GET, PUT };
