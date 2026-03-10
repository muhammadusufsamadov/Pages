import React, { useState } from "react";
import { useTodo } from "./todo";
import "./App.css";
import { Button, Input, Modal } from "antd";
import { useFormik } from "formik";

interface IData {
  id: number;
  name: string;
  age: number;
  email: string;
  status: boolean;
}

const App = () => {
  const { data, deleteUser, addNewUser, editUser }: any = useTodo();

  // ADD STATE
  const [name, setName] = useState("");
  const [age, setAge] = useState<number>(0);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);

  const [idx, setIdx] = useState<number | null>(null);

  let [search, setSearch] = useState("")
  let [select, setSelect] = useState("")
  // ADD MODAL
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

  // EDIT MODAL
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  // FORMIK
  const { handleSubmit, handleChange, resetForm, values, setFieldValue } =
    useFormik({
      initialValues: {
        name: "",
        age: 0,
        email: "",
        status: false,
      },
      onSubmit: (value) => {
        editUser({ id: idx, ...value });
        resetForm();
        setIsModalOpenEdit(false);
      },
    });

  const handleEdit = (user: IData) => {
    setIdx(user.id);
    setFieldValue("name", user.name);
    setFieldValue("age", user.age);
    setFieldValue("email", user.email);
    setFieldValue("status", user.status);
    setIsModalOpenEdit(true);
  };

  return (
    <>
      <div className="flex px-[130px] my-[40px] mb-[30px] items-center justify-between">
       <Input onChange={(e) => setSearch(e.target.value)} style={{width:"280px" }} placeholder="Search by name..."/>
       <select onChange={(e) => setSelect(e.target.value)} className="border-[1px] border-[lightgray] px-[10px] py-[5px] rounded-lg" name="status" id="">
        <option value="">All</option>
        <option value="true">Active</option>
        <option value="false">Inactive</option>
       </select>
        <Button
        className=""
          onClick={() => setIsModalOpenAdd(true)}
          type="primary"
          style={{ width: "180px", height: "40px" }}
        >
          + Add New User
        </Button>
      </div>

      <table className="w-[80%] m-auto text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.filter((user) => user.status.toString().includes(select)).filter((user) => user.name.toLowerCase().includes(search.toLowerCase())).map((user: IData, i: number) => (
            <tr key={user.id}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>

              <td>{user.status ? "Active" : "Inactive"}</td>

              <td>
                <Button onClick={() => handleEdit(user)} type="primary">
                  Edit
                </Button>

                <Button danger onClick={() => deleteUser(user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        title="Add User"
        open={isModalOpenAdd}
        onCancel={() => setIsModalOpenAdd(false)}
        footer={null}
      >
        <Input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="Age"
          onChange={(e) => setAge(Number(e.target.value))}
        />

        <Input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <select
          onChange={(e) => setStatus(e.target.value === "active")}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <button
          onClick={() => {
            addNewUser(name, age, email, status);
            setIsModalOpenAdd(false);
          }}
        >
          Save
        </button>
      </Modal>

      <Modal
        title="Edit User"
        open={isModalOpenEdit}
        onCancel={() => setIsModalOpenEdit(false)}
        footer={null}
      >
        <form onSubmit={handleSubmit}>
          <Input
            name="name"
            value={values.name}
            onChange={handleChange}
          />

          <Input
            name="age"
            value={values.age}
            onChange={handleChange}
          />

          <Input
            name="email"
            value={values.email}
            onChange={handleChange}
          />

          <select
            value={values.status ? "active" : "inactive"}
            onChange={(e) =>
              setFieldValue("status", e.target.value === "active")
            }
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <button type="submit">Save</button>
        </form>
      </Modal>
    </>
  );
};

export default App;