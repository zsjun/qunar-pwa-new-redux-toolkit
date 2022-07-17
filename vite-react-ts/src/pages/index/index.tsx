import React, {
  useEffect,
  memo,
  useReducer,
  useState,
  useCallback,
} from 'react';
import { Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import Header from '@/common/header/Header';
import { h0 } from '@/utils/fp';
// import CitySelector from '@/common/CitySelector';
import DateSelector from '@/common/dateSelector/DateSelector';
import DepartDate from './components/departDate/DepartDate';
import HighSpeed from './components/highSpeed/HighSpeed';
import Journey from './components/journey/Journey';
import Submit from './components/submit/Submit';
// import { login } from './indexApi'
import { journeyInitState, journeyReducer } from './reducer';
import './index.module.scss';

function Index() {
  const [journeyState, dispatch] = useReducer(journeyReducer, journeyInitState);
  const [showCitySelector, setShowCitySelector] = useState(false);
  const [departDate, setDepartDate] = useState(Date.now());
  const [isDateSelectorVisible, setIsDateSelectorVisible] = useState(false);
  const [highSpeed, setHighSpeed] = useState(false);
  const handleExChange = () => {
    dispatch({
      type: 'exChange',
    });
  };

  const back = () => {
    setIsDateSelectorVisible(false);
  };
  const onSelectDate = useCallback((day: any) => {
    if (!day) {
      return;
    }

    if (day < h0()) {
      return;
    }
    setDepartDate(day);
    setIsDateSelectorVisible(false);
  }, []);

  const navigate = useNavigate();
  const goQuery = () => {
    navigate(
      `/query?from=${journeyState.from}&to=${journeyState.to}&highSpeed=${highSpeed}&date=${departDate}`
    );
  };
  return (
    <div styleName="index-box">
      <Header title="火车票" />
      <div styleName="form1">
        <Journey
          from={journeyState.from}
          to={journeyState.to}
          exchangeFromTo={handleExChange}
          showCitySelector={setShowCitySelector}
        />
        <DepartDate time={departDate} onClick={setIsDateSelectorVisible} />
        <HighSpeed highSpeed={highSpeed} toggle={setHighSpeed} />
        {/* <DepartDate time={departDate} {...departDateCbs} />
        <HighSpeed highSpeed={highSpeed} {...highSpeedCbs} /> */}
        <Submit handleClick={goQuery} />
      </div>

      {/* <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...citySelectorCbs}
      /> */}
      <DateSelector
        show={isDateSelectorVisible}
        onSelect={onSelectDate}
        onBack={back}
      />
      {/* <div className={k.wrapBox}></div> */}
      {/* <Button color="primary" fill="solid">
        11222
      </Button> */}
    </div>
  );
}

export default memo(Index);
