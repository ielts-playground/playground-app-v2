import type { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useBreakpoint, { DEFAULT_SCREEN } from '@/hooks/use-break-point';

import { Header } from './header/normal-header/header';
import './layout.scss';
import { selectExamState } from '@/store/exam-slice';

type LayoutProps = {
  readonly children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const examState = useSelector(selectExamState);
  const { isInExam, headerExam } = examState;
  console.log('🚀 ~ file: Layout.tsx:16 ~ Layout ~ headerExam:', headerExam);

  const breakpoint = useBreakpoint();

  return (
    <>
      {headerExam}
      {/* <Header /> */}
      {breakpoint === DEFAULT_SCREEN.MOBILE ? (
        <></>
      ) : (
        <main className='main-container'>{children}</main>
      )}
    </>
  );
};
