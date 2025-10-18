import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

import type { PublisherFilter, PublisherInput } from '@/__generated__/graphql';

import { PublisherService } from '@/services';
import { getRequestParams } from '@/utils';

const publisherService = new PublisherService();

const GET = async (request: NextRequest): Promise<NextResponse> => {
    const { deleted, description, id, logoUrl, name } = getRequestParams(
        request.nextUrl.searchParams
    );

    const filter: PublisherFilter = {
        deleted: deleted ? !!deleted : undefined,
        description,
        id,
        logoUrl,
        name,
    };

    const publishers = await publisherService.getAll(filter);

    return NextResponse.json({ publishers });
};

const POST = async (request: NextRequest): Promise<NextResponse> => {
    const { description, logoUrl, name } = await request.json();

    const input: PublisherInput = {
        description,
        logoUrl,
        name,
    };

    const publisher = await publisherService.create(input);

    return NextResponse.json({ publisher });
};

export { GET, POST };
