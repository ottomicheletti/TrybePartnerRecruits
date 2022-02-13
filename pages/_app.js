import { SessionProvider } from "react";
// import { AppProps} from 'next/appnext-auth/';

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