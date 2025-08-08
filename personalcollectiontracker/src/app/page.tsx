const Home = () => {
    return (
        <div className='font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
            <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
                <div className='flex gap-4 items-center flex-col sm:flex-row'>
                    Hello world
                </div>
            </main>
            <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
                <div className='flex items-center gap-2 hover:underline hover:underline-offset-4'>
                    Footer Area
                </div>
            </footer>
        </div>
    );
};

export default Home;
