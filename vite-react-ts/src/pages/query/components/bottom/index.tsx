import React, { memo, useState, useMemo, useReducer } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Slider from '../slider/index';
import { ORDER_DEPART } from '../constant';
import './index.module.scss';

function checkedReducer(state, action) {
  const { type, payload } = action;
  let newState;
  switch (type) {
    case 'toggle':
      newState = { ...state };
      if (payload in newState) {
        delete newState[payload];
      } else {
        newState[payload] = true;
      }
      return newState;
    case 'reset':
      return {};
    default:
  }

  return state;
}

interface FilterProps {
  name: string;
  checked: boolean;
  value: string;
  dispatch: (obj: any) => void;
}
const Filter = memo(function Filter(props: FilterProps) {
  const { name, checked, value, dispatch } = props;

  return (
    <li
      className={classnames({ checked })}
      onClick={() => dispatch({ payload: value, type: 'toggle' })}
    >
      {name}
    </li>
  );
});

interface OptionItem {
  value: string;
  name: string;
}
interface OptionProps {
  title: string;
  options: OptionItem[];
  checkedMap: any;
  dispatch: (obj: any) => void;
}

const Option = memo(function Option(props: OptionProps) {
  const { title, options, checkedMap, dispatch } = props;

  return (
    <div className="option">
      <h3>{title}</h3>
      <ul>
        {options.map((option) => {
          return (
            <Filter
              key={option.value}
              {...option}
              checked={option.value in checkedMap}
              dispatch={dispatch}
            />
          );
        })}
      </ul>
    </div>
  );
});

interface BottomModalProps {
  ticketTypes: any[];
  trainTypes: any[];
  departStations: any[];
  arriveStations: any[];
  checkedTicketTypes: any;
  checkedTrainTypes: any;
  checkedDepartStations: any;
  checkedArriveStations: any;
  departTimeStart: number;
  departTimeEnd: number;
  arriveTimeStart: number;
  arriveTimeEnd: number;
  setCheckedTicketTypes: (value: any) => void;
  setCheckedDepartStations: (value: any) => void;
  setCheckedArriveStations: (value: any) => void;
  setDepartTimeStart: (value: any) => void;
  setDepartTimeEnd: (value: any) => void;
  setArriveTimeStart: (value: any) => void;
  setArriveTimeEnd: (value: any) => void;
  toggleIsFiltersVisible: () => void;
  setCheckedTrainTypes: (value: any) => void;
}
const BottomModal = memo(function BottomModal(props: BottomModalProps) {
  const {
    ticketTypes,
    trainTypes,
    departStations,
    arriveStations,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd,
    setCheckedTicketTypes,
    setCheckedTrainTypes,
    setCheckedDepartStations,
    setCheckedArriveStations,
    setDepartTimeStart,
    setDepartTimeEnd,
    setArriveTimeStart,
    setArriveTimeEnd,
    toggleIsFiltersVisible,
  } = props;

  const [localCheckedTicketTypes, localCheckedTicketTypesDispatch] = useReducer(
    checkedReducer,
    checkedTicketTypes,
    (checkedTicketTypes) => {
      return {
        ...checkedTicketTypes,
      };
    }
  );

  const [localCheckedTrainTypes, localCheckedTrainTypesDispatch] = useReducer(
    checkedReducer,
    checkedTrainTypes,
    (checkedTrainTypes) => {
      return {
        ...checkedTrainTypes,
      };
    }
  );

  const [localCheckedDepartStations, localCheckedDepartStationsDispatch] =
    useReducer(
      checkedReducer,
      checkedDepartStations,
      (checkedDepartStations) => {
        return {
          ...checkedDepartStations,
        };
      }
    );

  const [localCheckedArriveStations, localCheckedArriveStationsDispatch] =
    useReducer(
      checkedReducer,
      checkedArriveStations,
      (checkedArriveStations) => {
        return {
          ...checkedArriveStations,
        };
      }
    );

  const [localDepartTimeStart, setLocalDepartTimeStart] =
    useState(departTimeStart);
  const [localDepartTimeEnd, setLocalDepartTimeEnd] = useState(departTimeEnd);
  const [localArriveTimeStart, setLocalArriveTimeStart] =
    useState(arriveTimeStart);
  const [localArriveTimeEnd, setLocalArriveTimeEnd] = useState(arriveTimeEnd);

  const optionGroup = [
    {
      title: '????????????',
      options: ticketTypes,
      checkedMap: localCheckedTicketTypes,
      dispatch: localCheckedTicketTypesDispatch,
    },
    {
      title: '????????????',
      options: trainTypes,
      checkedMap: localCheckedTrainTypes,
      dispatch: localCheckedTrainTypesDispatch,
    },
    {
      title: '????????????',
      options: departStations,
      checkedMap: localCheckedDepartStations,
      dispatch: localCheckedDepartStationsDispatch,
    },
    {
      title: '????????????',
      options: arriveStations,
      checkedMap: localCheckedArriveStations,
      dispatch: localCheckedArriveStationsDispatch,
    },
  ];

  function sure() {
    setCheckedTicketTypes(localCheckedTicketTypes);
    setCheckedTrainTypes(localCheckedTrainTypes);
    setCheckedDepartStations(localCheckedDepartStations);
    setCheckedArriveStations(localCheckedArriveStations);

    setDepartTimeStart(localDepartTimeStart);
    setDepartTimeEnd(localDepartTimeEnd);

    setArriveTimeStart(localArriveTimeStart);
    setArriveTimeEnd(localArriveTimeEnd);

    toggleIsFiltersVisible();
  }

  const isResetDisabled = useMemo(() => {
    return (
      Object.keys(localCheckedTicketTypes).length === 0 &&
      Object.keys(localCheckedTrainTypes).length === 0 &&
      Object.keys(localCheckedDepartStations).length === 0 &&
      Object.keys(localCheckedArriveStations).length === 0 &&
      localDepartTimeStart === 0 &&
      localDepartTimeEnd === 24 &&
      localArriveTimeStart === 0 &&
      localArriveTimeEnd === 24
    );
  }, [
    localCheckedTicketTypes,
    localCheckedTrainTypes,
    localCheckedDepartStations,
    localCheckedArriveStations,
    localDepartTimeStart,
    localDepartTimeEnd,
    localArriveTimeStart,
    localArriveTimeEnd,
  ]);

  function reset() {
    if (isResetDisabled) {
      return;
    }

    localCheckedTicketTypesDispatch({ type: 'reset' });
    localCheckedTrainTypesDispatch({ type: 'reset' });
    localCheckedDepartStationsDispatch({ type: 'reset' });
    localCheckedArriveStationsDispatch({ type: 'reset' });
    setLocalDepartTimeStart(0);
    setLocalDepartTimeEnd(24);
    setLocalArriveTimeStart(0);
    setLocalArriveTimeEnd(24);
  }

  return (
    <div className="bottom-modal">
      <div className="bottom-dialog">
        <div className="bottom-dialog-content">
          <div className="title">
            <span
              className={classnames('reset', {
                disabled: isResetDisabled,
              })}
              onClick={reset}
            >
              ??????
            </span>
            <span className="ok" onClick={sure}>
              ??????
            </span>
          </div>
          <div className="options">
            {optionGroup.map((group) => (
              <Option {...group} key={group.title} />
            ))}
            <Slider
              title="????????????"
              currentStartHours={localDepartTimeStart}
              currentEndHours={localDepartTimeEnd}
              onStartChanged={setLocalDepartTimeStart}
              onEndChanged={setLocalDepartTimeEnd}
            />
            <Slider
              title="????????????"
              currentStartHours={localArriveTimeStart}
              currentEndHours={localArriveTimeEnd}
              onStartChanged={setLocalArriveTimeStart}
              onEndChanged={setLocalArriveTimeEnd}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

interface BottomProps {
  toggleOrderType: (value: any) => void;
  // toggleHighSpeed: (value: any) => void;
  toggleOnlyTickets: (value: any) => void;
  toggleIsFiltersVisible: () => void;
  highSpeed: boolean;
  orderType: number;
  onlyTickets: boolean;
  isFiltersVisible: boolean;
  ticketTypes: any[];
  trainTypes: any[];
  departStations: any[];
  arriveStations: any[];
  checkedTicketTypes: any;
  checkedTrainTypes: any;
  checkedDepartStations: any;
  checkedArriveStations: any;
  departTimeStart: number;
  departTimeEnd: number;
  arriveTimeStart: number;
  arriveTimeEnd: number;
  setCheckedTicketTypes: (value: any) => void;
  setCheckedTrainTypes: (value: any) => void;
  setCheckedDepartStations: (value: any) => void;
  setCheckedArriveStations: (value: any) => void;
  setDepartTimeStart: (value: any) => void;
  setDepartTimeEnd: (value: any) => void;
  setArriveTimeStart: (value: any) => void;
  setArriveTimeEnd: (value: any) => void;
  setTicketTypes: (value: any) => void;
  setTrainTypes: (value: any) => void;
  setDepartStations: (value: any) => void;
  setArriveStations: (value: any) => void;
}
export default function Bottom(props: BottomProps) {
  const {
    toggleOrderType,
    toggleOnlyTickets,
    toggleIsFiltersVisible,
    highSpeed,
    orderType,
    onlyTickets,
    isFiltersVisible,

    ticketTypes,
    trainTypes,
    departStations,
    arriveStations,
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd,
    setCheckedTicketTypes,
    setCheckedTrainTypes,
    setCheckedDepartStations,
    setCheckedArriveStations,
    setDepartTimeStart,
    setDepartTimeEnd,
    setArriveTimeStart,
    setArriveTimeEnd,
  } = props;

  const noChecked = useMemo(() => {
    return (
      Object.keys(checkedTicketTypes).length === 0 &&
      Object.keys(checkedTrainTypes).length === 0 &&
      Object.keys(checkedDepartStations).length === 0 &&
      Object.keys(checkedArriveStations).length === 0 &&
      departTimeStart === 0 &&
      departTimeEnd === 24 &&
      arriveTimeStart === 0 &&
      arriveTimeEnd === 24
    );
  }, [
    checkedTicketTypes,
    checkedTrainTypes,
    checkedDepartStations,
    checkedArriveStations,
    departTimeStart,
    departTimeEnd,
    arriveTimeStart,
    arriveTimeEnd,
  ]);

  return (
    <div className="bottom">
      <div className="bottom-filters">
        <span className="item" onClick={toggleOrderType}>
          <i className="icon">&#xf065;</i>
          {orderType === ORDER_DEPART ? '?????? ?????????' : '?????? ?????????'}
        </span>
        <span
          className={classnames('item', { 'item-on': highSpeed })}
          onClick={console.log}
        >
          <i className="icon">{highSpeed ? '\uf43f' : '\uf43e'}</i>
          ??????????????????
        </span>
        <span
          className={classnames('item', { 'item-on': onlyTickets })}
          onClick={toggleOnlyTickets}
        >
          <i className="icon">{onlyTickets ? '\uf43d' : '\uf43c'}</i>
          ????????????
        </span>
        <span
          className={classnames('item', {
            'item-on': isFiltersVisible || !noChecked,
          })}
          onClick={toggleIsFiltersVisible}
        >
          <i className="icon">{noChecked ? '\uf0f7' : '\uf446'}</i>
          ????????????
        </span>
      </div>
      {isFiltersVisible && (
        <BottomModal
          ticketTypes={ticketTypes}
          trainTypes={trainTypes}
          departStations={departStations}
          arriveStations={arriveStations}
          checkedTicketTypes={checkedTicketTypes}
          checkedTrainTypes={checkedTrainTypes}
          checkedDepartStations={checkedDepartStations}
          checkedArriveStations={checkedArriveStations}
          departTimeStart={departTimeStart}
          departTimeEnd={departTimeEnd}
          arriveTimeStart={arriveTimeStart}
          arriveTimeEnd={arriveTimeEnd}
          setCheckedTicketTypes={setCheckedTicketTypes}
          setCheckedTrainTypes={setCheckedTrainTypes}
          setCheckedDepartStations={setCheckedDepartStations}
          setCheckedArriveStations={setCheckedArriveStations}
          setDepartTimeStart={setDepartTimeStart}
          setDepartTimeEnd={setDepartTimeEnd}
          setArriveTimeStart={setArriveTimeStart}
          setArriveTimeEnd={setArriveTimeEnd}
          toggleIsFiltersVisible={toggleIsFiltersVisible}
        />
      )}
    </div>
  );
}
