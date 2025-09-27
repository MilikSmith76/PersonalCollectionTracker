'use client';
import axios from 'axios';
import Link from 'next/link';
import { JSX, useCallback, useEffect, useState } from 'react';

import { Header, Main, Spacer, Table } from '@/components';
import Pagination from '@/components/pagination';

const OPTIONS = ['id', 'name'];

const BrandPage = (): JSX.Element => {
    const [brands, setBrands] = useState([]);

    const fetchBrands = useCallback(async () => {
        const result = await axios.get('/api/brands');

        setBrands(result.data.brands);
    }, [setBrands]);

    useEffect(() => {
        fetchBrands();
    }, [fetchBrands]);

    return (
        <>
            <Header name='Brands' />
            <Main>
                <Spacer y={20} />
                <div className='mr-auto mb-5 ml-auto w-2/3 text-right'>
                    <Link
                        className='m-2 rounded bg-sky-600 px-4 py-3 hover:bg-sky-500'
                        href='/brands/new'
                    >
                        Create
                    </Link>
                </div>
                <Table data={brands} labels={OPTIONS} />
                <div className='mt-2 mr-auto ml-auto w-2/3 text-center'>
                    <Pagination />
                </div>
            </Main>
        </>
    );
};

export default BrandPage;
