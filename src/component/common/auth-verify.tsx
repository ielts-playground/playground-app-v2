import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { PATH_NAME_AUTH } from '@/constant/auth';

type Props = {
  onLogOut: () => void;
  children: ReactNode;
};

const isTokenExpired = (token: string) => {
  return Date.now() >= JSON.parse(atob(token.split('.')[1])).exp * 1000;
};

const AuthVerify = ({ onLogOut, children }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let token = localStorage.getItem('TOKEN');
    if (token) {
      if (!isTokenExpired(token)) {
        if (
          pathname === PATH_NAME_AUTH.LOGIN ||
          pathname === PATH_NAME_AUTH.REGISTER ||
          pathname === PATH_NAME_AUTH.VERIFY
        ) {
          router.push('/home');
        }
      }
      // user = JSON.parse(token);
    } else {
    }
  }, [pathname]);

  return <>{children}</>;
};

export default AuthVerify;
