import type { AnyObject } from '@/interfaces';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getValue = <Type>(object: any, key: string): Type => {
    return object[key] ?? '';
};

export const getTableHeaderValue = (header: string): string => {
    if (!header) {
        return '';
    }

    return header[0].toUpperCase() + header.slice(1, header.length);
};

export const getRequestParams = (searchParams: URLSearchParams): AnyObject => {
    const params: AnyObject = {};

    searchParams.forEach((value, key) => {
        params[key] = value;
    });

    return params;
};

export { default as ApolloClientSingleton } from './apolloClientSingleton';
export * from './constants';
export { default as EntityService } from './entityService';
