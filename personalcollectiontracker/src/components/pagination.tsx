import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { JSX } from 'react';

import Button from './button';

const Pagination = (): JSX.Element => {
    return (
        <nav className='isolate inline-flex rounded-md border border-gray-500 bg-gray-400'>
            <Button
                className='border border-gray-500 p-2 hover:bg-gray-600'
                icon={<ChevronDoubleLeftIcon className='inline-flex size-6 text-white' />}
            />
            <Button
                className='border border-gray-500 p-2 hover:bg-gray-600'
                icon={<ChevronLeftIcon className='inline-flex size-6 text-white' />}
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
                icon={<ChevronRightIcon className='inline-flex size-6 text-white' />}
            />
            <Button
                className='border border-gray-500 p-2 hover:bg-gray-600'
                icon={<ChevronDoubleRightIcon className='inline-flex size-6 text-white' />}
            />
        </nav>
    );
};

export default Pagination;
