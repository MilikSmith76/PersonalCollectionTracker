'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { JSX, useCallback } from 'react';

import type { AnyObject } from '@/interfaces';

import { Form, Header, Main, Spacer } from '@/components';
import { PUBLISHER_FIELDS } from '@/utils';
import { publisherValidator } from '@/validator';

const NewPublisherPage = (): JSX.Element => {
    const router = useRouter();

    const onSubmit = useCallback(
        async (value: AnyObject) => {
            await axios.post('/api/publishers', value);

            router.push('/publishers');
        },
        [router]
    );

    return (
        <>
            <Header name='Create New Publisher' />
            <Main>
                <Spacer y={20} />
                <div className='mr-auto ml-auto w-2/3 rounded border-2 p-4 dark:border-white'>
                    <Form
                        fields={PUBLISHER_FIELDS}
                        formHeader='Create New Publisher'
                        onSubmit={onSubmit}
                        validate={publisherValidator}
                    />
                </div>
            </Main>
        </>
    );
};

export default NewPublisherPage;
