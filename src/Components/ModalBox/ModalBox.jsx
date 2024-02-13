import React from 'react'
import Button from '../Button/Button'
import { IoMdClose } from "react-icons/io";
import { PiWarningCircleLight } from "react-icons/pi";
import Heading1 from '../Heading/Heading1';


const ModalBox = (props) => {
    const {setModal } = props

    const handleClose  = () =>{
        setModal(false)
    }

  return (
    <div className='w-screen h-screen absolute'>
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-screen max-h-full bg-black/50">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <Button 
                    style="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                    onClick={handleClose}
                    children={<IoMdClose className='text-xl'/>}
                    />
                <div className="p-4 md:p-5 text-center">
                    <PiWarningCircleLight className='mx-auto mb-4 text-gray-400 dark:text-gray-200 text-7xl'/>
                    <Heading1 
                        title='Enter what you want to do!!!'
                        style="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400" 
                        />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalBox