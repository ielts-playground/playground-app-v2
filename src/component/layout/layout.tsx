import { usePathname } from 'next/navigation';
import Head from 'next/head';
import { type ReactNode } from 'react';

import { useSelector } from 'react-redux';
import { selectExamState } from '@/store/exam-slice';
import { selectCommonState } from '@/store/common-slice';

import useBreakpoint, { DEFAULT_SCREEN } from '@/hooks/use-break-point';

import { Header } from './header/normal-header/header';
import { LIST_ROUTER_NOT_SUPPORT_MOBILE } from '@/common/constant';
import NoSupportScreenMobile from '../common/no-support-mobile';

import './layout.scss';

type LayoutProps = {
  readonly children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  const examState = useSelector(selectExamState);
  const commonState = useSelector(selectCommonState);
  const { headerExam } = examState;
  const { isInit } = commonState;

  const breakpoint = useBreakpoint();

  return (
    <>
      <Head>
        <title>IELTS Playground</title>
      </Head>
      {headerExam ? headerExam : <Header />}
      {breakpoint === DEFAULT_SCREEN.MOBILE &&
      pathname &&
      LIST_ROUTER_NOT_SUPPORT_MOBILE.includes(pathname) ? (
        <NoSupportScreenMobile />
      ) : (
        <main className={isInit ? 'main-container-init' : 'main-container'}>{children}</main>
      )}
    </>
  );
};
