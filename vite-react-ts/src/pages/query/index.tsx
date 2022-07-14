import React, {
  useEffect,
  memo,
  useReducer,
  useState,
  useCallback,
} from 'react';
import dayjs from 'dayjs';
import { Button } from 'antd-mobile';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '@/common/header/Header';
import Nav from '@/common/nav/Nav';
import { h0 } from '@/utils/fp';
import useNav from '@/utils/hooks/useNav';
// import CitySelector from '@/common/CitySelector';
import { useAppSelector, useAppDispatch } from '@/app/hooks';
import DateSelector from '@/common/dateSelector/DateSelector';
import { selectQuery, getQueryAsync } from './indexSlice';
import List from './components/list/List';
// import { login } from './indexApi'
import './index.module.scss';

function Query() {
  const [params] = useSearchParams();
  const from = params.get('from');
  const to = params.get('to');
  const date = params.get('date');
  const highSpeed = params.get('highSpeed');
  const tempDepartDate = h0(dayjs(date).valueOf());
  const [departDate, setDepartDate] = useState(tempDepartDate);

  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const nextDate = () => {
    setDepartDate(h0(departDate) + 86400 * 1000);
  };
  const prevDate = () => {
    setDepartDate(h0(departDate) - 86400 * 1000);
  };

  const { isPrevDisabled, isNextDisabled, prev, next } = useNav(
    departDate,
    prevDate,
    nextDate
  );
  const query = useAppSelector(selectQuery);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getQueryAsync({
        from,
        to,
        date,
        highSpeed,
      })
    );
  }, [from, to, date, highSpeed]);
  const { trains } = query;
  console.log(11, query);
  return (
    <div styleName="query-box">
      <Header title={`${from}-${to}`} onBack={back} />
      <Nav
        date={departDate}
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
        prev={prev}
        next={next}
      />
      <List list={trains} />
    </div>
  );
}

export default memo(Query);
