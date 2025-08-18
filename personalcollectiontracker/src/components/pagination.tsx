import { JSX } from 'react';

import Button from './button';

const Pagination = (): JSX.Element => {
    return (
        <nav className='isolate inline-flex rounded-md border border-gray-500 bg-gray-400'>
            <Button
                className='border border-gray-500 p-2 hover:bg-gray-600'
                text='Previous'
            />
            <Button
                className='border border-gray-500 px-4 py-2 hover:bg-gray-600'
                text='1'
            />
            <Button
                className='border border-gray-500 px-4 py-2 hover:bg-gray-600'
                text='2'
            />
            <Button
                className='border border-gray-500 px-4 py-2 hover:bg-gray-600'
                text='3'
            />
            <Button
                className='border border-gray-500 p-2 hover:bg-gray-600'
                text='Next'
            />
        </nav>
    );
};

export default Pagination;
