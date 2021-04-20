import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import React from 'react'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { makeServer } from '../services/miraje';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

if (process.env.NODE_ENV === 'development') {
	makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={new QueryClient()}>
			<ChakraProvider resetCSS theme={theme}>
				<SidebarDrawerProvider>
					<Component {...pageProps} />
				</SidebarDrawerProvider>
			</ChakraProvider>
			<ReactQueryDevtools />
		</QueryClientProvider >
	)
}

export default MyApp
