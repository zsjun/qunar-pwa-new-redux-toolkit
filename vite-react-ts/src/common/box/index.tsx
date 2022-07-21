import React, { memo, FC, ReactNode } from 'react';
import { SpinLoading } from 'antd-mobile';
import { isObject, isEmpty } from 'lodash';
import noDataPng from '@/assets/no_data.png';
import './index.scss';

const isBoxShow = (data: [] | object) => {
  // 正在加载时，展示Box
  if (Array.isArray(data)) {
    return data.length;
  }
  if (isObject(data)) {
    return !isEmpty(data);
  }
  return data && data !== 0;
};
interface BoxProps {
  isLoading: boolean;
  width?: number;
  height?: number;
  className?: string;
  children?: ReactNode;
  data?: any;
  style?: any;
}
const Box: FC<BoxProps> = (props) => {
  const {
    isLoading,
    children,
    width,
    height,
    className,
    data,
    style = {},
  } = props;
  const show = isBoxShow(data);
  return (
    <div
      styleName="box-wrap"
      className={className}
      style={{
        ...style,
        width,
        height,
      }}
    >
      {isLoading && (
        <div styleName="loading-box">
          <SpinLoading />
        </div>
      )}
      {!isLoading && !show && (
        <div styleName="no-data-box">
          <div>
            <img alt="暂无图像" src={noDataPng} />
            <div styleName="center">暂无数据</div>
          </div>
        </div>
      )}
      {!isLoading && show ? children : null}
    </div>
  );
};
export default memo(Box);
