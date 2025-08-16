import { JSX } from 'react/jsx-dev-runtime';

const Footer = (): JSX.Element => {
    return (
        <footer className='row-start-3 flex flex-wrap items-center justify-center gap-[24px] border-t-2 border-white pt-[20]'>
            <div className='flex items-center gap-2 hover:underline hover:underline-offset-4'>
                Footer Area
            </div>
        </footer>
    );
};

export default Footer;
