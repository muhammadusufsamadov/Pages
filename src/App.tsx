import React from 'react'
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, editData, getData, type IData } from './reducer/todo'
import { Button, Input, Modal, Select } from 'antd'
import { useFormik } from 'formik'
import "./App.css"
const App = () => {
  const [idx,setIdx] = useState<string | null>(null)
  const {data} = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  useEffect(() =>
    {
     dispatch( getData())
    },[])
  const {values,handleChange,handleSubmit,setFieldValue,resetForm} = useFormik(
    {
      initialValues:
      {
        name:"",
        avatar:"",
        age:0,
        location:"",
        status:false
      },
      onSubmit:(value) =>
      {
        if(idx == null){
          dispatch(
            addData(
            {
              id: Date.now(),...value
            }))
            resetForm()
            handleCancel()
          }
          else
            {
             dispatch( editData(
                {
                 id: idx, ...value
                }))
                resetForm()
                handleCancelE()
            }
          }
    })
  
    function handleUser(user:IData)
    {
      setIdx(user.id)
      setFieldValue("name",user.name)
      setFieldValue("age",user.age)
      setFieldValue("location",user.location)
      setFieldValue("status",user.status)
    }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenE, setIsModalOpenE] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  
  const showModalE = () => {
    setIsModalOpenE(true);
  };

  const handleCancelE = () => {
    setIsModalOpenE(false);
  };

  return (
    <>
    <div>
      <Button type='primary' onClick={showModal}>Add New +</Button>
    </div>
    <div className='grid grid-cols-3 w-[76%] gap-[30px] m-auto'>

      {data.map((user:IData) => {
        return <div className='shadow-lg flex flex-col items-center justify-center w-[300px] h-[230px] rounded-3xl'>
          <h1 className='flex text-center flex m-auto'>{user.name}</h1>
          <h1 className='flex text-center flex m-auto'>{user.age}</h1>
          <h1 className='flex text-center flex m-auto'><span className={user.status ? "Active" : "Inactive"}>{user.status ? "Active" : "Inactive"}</span></h1>
         <div className='flex gap-[20px] pb-[10px]'>
       <Button onClick={() => dispatch(deleteData(user.id))}>delete</Button>
       <Button onClick={() => {showModal() , handleUser(user)}}>Edit</Button>
         </div>
        </div>
      })}
  
  <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpenE}
        onCancel={handleCancelE}
        >
        <form onSubmit={handleSubmit}>
          <Input name='name' value={values.name} onChange={handleChange}/>
          <Input name='age' value={values.age} onChange={handleChange}/>
          <Input name='location' value={values.location} onChange={handleChange}/>
          <button type='submit'>Save</button>
        </form>
      </Modal>
  <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onCancel={handleCancel}
        >
        <form onSubmit={handleSubmit}>
          <Input name='name' value={values.name} onChange={handleChange}/>
          <Input name='age' value={values.age} onChange={handleChange}/>
          <Input name='location' value={values.location} onChange={handleChange}/>
          <button type='submit'>Save</button>
        </form>
      </Modal>
    </div>
        </>
  )
}

export default App