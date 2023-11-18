import type { ReactNode } from 'react';
import { Header } from './header/Header';

import styles from './Layout.module.scss';
import Loading from '../common/loadding/Loading';

type LayoutProps = {
  readonly children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <main className={styles.mainContainer}>{children}</main>
  </>
);
