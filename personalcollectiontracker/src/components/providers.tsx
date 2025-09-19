'use client';

import type { ReactNode } from 'react';

import { ApolloProvider } from '@apollo/client';
import { JSX } from 'react';

import { ApolloClientSingleton } from '@/utils';

interface ProvidersProps {
    children: ReactNode;
}

const Providers = ({ children }: ProvidersProps): JSX.Element => {
    const apolloClient = ApolloClientSingleton.getClient();

    return (
        <ApolloProvider client={apolloClient}>
            {children}
        </ApolloProvider>
    );
};

export default Providers;