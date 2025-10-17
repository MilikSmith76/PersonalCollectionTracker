'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { JSX, useCallback } from 'react';

import type { AnyObject } from '@/interfaces';

import { Form, Header, Main, Spacer } from '@/components';
import { BRAND_FIELDS } from '@/utils';
import { brandValidator } from '@/validator';

const NewBrandPage = (): JSX.Element => {
    const router = useRouter();

    const onSubmit = useCallback(
        async (value: AnyObject) => {
            await axios.post('/api/brands', value);

            router.push('/brands');
        },
        [router],
    );

    return (
        <>
            <Header name='Create New Brand' />
            <Main>
                <Spacer y={20} />
                <div className='mr-auto ml-auto w-2/3 rounded border-2 p-4 dark:border-white'>
                    <Form
                        fields={BRAND_FIELDS}
                        formHeader='Create New Brand'
                        onSubmit={onSubmit}
                        validate={brandValidator}
                    />
                </div>
            </Main>
        </>
    );
};

export default NewBrandPage;
