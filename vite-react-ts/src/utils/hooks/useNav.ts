import { useCallback } from 'react';
import { h0 } from '../fp';

export default function useNav(
  departDate: number,
  prevDate: () => void,
  nextDate: () => void
) {
  const isPrevDisabled = h0(departDate) <= h0();
  const isNextDisabled = h0(departDate) - h0() > 20 * 86400 * 1000;

  const prev = useCallback(() => {
    if (isPrevDisabled) {
      return;
    }
    prevDate();
  }, [isPrevDisabled]);

  const next = useCallback(() => {
    if (isNextDisabled) {
      return;
    }
    nextDate();
  }, [isNextDisabled]);

  return {
    isPrevDisabled,
    isNextDisabled,
    prev,
    next,
  };
}
