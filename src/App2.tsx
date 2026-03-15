import React, { useEffect, useState } from 'react'
import { toDoStore } from './Zustand/ZustandLogik'
import {Button, Checkbox, Input, Modal} from "antd"
import {useFormik} from "formik"
import "./App.css"
import { Link } from 'react-router'
interface IUser {
  id: number,
  name:string,
  avatar:string,
  age:string,
  status:boolean,
  location:string
}
const App2 = () => {
  let {data, getUsers,deleteUser, changeStatus, addNewUser}:any = toDoStore()
  useEffect(() => {
    getUsers()
  },[])

  let [search, setSeach] = useState("")
  let [select, setSelect] = useState("")
  //addModal;
   const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

  const showModalAdd = () => {
    setIsModalOpenAdd(true);
  };

  const handleOkAdd = () => {
    setIsModalOpenAdd(false);
  };

  const handleCancelAdd = () => {
    setIsModalOpenAdd(false);
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

  let {handleSubmit, handleChange, setFieldValue, resetForm, values} = useFormik({
    initialValues:{
      name:"",
      age:"",
      avatar:"",
      location:"",
      status:false
    },
    onSubmit:(values) => {
addNewUser({id: Date.now(), ...values})
handleCancelAdd()
resetForm()
    }
  })
  return (
    <>
    <h1 className='text-[43px] mt-[10px] text-center'><span className='U'>U</span><span className='sers'>sers</span> L<span className='ist'>ist</span> :</h1>
    <div className='flex items-center justify-between px-[160px] mb-[20px] mt-[40px]'>
      <Input onChange={(e) => setSeach(e.target.value)} style={{width:"300px" , height:"40px"}}  placeholder='Search by Name...'/>
     <div className='flex gap-[24px]'>
      <select onChange={(e) => setSelect(e.target.value)} className='border-[1px] border-[lightgray] py-[8px] rounded-lg w-[100px]'>
        <option value="">All</option>
        <option value="true">Active</option>
        <option value="false">Inactive</option>
      </select>
      <Button type='primary' style={{width:"140px" ,fontWeight:"550", height:"40px"}} onClick={showModalAdd}>+ Add New</Button>
     </div>
    </div>
      <div className='flex flex-wrap justify-center w-[80%] gap-[30px] m-auto'>
{data.filter((user:IUser) => user.status.toString().includes(select)).filter((user:IUser) => user.name.toLowerCase().includes(search.toLowerCase())).map((user:IUser) => {
  return <div className='w-[300px] shadow-lg py-[16px] px-[11px] rounded-[30px]'>
   <img className='w-[300px] h-[170px]' style={{borderTopLeftRadius:"30px", borderTopRightRadius:"30px"}} src={user.avatar} alt="" />
    <h1 className='flex justify-between px-[10px] mt-[10px] text-[18px]'><b>Name : </b>{user.name.slice(0,15)}</h1>
    <h1 className='flex justify-between px-[10px] mt-[10px] text-[18px]'><b>Age : </b>{user.age}</h1>
    <h1 className='flex justify-between px-[10px] mt-[10px] text-[18px]'><b>Location : </b>{user.location.slice(0,20)}</h1>
    <h1 className='flex justify-between px-[10px] mt-[10px] text-[18px]'><b>Status : </b><span className={user.status ? "Active" : "Inactive"}>{user.status ? "Active" : "Inactive"}</span></h1>
 <div className='flex justify-evenly mt-[15px]'>
  <Link to={`/Info/${user.id}`}>
 <Button type='primary'>Info</Button>
  </Link>

 <Button danger onClick={() => deleteUser(user.id)}>Delete</Button>
 <Checkbox onChange={() => changeStatus(user.id, user)}/>
 </div>
  </div>
})}
      </div>
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpenAdd}
        onOk={handleOkAdd}
        onCancel={handleCancelAdd}
      >
       <form onSubmit={handleSubmit}>
        <Input name='name' value={values.name} onChange={handleChange}/>
        <Input name='avatar' value={values.avatar} onChange={handleChange}/>
        <Input name='age' value={values.age} onChange={handleChange}/>
        <Input name='location' value={values.location} onChange={handleChange}/>
        <select name="status" value={values.status.toString()} onChange={handleChange} id="">
          <option value="true">Active</option>
          <option value="false">Inactive</option>
        </select>
        <button type='submit'>Save</button>
       </form>
      </Modal>
    </>
  )
}

export default App2