import { JSX } from 'react';

import { Header, Main, Spacer, Table } from '@/components';

const options = [
    'id',
    'name',
];

const data = [
    {
        id: 1,
        name: 'Brand 1',
    },
    {
        id: 2,
        name: 'Brand 2',
    }
];

const BrandPage = (): JSX.Element => {
    return (
        <>
            <Header name='Brands' />
            <Main>
                <Spacer y={20} />
                <Table data={data} labels={options} />
            </Main>
        </>
    );
};

export default BrandPage;
