import { Field, Label, Select } from '@headlessui/react';
import { JSX } from 'react';
import { Field as FinalField } from 'react-final-form';

import type { FormFieldProps } from '@/interfaces';

const SelectFormField = ({
    label,
    name,
    options,
}: FormFieldProps): JSX.Element => (
    <FinalField name={name}>
        {({ input }) => (
            <Field>
                <Label className='block'>{label}</Label>
                <Select
                    className='hover:bg-black-900 mt-1 block w-full rounded border-2 px-2 py-3 focus:bg-slate-400 dark:border-white'
                    onBlur={input.onBlur}
                    onChange={input.onChange}
                    onFocus={input.onFocus}
                    value={input.value}
                >
                    <option value=''>None Selected</option>
                    {options?.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.name}
                        </option>
                    ))}
                </Select>
            </Field>
        )}
    </FinalField>
);

export default SelectFormField;
