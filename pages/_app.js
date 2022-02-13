import { SessionProvider } from "next-auth/react";
// import { AppProps} from 'next/app';

function MyApp({
    Component,
    pageProps: { session, ...pageProps }
 }) {
    return (
        <SessionProvider session={session} refetchInterval={0}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}

export default MyApp;