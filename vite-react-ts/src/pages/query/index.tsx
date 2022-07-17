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
import Bottom from './components/bottom/';
import { ORDER_DEPART, ORDER_DURATION } from './components/constant';
// import { login } from './indexApi'
import './index.module.scss';

function Query() {
  const [params] = useSearchParams();
  const from = params.get('from');
  const to = params.get('to');
  const date = params.get('date');
  const highSpeed = !!params.get('highSpeed');
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

  const [orderType, setOrderType] = useState(ORDER_DEPART);
  const toggleOrderType = () => {
    if (orderType === ORDER_DEPART) {
      setOrderType(ORDER_DURATION);
    } else {
      setOrderType(ORDER_DEPART);
    }
  };

  const [onlyTickets, setOnlyTickets] = useState(false);
  const toggleOnlyTickets = () => {
    setOnlyTickets(!onlyTickets);
  };

  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const toggleIsFiltersVisible = () => {
    setIsFiltersVisible(!isFiltersVisible);
  };

  const [ticketTypes, setTicketTypes] = useState([]);
  const [trainTypes, setTrainTypes] = useState([]);
  const [departStations, setDepartStations] = useState([]);
  const [arriveStations, setArriveStations] = useState([]);
  const [checkedTicketTypes, setCheckedTicketTypes] = useState({});
  const [checkedTrainTypes, setCheckedTrainTypes] = useState({});
  const [checkedDepartStations, setCheckedDepartStations] = useState({});
  const [checkedArriveStations, setCheckedArriveStations] = useState({});
  const [departTimeStart, setDepartTimeStart] = useState(0);
  const [departTimeEnd, setDepartTimeEnd] = useState(0);
  const [arriveTimeStart, setArriveTimeStart] = useState(0);
  const [arriveTimeEnd, setArriveTimeEnd] = useState(0);

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
      <Bottom
        highSpeed={highSpeed}
        orderType={orderType}
        toggleOrderType={toggleOrderType}
        onlyTickets={onlyTickets}
        toggleOnlyTickets={toggleOnlyTickets}
        isFiltersVisible={isFiltersVisible}
        toggleIsFiltersVisible={toggleIsFiltersVisible}
        ticketTypes={ticketTypes}
        setTicketTypes={setTicketTypes}
        trainTypes={trainTypes}
        setTrainTypes={setTrainTypes}
        departStations={departStations}
        setDepartStations={setDepartStations}
        arriveStations={arriveStations}
        setArriveStations={setArriveStations}
        checkedTicketTypes={checkedTicketTypes}
        setCheckedTicketTypes={setCheckedTicketTypes}
        checkedTrainTypes={checkedTrainTypes}
        setCheckedTrainTypes={setCheckedTrainTypes}
        checkedDepartStations={checkedDepartStations}
        setCheckedDepartStations={setCheckedDepartStations}
        checkedArriveStations={checkedArriveStations}
        setCheckedArriveStations={setCheckedArriveStations}
        departTimeStart={departTimeStart}
        setDepartTimeStart={setDepartTimeStart}
        departTimeEnd={departTimeEnd}
        setDepartTimeEnd={setDepartTimeEnd}
        arriveTimeStart={arriveTimeStart}
        setArriveTimeStart={setArriveTimeStart}
        arriveTimeEnd={arriveTimeEnd}
        setArriveTimeEnd={setArriveTimeEnd}
      />
    </div>
  );
}

export default memo(Query);
