import { useEffect, useState } from "react"
import {todoList} from "./store/todo"
import {Button, Checkbox, Input, Modal} from "antd"
import './App.css' 
export interface IUser{
    id: number,
    isCompleted: boolean,
    images:{
      imageName: string,
    }[],
    name:string,
    description: string
}
const urlImage = "http://37.27.29.18:8001/images"
const App = () => {
  let {todos, getUsers, deleteUser, searchName}:any = todoList()
  useEffect(() => {
    getUsers()
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

  return (
    <>
    <div className="flex justify-between px-[135px] mt-[20px]">
<Input onChange={(e) => searchName(e.target.value)} style={{width:"300px",padding:"6px" }} placeholder="Search by Name...                                      ✍"/>
    <div className="flex items-center gap-[20px]">
      <select name="" id="" className="border-[1px] border-[lightgray] px-[10px] py-[6px] rounded-lg " >
        <option value="">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <Button type="primary" style={{height:"36px", fontWeight:"550"}} onClick={showModalAdd}>+ Add New</Button>
    </div>
    </div>
      <div className="flex flex-wrap m-auto justify-center w-[80%] mt-[30px] gap-[30px]">
        {todos.map((user:IUser) => {
          return <div key={user.id} className="border-[1px] border-[lightgray] shadow-lg rounded-3xl w-[320px] px-[20px] py-[20px]">
        <div>
          {user.images.map((img) => {
            return <div>
              <img className="w-[100%] h-[180px] " src={`${urlImage}/${img.imageName}`} alt="" />
            </div>
          })}
        </div>
        <div className="mt-[20px] ">
          <h1 className="flex justify-between"><b>Name : </b>{user.name}</h1>
          <h1 className="flex justify-between mt-[10px]"><b>Description</b>{user.description.slice(0,16) + "..."}</h1>
       <h1 className="flex items-center justify-between mt-[10px]">
        <b>Status : </b>
        {user.isCompleted && (
          <p className="Active">Active</p>
        )}
        {!user.isCompleted && (
          <p className="Inactive">Inactive</p>
        )}
        </h1>
        </div>
        <div className="flex justify-center gap-[4px] mt-[20px]">
          <b>Actions : </b>
        <Button color="orange" variant="filled">Info</Button>
        <Button type="primary">Edit</Button>
        <Button color="danger" variant="solid" onClick={() => deleteUser(user.id)}>Delete</Button>
        <Checkbox/>
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
        footer={null}
      >
       <input type="text" name="" id="" />
      </Modal>
    </>
  )
}

export default App 