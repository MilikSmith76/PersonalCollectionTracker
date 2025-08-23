'use client';
import {
    Combobox,
    ComboboxButton,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Field,
    Label,
} from '@headlessui/react';
import { ChangeEvent, JSX, useCallback, useState } from 'react';
import { FieldInputProps, Field as FinalField } from 'react-final-form';

import type { FormFieldProps, Option } from '@/interfaces';

const DEFAULT_OPTIONS: Option[] = [
    {
        name: 'Option 1',
        value: '1',
    },
    {
        name: 'Option 2',
        value: '2',
    },
];

const ComboFormField = ({ label, name }: FormFieldProps): JSX.Element => {
    const [displayName, setDisplayName] = useState('');

    const [options, setOptions] = useState<Option[]>(DEFAULT_OPTIONS);

    const useDisplayName = useCallback(() => displayName, [displayName]);

    const onClose = useCallback(
        () => setOptions(DEFAULT_OPTIONS),
        [setOptions]
    );

    const onQuery = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const query = event.target.value;

            console.log(query);

            setOptions(DEFAULT_OPTIONS);
        },
        [setOptions]
    );

    const onChange = useCallback(
        (input: FieldInputProps): ((option: Option) => void) =>
            (option: Option) => {
                input.onChange(option?.value);
                setDisplayName(option?.name ?? '');
            },
        [setDisplayName]
    );

    return (
        <FinalField name={name}>
            {({ input }) => (
                <Field>
                    <Label className='block'>{label}</Label>
                    <Combobox onChange={onChange(input)} onClose={onClose}>
                        <ComboboxButton className='w-full'>
                            <ComboboxInput
                                className='mt-1 block w-full rounded border-2 border-white p-2'
                                displayValue={useDisplayName}
                                onChange={onQuery}
                            />
                        </ComboboxButton>
                        <ComboboxOptions
                            anchor='bottom'
                            className='w-(--input-width) rounded border bg-slate-400 empty:invisible'
                        >
                            {options?.map((option, index) => (
                                <ComboboxOption
                                    className='p-2 data-focus:bg-slate-500'
                                    key={index}
                                    value={option}
                                >
                                    {option.name}
                                </ComboboxOption>
                            ))}
                        </ComboboxOptions>
                    </Combobox>
                </Field>
            )}
        </FinalField>
    );
};

export default ComboFormField;
