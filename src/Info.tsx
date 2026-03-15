import React, { useState } from 'react'
import { Link, useParams } from 'react-router'
import { toDoStore } from './Zustand/ZustandLogik'
import "./App.css"
import { Button, Input, Modal } from 'antd'
import { useFormik } from 'formik'
const Info = () => {
    let {id} = useParams()
    let {data, editUser}:any = toDoStore()
    let user = data.find((user:any) => user.id == id)

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
      let {handleSubmit, handleChange, setFieldValue, resetForm, values} = useFormik({
          initialValues:{
            name:"",
            age:"",
            avatar:"",
            location:"",
            status:false
          },
          onSubmit:(values) => {
      editUser({id: idx, ...values})
      handleCancelEdit()
      resetForm()
      setIdx(null)
          }
        })

        let handleEdit = (user:any) => {
            setIdx(user.id)
            setFieldValue("avatar", user.avatar)
            setFieldValue("name", user.name)
            setFieldValue("age", user.age)
            setFieldValue("location", user.location)
            setFieldValue("status", user.status)
        }
  return (
    <>
    <div className='w-[400px] shadow-xl py-[30px] rounded-4xl m-auto mt-[10px]' style={{lineHeight:"40px", border:"1px solid lightgray"}}>
    <img className='w-[90%] h-[220px] relative bottom-[13px] flex m-auto' style={{borderTopLeftRadius:"25px", borderTopRightRadius:"25px"}} src={user?.avatar} alt="" />
    <h1 className='text-center text-[lightgray] font-[550] text-[30px] mb-[10px]'>Information :</h1>
               <h1 className='flex items-center justify-between px-[30px]'> <b className='text-[20px]'>Id :</b><span style={{fontFamily:"cursive"}}>{user?.id}</span> </h1>
               <h1 className='flex items-center justify-between px-[30px]'> <b className='text-[20px]'>Name :</b><span style={{fontFamily:"cursive"}}>{user.name.length >=25 ? user?.name.slice(0,25) + "..." : user.name}</span> </h1>
               <h1 className='flex items-center justify-between px-[30px]'> <b className='text-[20px]'>Age :</b><span style={{fontFamily:"cursive"}}>{user?.age}</span> </h1>
               <h1 className='flex items-center justify-between px-[30px]'> <b className='text-[20px]'>Location :</b><span style={{fontFamily:"cursive"}}>{user?.location}</span> </h1>
        <h2 className={user?.status ? "Active" : "Inactive"} style={{fontFamily:"cursive", marginTop:"13px", textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center", margin:"auto"}}>   <span >{user?.status ? "Active" : "Inactive"}</span></h2>
    <div className='flex m-auto justify-center items-center gap-[40px] mt-[20px]'>
        <Button onClick={() => {showModalEdit(), handleEdit(user)}} color='primary' variant='filled' style={{width:"230px", height:"36px", fontWeight:"660"}}>Edit</Button>
        <Link to={"/App2"}>
    <Button  color="danger" variant="solid"> Home</Button>
        </Link>
    </div> 
    </div>
     <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpenEdit}
        onOk={handleOkEdit}
        onCancel={handleCancelEdit}
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

export default Info