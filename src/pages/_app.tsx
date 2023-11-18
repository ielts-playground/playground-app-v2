import type { AppProps } from 'next/app';
import { wrapper } from '@/store/store';
import { ToastContainer } from 'react-toastify';

import { Layout } from '@/component/layout/Layout';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

import '../styles/index.scss';
import Loading from '@/component/common/loadding/Loading';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Loading /> */}

      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
