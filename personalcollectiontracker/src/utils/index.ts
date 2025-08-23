// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getValue = (object: any, key: string): any => {
    return object[key] ?? '';
};

export const getTableHeaderValue = (header: string): string => {
    if (!header) {
        return '';
    }

    return header[0].toUpperCase() + header.slice(1, header.length);
};

export * from './constants';
