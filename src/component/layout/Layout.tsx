import type { ReactNode } from 'react';

import { Header } from './header/header';
import './layout.scss';

type LayoutProps = {
  readonly children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main className='main-container'>{children}</main>
  </>
);
