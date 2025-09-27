'use client';
import { JSX, useCallback } from 'react';
import { FieldInputProps, Field as FinalField } from 'react-final-form';

import type { FormFieldProps } from '@/interfaces';

import Button from '../button';

const RadioFormField = ({
    label,
    name,
    options,
}: FormFieldProps): JSX.Element => {
    const updateField = useCallback(
        (input: FieldInputProps, value: string): (() => void) =>
            (): void => {
                if (input.value == value) {
                    input.onChange('');
                    return;
                }

                input.onChange(value);
            },
        []
    );

    return (
        <FinalField name={name}>
            {({ input }) => (
                <>
                    <div className='mb-0 block'>{label}</div>
                    {options?.map((option) => (
                        <Button
                            className={[
                                'mt-1 mb-3 flex w-full rounded border-2 p-2 hover:border-slate-600 hover:text-slate-600 dark:border-white',
                                (input.value == option.value &&
                                    'bg-slate-400') ??
                                    '',
                            ].join(' ')}
                            key={`${option.value}_${option.name}`}
                            onBlur={input.onBlur}
                            onClick={updateField(input, option.value)}
                            onFocus={input.onFocus}
                            text={option.name}
                        />
                    ))}
                    <div className='' />
                </>
            )}
        </FinalField>
    );
};

export default RadioFormField;
