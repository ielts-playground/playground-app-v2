import type { ReactNode } from 'react';

import { useSelector } from 'react-redux';
import { selectExamState } from '@/store/exam-slice';

import useBreakpoint, { DEFAULT_SCREEN } from '@/hooks/use-break-point';

import { Header } from './header/normal-header/header';
import './layout.scss';

type LayoutProps = {
  readonly children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const examState = useSelector(selectExamState);
  const { headerExam } = examState;

  const breakpoint = useBreakpoint();

  return (
    <>
      {headerExam ? headerExam : <Header />}
      {breakpoint === DEFAULT_SCREEN.MOBILE ? (
        <></>
      ) : (
        <main className='main-container'>{children}</main>
      )}
    </>
  );
};
