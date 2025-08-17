import { JSX } from 'react';

interface MainProps {
    children: React.ReactNode;
}

const Main = ({ children }: MainProps): JSX.Element => (
    <main className='max @container mb-20'>
        {children}
    </main>
);

export default Main;
