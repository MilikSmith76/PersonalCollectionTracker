import { JSX } from 'react';

const Home = (): JSX.Element => {
    return (
        <div className='grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20'>
            <main className='row-start-2 flex flex-col items-center gap-[32px] sm:items-start'>
                <div className='flex flex-col items-center gap-4 sm:flex-row'>
                    Hello world
                </div>
            </main>
            <footer className='row-start-3 flex flex-wrap items-center justify-center gap-[24px]'>
                <div className='flex items-center gap-2 hover:underline hover:underline-offset-4'>
                    Footer Area
                </div>
            </footer>
        </div>
    );
};

export default Home;
