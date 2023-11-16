import type { AppProps } from 'next/app';
import { wrapper } from '@/store/store';

import { Layout } from '@/component/layout/Layout';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
