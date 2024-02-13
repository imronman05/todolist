import React from 'react'

const Heading1 = (props) => {
  const {title, style} = props
  
  return (
    <h1 className={`${style}`}>{title}</h1>
  )
}

export default Heading1