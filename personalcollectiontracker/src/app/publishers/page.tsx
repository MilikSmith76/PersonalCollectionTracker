'use client';
import axios from 'axios';
import Link from 'next/link';
import { JSX, useCallback, useEffect, useState } from 'react';

import { Header, Main, Spacer, Table } from '@/components';
import Pagination from '@/components/pagination';

const OPTIONS = ['id', 'name'];

const PublisherPage = (): JSX.Element => {
    const [publishers, setPublishers] = useState([]);

    const fetchPublishers = useCallback(async () => {
        const result = await axios.get('/api/publishers');

        setPublishers(result.data.publishers);
    }, [setPublishers]);

    useEffect(() => {
        fetchPublishers();
    }, [fetchPublishers]);

    return (
        <>
            <Header name='Publishers' />
            <Main>
                <Spacer y={20} />
                <div className='mr-auto mb-5 ml-auto w-2/3 text-right'>
                    <Link
                        className='m-2 rounded bg-sky-600 px-4 py-3 hover:bg-sky-500'
                        href='/publishers/new'
                    >
                        Create
                    </Link>
                </div>
                <Table data={publishers} labels={OPTIONS} />
                <div className='mt-2 mr-auto ml-auto w-2/3 text-center'>
                    <Pagination />
                </div>
            </Main>
        </>
    );
};

export default PublisherPage;
