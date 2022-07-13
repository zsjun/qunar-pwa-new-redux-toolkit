import React, { FC } from 'react'
import classnames from 'classnames'

import { h0 } from './fp'
import Header from './header/Header'

import './index.module.scss'

interface DayProps {
  day: number
  onSelect: (day: any) => void
}
const Day: FC<DayProps> = (props: DayProps) => {
  const { day, onSelect } = props

  if (!day) {
    return <td styleName="null"></td>
  }

  const classes = []

  const now = h0()

  if (day < now) {
    classes.push('disabled')
  }

  if ([6, 0].includes(new Date(day).getDay())) {
    classes.push('weekend')
  }

  const dateString = now === day ? '今天' : new Date(day).getDate()

  return (
    <td styleName={classes.join(',')} onClick={() => onSelect(day)}>
      {dateString}
    </td>
  )
}

interface WeekProps {
  days: number[]
  onSelect: (day: any) => void
}

const Week: FC<WeekProps> = function Week(props: WeekProps) {
  const { days, onSelect } = props

  return (
    <tr styleName="date-table-days">
      {days.map((day, idx) => {
        return <Day key={idx} day={day} onSelect={onSelect} />
      })}
    </tr>
  )
}
interface MonthProps {
  startingTimeInMonth: number
  onSelect: (day: any) => void
}
const Month: FC<MonthProps> = (props: MonthProps) => {
  const { startingTimeInMonth, onSelect } = props

  const startDay = new Date(startingTimeInMonth)
  const currentDay = new Date(startingTimeInMonth)

  let days = []

  while (currentDay.getMonth() === startDay.getMonth()) {
    days.push(currentDay.getTime())
    currentDay.setDate(currentDay.getDate() + 1)
  }

  days = new Array(startDay.getDay() ? startDay.getDay() - 1 : 6)
    .fill(null)
    .concat(days)

  const lastDay = new Date(days[days.length - 1])

  days = days.concat(
    new Array(lastDay.getDay() ? 7 - lastDay.getDay() : 0).fill(null)
  )

  const weeks = []

  for (let row = 0; row < days.length / 7; ++row) {
    const week = days.slice(row * 7, (row + 1) * 7)
    weeks.push(week)
  }
  console.log(33, startDay.getFullYear())
  return (
    <table styleName="date-table">
      <thead>
        <tr>
          <td colSpan={7}>
            <h5>
              {startDay.getFullYear()}年{startDay.getMonth() + 1}月
            </h5>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr styleName="data-table-weeks">
          <th>周一</th>
          <th>周二</th>
          <th>周三</th>
          <th>周四</th>
          <th>周五</th>
          <th styleName="weekend">周六</th>
          <th styleName="weekend">周日</th>
        </tr>
        {weeks.map((week, idx) => {
          return <Week key={idx} days={week} onSelect={onSelect} />
        })}
      </tbody>
    </table>
  )
}

interface DateSelectorProps {
  show: boolean
  onSelect: (day: any) => void
  onBack: () => void
}

export default function DateSelector(props: DateSelectorProps) {
  const { show, onSelect, onBack } = props

  const now = new Date()
  now.setHours(0)
  now.setMinutes(0)
  now.setSeconds(0)
  now.setMilliseconds(0)
  now.setDate(1)

  const monthSequence = [now.getTime()]

  now.setMonth(now.getMonth() + 1)
  monthSequence.push(now.getTime())

  now.setMonth(now.getMonth() + 1)
  monthSequence.push(now.getTime())
  console.log(11, monthSequence)
  return (
    <div styleName={classnames('date-selector', { hidden: !show })}>
      {/* <Header title="日期选择" onBack={onBack} /> */}
      <div styleName="date-selector-tables">
        {monthSequence.map((month) => {
          return (
            <Month
              key={month}
              onSelect={onSelect}
              startingTimeInMonth={month}
            />
          )
        })}
      </div>
    </div>
  )
}
