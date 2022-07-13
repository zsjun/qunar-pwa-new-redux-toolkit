import React from 'react';

import './index.module.scss';
interface myProps {
  onBack: () => void;
  title: string;
}
export default function Header(props: myProps) {
  const { onBack, title } = props;
  return (
    <div styleName="header">
      {/* <div className="header-back" onClick={onBack}>
        <svg width="42" height="42">
          <polyline
            points="25,13 16,21 25,29"
            stroke="#fff"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div> */}
      <div className="fn24" styleName="title">
        火车票预订
      </div>
      <div className="fn14" styleName="info">
        便捷购票，服务您的每一次出行
      </div>
    </div>
  );
}
