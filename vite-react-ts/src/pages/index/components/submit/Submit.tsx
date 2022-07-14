import React, { memo } from 'react';
import './index.module.scss';

interface SubmitProps {
  handleClick: () => void;
}
export default memo(function Submit(props: SubmitProps) {
  const { handleClick } = props;
  return (
    <div styleName="submit">
      <button type="submit" styleName="submit-button" onClick={handleClick}>
        {' '}
        搜索{' '}
      </button>
    </div>
  );
});
