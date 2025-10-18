'use client';
import axios from 'axios';
import { JSX, use, useCallback, useEffect, useState } from 'react';

import type { Publisher } from '@/__generated__/graphql';
import type { AnyObject } from '@/interfaces';

import { Form, Header, Main, Spacer } from '@/components';
import { PUBLISHER_FIELDS } from '@/utils';
import { publisherValidator } from '@/validator';

interface UpdatePublisherPageProps {
    params: Promise<{
        id: string;
    }>;
}

const UpdatePublisherPage = (props: UpdatePublisherPageProps): JSX.Element => {
    const { id } = use(props.params);

    const [publisher, setPublisher] = useState<Publisher>();

    const onSubmit = useCallback(
        async (value: AnyObject) => {
            const result = await axios.put(`/api/publishers/${id}`, value);

            setPublisher(result.data.publisher);
        },
        [id, setPublisher]
    );

    const getPublisher = useCallback(async () => {
        const result = await axios.get(`/api/publishers/${id}`);

        setPublisher(result.data.publisher);
    }, [id, setPublisher]);

    useEffect(() => {
        getPublisher();
    }, [getPublisher]);

    return (
        <>
            <Header name='Update Publisher' />
            <Main>
                <Spacer y={20} />
                <div className='mr-auto ml-auto w-2/3 rounded border-2 p-4 dark:border-white'>
                    {publisher && (
                        <Form
                            fields={PUBLISHER_FIELDS}
                            formHeader={publisher?.name ?? ''}
                            initialValues={publisher}
                            onSubmit={onSubmit}
                            validate={publisherValidator}
                        />
                    )}
                    {!publisher && <p>Publisher could not be found</p>}
                </div>
            </Main>
        </>
    );
};

export default UpdatePublisherPage;
