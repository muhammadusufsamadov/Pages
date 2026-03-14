import React, { useState } from 'react'
import { addUser, AtomData, changeStatus, deleteUser, EditUser } from './atom/counter'
import { useAtom } from 'jotai'
import { Button, Checkbox, Input, Modal } from 'antd'
import { useFormik } from 'formik'

const App = () => {
  let [data] = useAtom(AtomData)
  let [,deleteUsers] = useAtom(deleteUser)
  let [,statusChange] = useAtom(changeStatus)
  let [,addNewUser] = useAtom(addUser)
  let [,editUser] = useAtom(EditUser)
  let [idx, setIdx] = useState(null)

  //addModal;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //editModal;
  const [isModalOpenedit, setIsModalOpenedit] = useState(false);

  const showModaledit = () => {
    setIsModalOpenedit(true);
  };

  const handleOkedit = () => {
    setIsModalOpenedit(false);
  };

  const handleCanceledit = () => {
    setIsModalOpenedit(false);
  };


  //editLogik;
  let handleEdit = (user) => {
    setIdx(user.id)
    setFieldValue("name", user.name)
    setFieldValue("age", user.age)
    setFieldValue("status", user.status)
    
  }

  //formik;
  let {handleSubmit, handleChange, setFieldValue, resetForm, values} = useFormik({
    initialValues: {
      name:"",
      age:0,
      status:false
    },
    onSubmit: (values) => {
      if(idx) {
      editUser({id: idx, ...values})
      resetForm()
      setIdx(null)
    }
      else{
        addNewUser({id: Date.now(), ...values})
        resetForm()
        handleCancel()
      }
    }
  })
  return (
    <>
    <div>
      <Button type='primary' onClick={showModal}>+ New Add</Button>
    </div>
    <div className='flex gap-[30px] m-auto justify-center mt-[50px]'>
     {data.map((user) => {
       return <div className='shadow-lg w-[150px] h-[150px] flex flex-col items-center justify-center '>
        <h1>{user.name.slice(0,10) + "..."}</h1>
        <h1>{user.age}</h1>
        {user.status && (
          <p className='text-[green]'>Active</p>
        )}
        {!user.status && (
          <p className='text-[red]'>Inactive</p>
        )}
        <div className='flex gap-[20px] mt-[20px]'>
        <Button type='primary' onClick={() => {showModal(), handleEdit(user), handleCanceledit()}}>Edit</Button>
        <Checkbox onChange={() => statusChange(user.id)}/>
        <Button danger onClick={() => deleteUsers(user.id)}>Delete</Button>
        </div>
      </div>
     })}
    </div>
    <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form onSubmit={handleSubmit}>
          <Input  onChange={handleChange} name='name' value={values.name}/>
          <Input  onChange={handleChange} name='age' value={values.age}/>
          <select onChange={handleChange}  name="status" value={values.status.toString()} id="">
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
          <button type='submit'>Save</button>
        </form>
      </Modal>
    <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpenedit}
        onOk={handleOkedit}
        onCancel={handleCanceledit}
      >
        <form onSubmit={handleSubmit}>
          <Input  onChange={handleChange} name='name' value={values.name}/>
          <Input  onChange={handleChange} name='age' value={values.age}/>
          <select onChange={handleChange}  name="status" value={values.status.toString()} id="">
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
          <button type='submit'>Save</button>
        </form>
      </Modal>
     </>
  )
}

export default App