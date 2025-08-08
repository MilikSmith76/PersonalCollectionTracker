import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';

import { NavbarLink } from '@/interfaces';

const links: NavbarLink[] = [
    {
        href: '#',
        name: 'Dashboard',
    },
    {
        href: '#',
        name: 'Art Books',
    },
    {
        href: '#',
        name: 'Card',
    },
    {
        href: '#',
        name: 'Sealed TCG',
    },
    {
        href: '#',
        name: 'Collectables',
    },
    {
        href: '#',
        name: 'Shoes',
    },
    {
        href: '#',
        name: 'Video Games',
    },
];

const Navbar = (): JSX.Element => {
    return (
        <nav className='w-full bg-slate-700'>
            <div className='flex h-16 items-center justify-between'>
                <div className='shrink-0 p-4'>
                    <Image
                        alt='Logo'
                        className='size-8'
                        height={40}
                        src='/favicon.ico'
                        width={40}
                    />
                </div>
                <div className='ml-10 flex items-baseline space-x-4'>
                    {links.map((link) => (
                        <Link
                            className='text-md rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white'
                            href={link.href}
                            key={link.name}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className='p-4 px-3 py-2' />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
