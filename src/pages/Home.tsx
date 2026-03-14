import React, { useState } from 'react'
import { toDolist } from '../Zustand/ZustandLogik'
import { Button, Input, Modal, Select } from 'antd'
import { useFormik } from 'formik'

const Home = () => {
    let {data, deleteUser, addUser, editUser}:any = toDolist()

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
    const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  const showModalEdit = () => {
    setIsModalOpenEdit(true);
  };

  const handleOkEdit = () => {
    setIsModalOpenEdit(false);
  };

  const handleCancelEdit = () => {
    setIsModalOpenEdit(false);
  };

  let [idx, setIdx] = useState(null)

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
            handleCancelEdit()
        }
        else{
            addUser(values)
            resetForm()
            handleCancel()
        }
    }
  })

  let [seacrh, setSearch] = useState("")
  let [select, setSelect] = useState("")
  return (
    <>
    <div className='flex items-center justify-between px-[150px] mt-[40px]'>
        <Input onChange={(e) => setSearch(e.target.value) } style={{width:"270px"}}/>
        <div>

        <select onChange={(e) => setSelect(e.target.value)} >
            <option value="">All</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
        </select>
        <Button onClick={showModal} style={{width:"130px", height:"45px"}} type='primary'>+ Add New</Button>
        </div>
    </div>
        <div className='flex flex-wrap w-[80%] m-auto justify-center gap-[30px] mt-[30px] '>
            {data.filter((user) => user.name.toLowerCase().includes(seacrh.toLowerCase())).filter((user) => user.status.toString().includes(select)).map((user) => {
                return <div className='shadow-xl w-[300px] border-[1px] border-[lightgray] flex flex-col items-center justify-center h-[170px] rounded-3xl' key={user.id}>
                    <h1>{user.name}</h1>
                    <h1>{user.age}</h1>
                    {user.status && (
                        <p className='text-[green]'>Active</p>
                    )}
                    {!user.status && (
                        <p className='text-[red]'>Inactive</p>
                    )}
                    <div className='flex gap-[10px] mt-[10px]'>
                    <Button type='primary' onClick={() => {showModalEdit(), handleEdit(user)}}>Edit</Button>
                    <Button danger onClick={() => deleteUser(user.id)}>Delete</Button>
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
        footer={null}
      >
        <form onSubmit={handleSubmit}>
            <Input name='name' value={values.name} onChange={handleChange}/>
            <Input name='age' value={values.age} onChange={handleChange}/>
            <select name="status" onChange={handleChange} value={values.status.toString()} id="">
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </select>
            <button type='submit'>Save</button>
        </form>
      </Modal>
        <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpenEdit}
        onOk={handleOkEdit}
        onCancel={handleCancelEdit}
        footer={null}
      >
        <form onSubmit={handleSubmit}>
            <Input name='name' value={values.name} onChange={handleChange}/>
            <Input name='age' value={values.age} onChange={handleChange}/>
            <select name="status" onChange={handleChange} value={values.status.toString()} id="">
                <option value="true">Active</option>
                <option value="false">Inactive</option>
            </select>
            <button type='submit'>Save</button>
        </form>
      </Modal>
    </>
  )
}

export default Home