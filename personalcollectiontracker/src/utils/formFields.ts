import type { FormFieldProps } from '@/interfaces';

import { FormFieldTypes } from './constants';

const BRAND_FIELDS: FormFieldProps[] = [
    {
        fieldType: FormFieldTypes.TEXT,
        label: 'Name',
        name: 'name',
    },
    {
        fieldType: FormFieldTypes.TEXT,
        label: 'Description',
        name: 'description',
    },
    {
        fieldType: FormFieldTypes.TEXT,
        label: 'Logo Url',
        name: 'logoUrl',
    },
];

export { BRAND_FIELDS };
