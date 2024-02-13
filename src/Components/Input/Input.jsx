import React from 'react'

const Input = (props) => {
  const {value, onChange = () =>{}} = props

  return (
    <input type="text" placeholder='What would you like to do?' className='px-1 bg-transparent border-b-2 focus:outline-none text-black border-b-[#ADB2C4]' onChange={onChange} value={value}/>
  )
}

export default Input