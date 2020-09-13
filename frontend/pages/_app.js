import '../styles/globals.css'
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
import Header from './../components/header';
import { Provider } from 'react-redux';
import store from './../store/index';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>NEXPress Food</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>);
}
export default MyApp
