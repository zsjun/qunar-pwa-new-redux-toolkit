import React, { memo, useMemo } from 'react';
// import URI from 'urijs';
import PropTypes from 'prop-types';
import './index.module.scss';
interface ListItemProps {
  dTime: string;
  aTime: string;
  dStation: string;
  aStation: string;
  trainNumber: string;
  date: string;
  time: string;
  priceMsg: string;
  dayAfter: string;
}
const ListItem = memo(function ListItem(props: ListItemProps) {
  const {
    dTime,
    aTime,
    dStation,
    aStation,
    trainNumber,
    date,
    time,
    priceMsg,
    dayAfter,
  } = props;

  // const url = useMemo(() => {
  //   return new URI('ticket.html')
  //     .setSearch('aStation', aStation)
  //     .setSearch('dStation', dStation)
  //     .setSearch('trainNumber', trainNumber)
  //     .setSearch('date', date)
  //     .toString();
  // }, [aStation, dStation, trainNumber, date]);

  return (
    <li styleName="list-item">
      <a href={''}>
        <span styleName="item-time">
          <em>{dTime}</em>
          <br />
          <em styleName="em-light">
            {aTime} <i styleName="time-after">{dayAfter}</i>
          </em>
        </span>
        <span styleName="item-stations">
          <em>
            <i styleName="train-station train-start">始</i>
            {dStation}
          </em>
          <br />
          <em styleName="em-light">
            <i styleName="train-station train-end">终</i>
            {aStation}
          </em>
        </span>
        <span styleName="item-train">
          <em>{trainNumber}</em>
          <br />
          <em styleName="em-light">{time}</em>
        </span>
        <span styleName="item-ticket">
          <em>{priceMsg}</em>
          <br />
          <em styleName="em-light-orange">可抢票</em>
        </span>
      </a>
    </li>
  );
});

interface ListProps {
  list: ListItemProps[];
}
const List = memo(function List(props: ListProps) {
  const { list } = props;

  return (
    <ul styleName="list">
      {list.map((item, index) => (
        // <div key={index}>11</div>
        <ListItem {...item} key={index} />
      ))}
    </ul>
  );
});

export default List;
