import React from 'react'

const Button = ({buttonContent, classStyle}) => {
  return (
    <button className={classStyle}>{buttonContent}</button>
  )
}

export default Button
