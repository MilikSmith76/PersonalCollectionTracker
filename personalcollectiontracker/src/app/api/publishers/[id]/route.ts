import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

import type { PublisherInput } from '@/__generated__/graphql';
import type { RouteParams } from '@/interfaces';

import { PublisherService } from '@/services';
import { BAD_REQUEST } from '@/utils';

const publisherService = new PublisherService();

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

    const publisher = await publisherService.get(+id);

    return NextResponse.json({ publisher });
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

    const input: PublisherInput = {
        description,
        id,
        logoUrl,
        name,
    };

    const publisher = await publisherService.update(input);

    return NextResponse.json({ publisher });
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

    const success = await publisherService.delete(+id);

    return NextResponse.json({ success });
};

export { DELETE, GET, PUT };
