import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import React from 'react'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { makeServer } from '../services/miraje';
import { QueryClient, QueryClientProvider } from 'react-query'
if (process.env.NODE_ENV === 'development') {
	makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={theme}>
			<QueryClientProvider client={new QueryClient()}>
				<SidebarDrawerProvider>
					<Component {...pageProps} />
				</SidebarDrawerProvider>
			</QueryClientProvider>
		</ChakraProvider>
	)
}

export default MyApp
