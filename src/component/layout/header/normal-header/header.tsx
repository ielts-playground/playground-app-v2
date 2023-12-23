import { useSelector } from 'react-redux';
import './header.scss';
import { selectAuthState } from '@/store/auth-slice';

export const Header = () => {
  const authState = useSelector(selectAuthState);
  const { information } = authState;
  return (
    <header className='header-outer'>
      <div className='header-inner responsive-wrapper'>
        <div className='header-logo'>Logo</div>
        <nav className='header-navigation'>{information ? information.user.fullName : ''}</nav>
      </div>
    </header>
  );
};
