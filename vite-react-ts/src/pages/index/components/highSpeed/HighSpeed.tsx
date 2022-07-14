import React from 'react';
import classnames from 'classnames';
import './index.module.scss';
interface HighSpeedProps {
  highSpeed: boolean;
  toggle: (val: boolean) => void;
}
export default function HighSpeed(props: HighSpeedProps) {
  const { highSpeed, toggle } = props;

  return (
    <div styleName="high-speed">
      <div styleName="high-speed-label">只看高铁/动车</div>
      <div styleName="high-speed-switch" onClick={() => toggle(!highSpeed)}>
        {/* <input type="hidden" name="highSpeed" value={highSpeed} /> */}
        <div
          styleName={
            highSpeed ? 'high-speed-track' : 'high-speed-track checked'
          }
        >
          <span
            styleName={
              highSpeed ? 'high-speed-handle' : 'high-speed-handle checked'
            }
          ></span>
        </div>
      </div>
    </div>
  );
}
