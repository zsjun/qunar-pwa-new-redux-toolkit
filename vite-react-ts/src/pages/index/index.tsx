import React, { useEffect, memo } from 'react';
import { Button } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import Header from '../../common/Header';
import CitySelector from '../../common/CitySelector';
import DateSelector from '../../common/DateSelector';
import k from './index.module.scss';
import { login } from './api';

const back = () => {
  history.back();
};
function Index() {
  console.log(11, k);
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
      kaimo 的 index 页面
      <h3>sdsds</h3>
      <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...citySelectorCbs}
      />
      <DateSelector
        show={isDateSelectorVisible}
        {...dateSelectorCbs}
        onSelect={onSelectDate}
      />
      <div className={k.wrapBox}></div>
      <Button color="primary" fill="solid">
        11222
      </Button>
    </div>
  );
}

export default memo(Index);
