import { Button, Checkbox, Input, Modal, Select } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, changeStatus, addNewUser, editUser } from '../Redux/ReduxLogik'
import { useFormik } from 'formik'

export interface IData {
    id: number,
    name:string,
    age:number,
    status:boolean
}
const Redux = () => {
  let {data} = useSelector((state) => state.counter)
 let dispatch = useDispatch()

let [select, setSelect] = useState("")
let [search, setSearch] = useState("")
let [idx, setIdx] = useState<number | null>(null)

 //Formik;
 let {handleSubmit, handleChange, setFieldValue, values, resetForm} = useFormik({
  initialValues:{
    name:"",
    age:0,
    status:false
  },
  onSubmit: (values) => {
    if(idx) {
dispatch(editUser({id: idx, ...values}))
setIdx(null)
handleCancel()
    }
    else{
      dispatch(addNewUser({id: Date.now(), ...values}))
      handleCancel()
    }
    resetForm()
  }
 })

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

 const handleEdit = (user:IData) => {
  showModal()
  setIdx(user.id)
  setFieldValue("name", user.name)
  setFieldValue("age", user.age)
  setFieldValue("status", user.status)
 } 
  return (
    <div style={{backgroundColor:"lightgoldenrodyellow", width:"95%", margin:"auto", borderRadius:"30px", marginTop:"20px", paddingTop:"30px"}}>
    <div className='flex items-center justify-between px-[100px]'>

    <div>
      <p className='text-[40px]'>Users list :</p>
    </div>
    <div>
<select className='border-[1px] border-[lightgray] py-[9px] rounded-[10px] px-[20px]' onChange={(e) => setSelect(e.target.value)}>
  <option value="">All</option>
  <option value="true">Action</option>
  <option value="false">Inactive</option>
</select>
    <Button style={{height:"44px"}} type='primary' onClick={showModal}>Add New User</Button>
    </div>
    </div>
     <div className='flex max-w-[900px] flex-wrap m-auto justify-center gap-[20px] mt-[100px]'>
    {data.filter((user) => user.status.toString().includes(select)).filter((user) => user.name.toLowerCase().includes(search.toLowerCase())).map((user:IData) => {
      return <div className='border-[1px] bg-[white] rounded-xl border-[lightgray] w-[260px] px-[27px] shadow-lg py-[40px]'>
        <h1 className='flex items-center justify-between'><b>Name :</b>{user.name}</h1>
        <h1 className='flex items-center justify-between mt-[10px] mb-[10px]'><b>Age :</b>{user.age}</h1>
       {user.status && (
        <h1 className='text-[green]'>Active</h1>
       )}
       {!user.status && (
        <h1 className='text-[red]'>Inactive</h1>
       )}
        <div className='flex mt-[20px] gap-[10px] items-center '>
        <Button  danger onClick={() => dispatch(deleteUser(user.id))}>Delete</Button>
        <Button  type='dashed' onClick={() => handleEdit(user)}>Edit</Button>
<Checkbox onChange={() => dispatch(changeStatus(user.id))} />
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
        <Input value={values.name} name='name' onChange={handleChange} placeholder='Name...'/>
        <Input value={values.age} name='age' onChange={handleChange} placeholder='Age...'/>
        <select onChange={handleChange} name='status' value={values.status.toString()}>
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
        <button type='submit'>Save</button>
       </form>
      </Modal>
    </div>
  )
}

export default Redux