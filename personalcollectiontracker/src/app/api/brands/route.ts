import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

import type { BrandFilter, BrandInput } from '@/__generated__/graphql';

import { BrandService } from '@/services';
import { getRequestParams } from '@/utils';

const brandService = new BrandService();

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

    const brands = await brandService.getAll(filter);

    return NextResponse.json({ brands });
};

const POST = async (request: NextRequest): Promise<NextResponse> => {
    const { description, logoUrl, name } = await request.json();

    const input: BrandInput = {
        description,
        logoUrl,
        name,
    };

    const brand = await brandService.create(input);

    return NextResponse.json({ brand });
};

export { GET, POST };
