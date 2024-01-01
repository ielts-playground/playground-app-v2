import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { UserInfoUser } from '@/models/auth';
import Button from '@/component/common/button/button';
import { LIST_ROUTER } from '@/common/constant';

import './header.scss';

export const Header = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState<UserInfoUser | undefined>(undefined);

  useEffect(() => {
    // const user = JSON.parse(localStorage.getItem('USER') || '{}');
    // setUserInfo(user);
  }, []);

  const handleLogout = () => {
    router.push(LIST_ROUTER.LOGIN);
    localStorage.clear();
  };

  return (
    <header className='header-outer'>
      <div className='header-inner responsive-wrapper'>
        <div className='header-logo'>Logo</div>
        <div className='right-header-container'>
          <div className='header-navigation'>{userInfo?.fullName}</div>
          {Object.keys(userInfo ? userInfo : {}).length !== 0 && (
            <Button text='Log out' className='logout-button' onClick={handleLogout} />
          )}
        </div>
      </div>
    </header>
  );
};
