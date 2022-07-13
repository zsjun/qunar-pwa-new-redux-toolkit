import React, { useEffect, memo, useReducer, useState } from 'react'
import { Button } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import Header from '@/common/header/Header'
// import CitySelector from '@/common/CitySelector';
// import DateSelector from '@/common/DateSelector';
import DepartDate from './components/departDate/DepartDate'
import HighSpeed from './components/highSpeed/HighSpeed'
import Journey from './components/journey/Journey'
import Submit from './components/submit/Submit'
// import { login } from './indexApi'
import { journeyInitState, journeyReducer } from './reducer'
import './index.module.scss'

function Index() {
  let navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }
  const [journeyState, dispatch] = useReducer(journeyReducer, journeyInitState)
  const [showCitySelector, setShowCitySelector] = useState(false)
  const [departDate, setDepartDate] = useState(Date.now())
  const handleExChange = () => {
    dispatch({
      type: 'exChange',
    })
  }
  return (
    <div styleName="index-box">
      <div styleName="header-box">
        <Header title="火车票" onBack={back} />
        <div styleName="form1">
          <Journey
            from={journeyState.from}
            to={journeyState.to}
            exchangeFromTo={handleExChange}
            showCitySelector={setShowCitySelector}
          />
          <DepartDate time={departDate} onClick={setDepartDate} />
          {/* <DepartDate time={departDate} {...departDateCbs} />
        <HighSpeed highSpeed={highSpeed} {...highSpeedCbs} /> */}
          <Submit />
        </div>
      </div>

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
      {/* <div className={k.wrapBox}></div> */}
      {/* <Button color="primary" fill="solid">
        11222
      </Button> */}
    </div>
  )
}

export default memo(Index)
