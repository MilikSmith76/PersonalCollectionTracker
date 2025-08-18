import { JSX } from 'react';

import { Button, Header, Main, Spacer, Table } from '@/components';
import Pagination from '@/components/pagination';

const options = ['id', 'name'];

const data = [
    {
        id: 1,
        name: 'Brand 1',
    },
    {
        id: 2,
        name: 'Brand 2',
    },
];

const BrandPage = (): JSX.Element => {
    return (
        <>
            <Header name='Brands' />
            <Main>
                <Spacer y={20} />
                <div className='mr-auto ml-auto w-2/3 text-right'>
                    <Button classNameExtension='mr-0' text='Create' />
                </div>
                <Table data={data} labels={options} />
                <div className='mt-2 mr-auto ml-auto w-2/3 text-center'>
                    <Pagination />
                </div>
            </Main>
        </>
    );
};

export default BrandPage;
