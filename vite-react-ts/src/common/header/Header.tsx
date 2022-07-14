import React from 'react';

import './index.module.scss';
interface myProps {
  onBack?: () => void;
  title: string;
}
export default function Header(props: myProps) {
  const { onBack, title } = props;
  if (!onBack || (onBack && typeof onBack !== 'function')) {
    return (
      <div styleName="big-header">
        <div>
          <div className="fn24" styleName="title">
            火车票预订
          </div>
          <div className="fn14" styleName="info">
            便捷购票，服务您的每一次出行
          </div>
        </div>
      </div>
    );
  }
  return (
    <div styleName="header">
      <div styleName="arrow" onClick={onBack}></div>
      <div styleName="header-title" className="fn18">
        {title}
      </div>
    </div>
  );
}
