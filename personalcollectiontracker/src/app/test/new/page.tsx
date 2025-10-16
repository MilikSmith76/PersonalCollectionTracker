'use client';
import { JSX } from 'react';

import type { FormFieldProps } from '@/interfaces';

import { Form, Header, Main, Spacer } from '@/components';
import { FormFieldTypes } from '@/utils';

const fields: FormFieldProps[] = [
    {
        fieldType: FormFieldTypes.TEXT,
        label: 'Name',
        name: 'name',
    },
    {
        fieldType: FormFieldTypes.COMBO,
        label: 'Combo',
        name: 'combo',
    },
    {
        fieldType: FormFieldTypes.RADIO,
        label: 'Radio',
        name: 'radio',
        options: [
            {
                name: 'Option 1',
                value: '1',
            },
            {
                name: 'Option 2',
                value: '2',
            },
        ],
    },
    {
        fieldType: FormFieldTypes.SELECT,
        label: 'Select',
        name: 'select',
        options: [
            {
                name: 'Option 1',
                value: '1',
            },
            {
                name: 'Option 2',
                value: '2',
            },
        ],
    },
    {
        fieldType: FormFieldTypes.SWITCH,
        label: 'Switch',
        name: 'switch',
    },
];

const TestNewPage = (): JSX.Element => {
    return (
        <>
            <Header name='Create New Brand' />
            <Main>
                <Spacer y={20} />
                <div className='mr-auto ml-auto w-2/3 rounded border-2 p-4 dark:border-white'>
                    <Form
                        fields={fields}
                        formHeader='Create New Brand'
                        onSubmit={(value) => console.log(value)}
                    />
                </div>
            </Main>
        </>
    );
};

export default TestNewPage;
