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
  const { isInExam } = examState;

  const breakpoint = useBreakpoint();

  return (
    <>
      <Header />
      {breakpoint === DEFAULT_SCREEN.MOBILE ? (
        <></>
      ) : (
        <main className='main-container'>{children}</main>
      )}
    </>
  );
};
