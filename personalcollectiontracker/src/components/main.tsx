import type { ReactElement, ReactNode } from 'react';

interface MainProps {
    children: ReactNode;
}

const Main = ({ children }: MainProps): ReactElement => (
    <main className='max @container mb-20'>{children}</main>
);

export default Main;
