import React, { useEffect, memo } from 'react';
import { Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import Header from '@/common/header/Header';
// import CitySelector from '@/common/CitySelector';
// import DateSelector from '@/common/DateSelector';
import DepartDate from './components/departDate/DepartDate';
import HighSpeed from './components/highSpeed/HighSpeed';
import Journey from './components/journey/Journey';
import Submit from './components/submit/Submit';
import k from './index.module.scss';
import { login } from './indexApi';

function Index() {
  let navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  useEffect(() => {
    login({
      username: 'zsj',
      password: 'zsj',
    });
  }, []);
  return (
    <div className={k.kaimoIndex}>
      <div className="header-wrapper">
        <Header title="火车票" onBack={back} />
      </div>
      <form action="./query.html" styleName="form">
        <Journey from={from} to={to} {...cbs} />
        <DepartDate time={departDate} {...departDateCbs} />
        <HighSpeed highSpeed={highSpeed} {...highSpeedCbs} />
        <Submit />
      </form>
      {/* <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...citySelectorCbs}
      /> */}
      {/* <DateSelector
        show={isDateSelectorVisible}
        {...dateSelectorCbs}
        onSelect={onSelectDate}
      /> */}
      <div className={k.wrapBox}></div>
      <Button color="primary" fill="solid">
        11222
      </Button>
    </div>
  );
}

export default memo(Index);
