import type { HTMLInputTypeAttribute } from 'react';

import type { FormFieldTypes } from '@/utils';

import type { Option } from './option';

export interface FormFieldProps {
    fieldType?: FormFieldTypes;
    inputType?: HTMLInputTypeAttribute;
    label: string;
    name: string;
    options?: Option[];
}
