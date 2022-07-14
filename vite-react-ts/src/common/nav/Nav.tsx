import React, { useMemo, memo } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import './index.module.scss';
interface NavProps {
  date: number;
  prev: () => void;
  next: () => void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}
const Nav = memo(function Nav(props: NavProps) {
  const { date, prev, next, isPrevDisabled, isNextDisabled } = props;

  const currentString = useMemo(() => {
    const d = dayjs(date);
    return d.format('M月D日 ') + d.locale('zh-cn').format('ddd');
  }, [date]);

  return (
    <div styleName="nav">
      <span
        onClick={prev}
        styleName={isPrevDisabled ? 'nav-prev' : 'nav-disabled nav-prev'}
      >
        前一天
      </span>
      <span styleName="nav-current">{currentString}</span>
      <span
        onClick={next}
        styleName={isNextDisabled ? 'nav-disabled nav-next' : 'nav-next'}
      >
        后一天
      </span>
    </div>
  );
});

export default Nav;
