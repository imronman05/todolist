import React, { useEffect, useState } from 'react'
import Heading1 from '../Components/Heading/Heading1'
import TodoForm from '../Fragments/TodoForm'
import ListTodo from '../Fragments/ListTodo'
import ModalBox from '../Components/ModalBox/ModalBox'

const TodoList = () => {
  const [todo, setTodo] = useState([])
  const [modal, setModal] = useState(false)
  const [err, setErr] = useState(false)
  const [valueTodo, setValueTodo] = useState('')

  // useEffect untuk mengambil data dari localStorage
  useEffect(() => {
    const storedTodo = localStorage.getItem('todo');
    if (storedTodo) {
      try {
        setTodo(JSON.parse(storedTodo));
      } catch (error) {
        console.error('Error parsing todo data:', error);
        setErr(true)
      }
    }

  },[])

  // HandleChange untuk mendapatkan nilai dari input
  const handleChange = (e) =>{
    setValueTodo(e.target.value)
  }
  
  // Mendapatkan nilai dari input yang sudah diisi
  const handleInput = () =>{
    if(valueTodo !== ''){
      const todoList = {
        id: Date.now(),
        name: valueTodo,
        isCompleted: false,
      }

      localStorage.setItem('todo', JSON.stringify([...todo, todoList]));
      setTodo(prevTodo => [...prevTodo, todoList]);

      setValueTodo('')
    }else{
      setModal(true)
    }
  }

  // HandleStatus untuk merubah status dari list apakah sudah diselesaikan atau belum
  const updateStatus = (taskId, isCompleted) => {
    const updatedTodo = [...todo];

    const todoIndex = updatedTodo.findIndex(todoItem => todoItem.id === taskId);

    if (todoIndex !== -1) {
      updatedTodo[todoIndex] = { ...updatedTodo[todoIndex], isCompleted };

      setTodo(updatedTodo);
      localStorage.setItem('todo', JSON.stringify(updatedTodo));
    }
    setTodo(prevData => prevData.map(todoItem =>
      todoItem.id === taskId ? { ...todoItem, isCompleted } : todoItem
    ));
  }

  // HandleDelete Untuk Menghapus list berdasarkan ID
  const handleDelete = (id) => () =>{
    const deleteTodo = todo.filter(task => task.id !== id)
    setTodo(deleteTodo)
    localStorage.setItem('todo', JSON.stringify(deleteTodo));
}

  

  return (
    <div className='min-h-screen w-full flex items-center justify-center h-full '>
      {/* Error Handling */}
      {err && <ModalBox setModal={setErr} /> }
      <div className='w-full h-screen flex flex-col justify-center items-center md:w-auto md:min-w-96 md:h-[85vh] md:rounded-md shadow-xl py-2 px-5 bg-gradient-to-b from-cyan-500 to-blue-500'>
        <Heading1 
          title='TODO Apps' 
          style='text-center text-3xl text-white'
        />
        <div className='flex flex-col px-2 gap-3 mt-5'>
          <TodoForm handleInput={handleInput} handleChange={handleChange} valueTodo={valueTodo} setValueTodo={setValueTodo}/>
          <ListTodo todo={todo} setStatus={updateStatus} deleteTodo={handleDelete}/>
        </div>
      </div>
      {/* Modal ketika input list masih kosong */}
      {modal && <ModalBox setModal={setModal}/> }
    </div>
  )
}

export default TodoList