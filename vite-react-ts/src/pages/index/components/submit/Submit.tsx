import React, { memo } from 'react'
import './index.module.scss'

export default memo(function Submit() {
  return (
    <div styleName="submit">
      <button type="submit" styleName="submit-button">
        {' '}
        搜索{' '}
      </button>
    </div>
  )
})
