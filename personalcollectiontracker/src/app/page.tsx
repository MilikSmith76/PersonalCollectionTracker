import { JSX } from 'react';

import { DoughnutGraph, Header, LinebarGraph, Main, Spacer } from '@/components';

const sections: string[] = [
    'Brand',
    'Series',
    'Publishers',
    'TCG Products',
    'Card Rarity',
    'Card Set',
    'Collectable Type',
    'Video Game Console',
    'Shoe Model',
];

const Home = (): JSX.Element => {
    return (
        <>
            <Header name='Dashboard' />
            <Main>
                <Spacer y={20} />
                <LinebarGraph />
                <Spacer y={20} />
                <DoughnutGraph />
                <Spacer y={20} />
                <div className='mr-auto ml-auto grid w-3/4 grid-cols-3 gap-4'>
                    {sections.map((section, i) => (
                        <div
                            className='h-[4vw] content-center rounded-md bg-blue-500 text-center hover:bg-blue-700 xl:text-xl'
                            key={i}
                        >
                            {section}
                        </div>
                    ))}
                </div>
            </Main>
        </>
    );
};

export default Home;
