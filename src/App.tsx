import { useEffect, useState } from "react"
import { todoStore } from "./Zustand/ZustandLogik"
import {Button, Input, Modal} from "antd"
import {useFormik} from "formik"
const App = () => {
  let {data, getData, deleteUser, addUser} = todoStore()
  useEffect(() => {
  getData()
  }, [])

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
  //EditModal;
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

  //formik;
  let {handleChange, handleSubmit, setFieldValue, values, resetForm} = useFormik({
    initialValues:{
      name:"",
      avatar:"",
      age:"",
      status:false,
      location:""
    },
    onSubmit:(values) => {     
        addUser({id: Date.now(), ...values})
        handleCancelAdd()
        resetForm()
    }
  })

  
  return (
    <>
    <div>
      <select className="w-[100px] py-[8px] px-[15px] border-[1px] rounded-lg border-[lightgray]" name="" id="">
        <option value="">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <Button type="primary" onClick={showModalAdd}>+ Add New</Button>
    </div>
    <div className="flex flex-wrap w-[80%] m-auto gap-[30px] mt-[50px]">
      {data.map((user) => {
        return <div className="shadow-xl border-[1px] flex flex-col items-center justify-center gap-[10px] text-start py-[20px] px-[10px] h-[320px] border-[lightgray]  rounded-4xl w-[300px]">
         <img className="w-[300px] h-[130px]" style={{borderTopRightRadius:"30px", borderTopLeftRadius:"30px"}} src={user.avatar} alt="" />
          <h1 className="flex justify-between"><b>Name : </b>{user.name.slice(0,10)}</h1>
          <h1 className="flex justify-between"><b>Age : </b>{user.age}</h1>
          <h1 className="flex justify-between"><b>Location : </b>{user.Location}</h1>
          {user.status && (
            <p className="text-[green]">Active</p>
          )}
          {!user.status && (
            <p className="text-[red]">Inactive</p>
          )}
          <Button danger onClick={() => deleteUser(user.id)}>Delete</Button>
        </div>
      })}
    </div>
     <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpenAdd}
        onOk={handleOkAdd}
        onCancel={handleCancelAdd}
        footer={null}
      >
       <form onSubmit={handleSubmit}>
        <Input placeholder="Name" onChange={handleChange}  style={{height:"45px", marginTop:"16px"}} name="name" value={values.name}/>
        <Input placeholder="URL_" onChange={handleChange}  style={{height:"45px", marginTop:"16px"}} name="avatar" value={values.avatar}/>
        <Input placeholder="Age" onChange={handleChange}  style={{height:"45px", marginTop:"16px"}} name="age" value={values.age}/>
        <Input placeholder="Location" onChange={handleChange}  style={{height:"45px", marginTop:"16px"}} name="location" value={values.location}/>
        <div className="flex justify-between">
        <select className="mt-[30px] border-[lightgray] border-[1px] p-[10px] rounded-lg" onChange={handleChange} name="status" value={values.status.toString()} id="">
        <option value="true">Active</option>
        <option value="false">Ianctive</option>
        </select>
        <button className="mt-[30px] border-[lightgray] border-[1px] p-[5px] px-[20px] rounded-lg" type="submit">Save</button>
        </div>
       </form>
      </Modal>
      </>
  )
}

export default App