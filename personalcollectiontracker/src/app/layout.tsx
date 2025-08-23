import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';
import { JSX } from 'react';

import { Footer, Navbar } from '@/components';

interface RootLayoutProps {
    children: ReactNode;
}

const geistSans = Geist({
    subsets: ['latin'],
    variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
    subsets: ['latin'],
    variable: '--font-geist-mono',
});

export const metadata: Metadata = {
    description: 'Tracker personal collectables with this frontend UI',
    title: 'Personal Collectable Tracker',
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>): JSX.Element => {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
};

export default RootLayout;
