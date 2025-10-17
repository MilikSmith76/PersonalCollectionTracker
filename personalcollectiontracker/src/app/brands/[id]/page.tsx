'use client';
import axios from 'axios';
import { JSX, use, useCallback, useEffect, useState } from 'react';

import type { Brand } from '@/__generated__/graphql';
import type { AnyObject } from '@/interfaces';

import { Form, Header, Main, Spacer } from '@/components';
import { BRAND_FIELDS } from '@/utils';
import { brandValidator } from '@/validator';

interface UpdateBrandPageProps {
    params: Promise<{
        id: string;
    }>;
}

const UpdateBrandPage = (props: UpdateBrandPageProps): JSX.Element => {
    const { id } = use(props.params);

    const [brand, setBrand] = useState<Brand>();

    const onSubmit = useCallback(
        async (value: AnyObject) => {
            const result = await axios.put(`/api/brands/${id}`, value);

            setBrand(result.data.brand);
        },
        [id, setBrand]
    );

    const getBrand = useCallback(async () => {
        const result = await axios.get(`/api/brands/${id}`);

        setBrand(result.data.brand);
    }, [id, setBrand]);

    useEffect(() => {
        getBrand();
    }, [getBrand]);

    return (
        <>
            <Header name='Update Brand' />
            <Main>
                <Spacer y={20} />
                <div className='mr-auto ml-auto w-2/3 rounded border-2 p-4 dark:border-white'>
                    {brand && (
                        <Form
                            fields={BRAND_FIELDS}
                            formHeader={brand?.name ?? ''}
                            initialValues={brand}
                            onSubmit={onSubmit}
                            validate={brandValidator}
                        />
                    )}
                    {!brand && <p>Brand could not be found</p>}
                </div>
            </Main>
        </>
    );
};

export default UpdateBrandPage;
