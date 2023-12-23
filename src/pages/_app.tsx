import type { AppProps } from 'next/app';
import { useRouter } from 'next/navigation';

import { useEffect } from 'react';
import { wrapper } from '@/store/store';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from '@/component/layout/layout';
import '../scss/index.scss';
import AuthVerify from '@/component/common/auth-verify';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('TOKEN');
    if (!token) {
      router.push('/');
    }
  }, [router]);

  return (
    <AuthVerify onLogOut={() => console.log('logout')}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </AuthVerify>
  );
}

export default wrapper.withRedux(MyApp);
