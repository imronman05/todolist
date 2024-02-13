import React from 'react'
import Heading1 from '../Components/Heading/Heading1'
import Table from '../Components/Table/Table'

const ListTodo = (props) => {
  const {todo, setStatus, deleteTodo} = props

  return (
    <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 ">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8 ">
              <div className="overflow-y-scroll bg-white rounded-md py-2 px-4 max-h-[25rem] ">
                <Heading1 
                  title='TODO Apps' 
                  style='text-left text-lg text-black font-bold'
                />
                <Table list={todo} setStatus={setStatus} deleteTodo={deleteTodo}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ListTodo