import React from 'react'
import Button from '../Button/Button'
import { IoTrashBin } from 'react-icons/io5'

const Table = (props) => {
    const {list, setStatus, deleteTodo} = props

    const handleStatusChange = (taskId, isCompleted) => {
        setStatus(taskId, !isCompleted);
      };

  return (
    <table className="min-w-full text-center text-sm">
        <thead className="text-slate-400 dark:border-neutral-500">
            <tr>
                <th scope="col" className="px-6 py-4">List</th>
                <th scope="col" className="px-6 py-4">Status</th>
                <th scope="col" className="px-6 py-4">Close</th>
            </tr>
        </thead>
        <tbody>
            {list.map((data) =>{
                return (
                    <tr className="border-b dark:border-neutral-500" key={data.id}>
                        <td className="whitespace-nowrap px-6 py-4">{data.name}</td>
                        <td className="whitespace-nowrap px-6 py-4">
                            <Button 
                                style={`${data.isCompleted ? 'bg-green-500' : 'bg-yellow-500'} px-3 py-1 rounded-md text-slate-100 font-semibold`}
                                children={data.isCompleted ? 'Completed' : 'Pending'}
                                onClick={() => handleStatusChange(data.id, data.isCompleted)}
                                />
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                            <Button onClick={deleteTodo(data.id)}><IoTrashBin /></Button>
                        </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}

export default Table