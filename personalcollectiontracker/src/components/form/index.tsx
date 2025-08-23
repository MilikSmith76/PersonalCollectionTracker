'use client';
import type { FormProps } from 'react-final-form';

import { Fieldset, Legend } from '@headlessui/react';
import { JSX } from 'react';
import { Form as FinalForm } from 'react-final-form';

import type { FormFieldProps } from '@/interfaces';

import Button from '../button';
import FormField from './formField';

interface AppFromProps extends FormProps {
    fields: FormFieldProps[];
    formHeader: string;
}

const Form = ({
    fields,
    formHeader,
    ...formProps
}: AppFromProps): JSX.Element => (
    <FinalForm
        {...formProps}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
                <Fieldset className='space-y-8'>
                    <Legend className='text-lg font-bold'>{formHeader}</Legend>
                    {fields.map((field, index) => (
                        <FormField key={index} {...field} />
                    ))}
                    <Button text='Submit' type='submit' />
                </Fieldset>
            </form>
        )}
    />
);

export default Form;
