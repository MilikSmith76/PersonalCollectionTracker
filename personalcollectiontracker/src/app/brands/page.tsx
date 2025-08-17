import { JSX } from 'react';

import { Button, Header, Main, Spacer, Table } from '@/components';

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
            </Main>
        </>
    );
};

export default BrandPage;
