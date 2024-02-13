import React from 'react'
import Input from '../Components/Input/Input'
import Button from '../Components/Button/Button'

const TodoForm = (props) => {
  const {handleInput, handleChange, valueTodo} = props

  return (
    <div className='flex flex-col gap-4 py-4 px-10 md:h-1/2 bg-white rounded-md'>
        <Input onChange={handleChange} value={valueTodo}/>
          <Button 
            style='bg-orange-500 m-auto px-16 py-1 rounded-md shadow-md shadow-orange-500/40 text-white font-semibold'
            children='Add'
            onClick={handleInput}
          />
    </div>
  )
}

export default TodoForm