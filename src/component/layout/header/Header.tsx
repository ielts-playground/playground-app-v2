import { useSelector } from 'react-redux';
import './Header.scss';
import { selectAuthState } from '@/store/authSlice';

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
