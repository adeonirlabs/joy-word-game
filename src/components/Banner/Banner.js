import React from 'react'

function Banner({ status, action, actionText = 'Restart game', children }) {
  return (
    <div className={`${status} banner`}>
      {children}
      {action && <button onClick={action}>{actionText}</button>}
    </div>
  )
}

export default Banner
