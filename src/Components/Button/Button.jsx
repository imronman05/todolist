import React from 'react'

const Button = (props) => {
  const {style, children, onClick =() =>{}, } = props
  return (
    <button className={style} onClick={onClick}>{children}</button>
  )
}

export default Button