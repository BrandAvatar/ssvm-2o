import React from 'react'

const LightMode = ({children,className}) => {
  return (
    <div className={`light-theme min-vh-100 ${className}`}>
        {children}
    </div>
  )
}

export default LightMode;