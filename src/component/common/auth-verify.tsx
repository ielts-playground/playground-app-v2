import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { PATHS_NAME_AUTH } from '@/constant/auth';

type Props = {
  children: ReactNode;
};

const isTokenExpired = (token: string) => {
  return Date.now() >= JSON.parse(atob(token.split('.')[1])).exp * 1000;
};

const AuthVerify = ({ children }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let token = localStorage.getItem('TOKEN');
    if (token) {
      if (!isTokenExpired(token)) {
        if (pathname && PATHS_NAME_AUTH.includes(pathname)) {
          router.push('/list-exam');
        }
      }
    } else {
      ((pathname && !PATHS_NAME_AUTH.includes(pathname)) || pathname === '/verify') &&
        router.push('/');
    }
  }, [pathname, router]);

  return <>{children}</>;
};

export default AuthVerify;
