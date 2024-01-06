import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectAuthState, setRenderHeaderInfo } from '@/store/auth-slice';

import { UserInfoUser } from '@/models/auth';
import Button from '@/component/common/button/button';
import { LIST_ROUTER } from '@/common/constant';

import './header.scss';

export const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const authState = useSelector(selectAuthState);
  console.log(authState.renderHeaderInfo);

  const [userInfo, setUserInfo] = useState<UserInfoUser | null>(null);

  useEffect(() => {
    const user = localStorage.getItem('USER');
    if (user) {
      setUserInfo(JSON.parse(user));
    } else {
      setUserInfo(null);
    }
  }, [authState.renderHeaderInfo]);

  const handleLogout = () => {
    dispatch(setRenderHeaderInfo(Date.now()));
    router.push(LIST_ROUTER.LOGIN);
    localStorage.clear();
  };

  return (
    <header key={authState.renderHeaderInfo} className='header-outer'>
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
