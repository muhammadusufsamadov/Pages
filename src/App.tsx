import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddNewUser, DeleteUser, GetUser } from "./redux/redux"
import {useFormik} from "formik"
import {Button, Input, Modal} from "antd"
interface IUser{
    name: string,
    avatar: string,
    age: string,
    status: boolean,
    location: string,
    isLoading: boolean,
    id: number
}
const App = () => {
  let {data, isLoading} = useSelector((store) => store.counter)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetUser())
  }, [])
  console.log(data);

  // addModal;
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
  // editModal;
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
  
  let {handleChange, handleSubmit, setFieldValue, resetForm, values} = useFormik({
    initialValues:{
      name:"",
      avatar:"",
      age:"",
      status:false,
      location:""
    },
    onSubmit:(values)=> {
      if(idx) {
       dispatch(<EditUser></EditUser>({id: idx, ...values}))
        handleCancelAdd()
        resetForm()
      }
      else{
        dispatch(AddNewUser(values))
        handleCancelAdd()
        resetForm()
      }
    }
  })
  let [idx, setIdx] = useState(null)
  let handleEdit = (user:IUser) => {
    setIdx(user.id)
    setFieldValue("name", user.name)
    setFieldValue("avatar", user.avatar)
    setFieldValue("age", user.age)
    setFieldValue("location", user.location)
    setFieldValue("status", user.status)
  }
  if(isLoading) {
 return <div>Loading........</div>
  }
  return (
  <>
      <Button type="primary" onClick={showModalAdd}>+ Add New</Button>
    <div className="grid grid-cols-3 w-[69%] gap-[20px] m-auto mt-[40px]">
      {data.map((user:IUser) => {
        return <div className="shadow-lg w-[280px] h-[180px] flex flex-col items-center justify-center gap-[20px] rounded-3xl">
          <h1>{user.name}</h1>
          <div className="flex gap-[10px]">
          <Button type="primary" onClick={() => {showModalEdit(), handleEdit(user)}}>Edit</Button>
          <Button danger onClick={() => dispatch(DeleteUser(user.id))}>Delete</Button>
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
        <Input name="name" value={values.name} onChange={handleChange} placeholder="Name"/>
        <Input name="avatar" value={values.avatar} onChange={handleChange} placeholder="Avatar"/>
        <Input name="age" value={values.age} onChange={handleChange} placeholder="Age"/>
        <Input name="location" value={values.location} onChange={handleChange} placeholder="Location"/>
      <select name="status" onChange={handleChange} value={values.status.toString()} id="">
        <option value="true">Active</option>
        <option value="false">Inactive</option>
      </select>
      <button type="submit">Save</button>
       </form>
      </Modal>
    <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpenEdit}
        onOk={handleOkEdit}
        onCancel={handleCancelEdit}
      >
       <form onSubmit={handleSubmit}>
        <Input name="name" value={values.name} onChange={handleChange} placeholder="Name"/>
        <Input name="avatar" value={values.avatar} onChange={handleChange} placeholder="Avatar"/>
        <Input name="age" value={values.age} onChange={handleChange} placeholder="Age"/>
        <Input name="location" value={values.location} onChange={handleChange} placeholder="Location"/>
      <select name="status" onChange={handleChange} value={values.status.toString()} id="">
        <option value="true">Active</option>
        <option value="false">Inactive</option>
      </select>
      <button type="submit">Save</button>
       </form>
      </Modal>
      </>
  )
}

export default App