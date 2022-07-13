import React from 'react'
import switchImg from './switch.svg'
import './index.module.scss'

interface JourneyProps {
  from: string
  to: string
  exchangeFromTo: () => void
  showCitySelector: (flag: boolean) => void
}

export default function Journey(props: JourneyProps) {
  const { from, to, exchangeFromTo, showCitySelector } = props

  return (
    <div styleName="journey">
      <div styleName="journey-station" onClick={() => showCitySelector(true)}>
        <input
          type="text"
          readOnly
          name="from"
          value={from}
          styleName="journey-input journey-from"
        />
      </div>
      <div styleName="journey-switch" onClick={() => exchangeFromTo()}>
        <img src={switchImg} width="70" height="40" alt="switch" />
      </div>
      <div styleName="journey-station" onClick={() => showCitySelector(false)}>
        <input
          type="text"
          readOnly
          name="to"
          value={to}
          styleName="journey-input journey-to"
        />
      </div>
    </div>
  )
}
