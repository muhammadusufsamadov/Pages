import { useEffect, useState } from "react";
import { todoList } from "./store/todo";
import { Button, Checkbox, Input, Modal } from "antd";
import { useForm } from "react-hook-form";
import "./App.css";

export interface IUser {
  id: number;
  isCompleted: boolean;
  images: {
    imageName: string;
  }[];
  name: string;
  description: string;
}

const urlImage = "http://37.27.29.18:8001/images";

const App = () => {
  const { todos, getUsers, deleteUser, searchName, editUser, addNewUser } =
    todoList();

  useEffect(() => {
    getUsers();
  }, []);

  const { register, reset, handleSubmit, setValue } = useForm();

  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [idx, setIdx] = useState<number | null>(null);

  const Submit = async (value: any) => {
    const userData = {
      name: value.name,
      description: value.description,
      isCompleted: false,
      images: [],
    };

    if (idx) {
      await editUser(idx, userData);
      setIdx(null);
      setIsModalOpenEdit(false);
    } else {
      await addNewUser(userData);
      setIsModalOpenAdd(false);
    }

    reset();
  };

  const handleEdit = (user: IUser) => {
    setValue("name", user.name);
    setValue("description", user.description);
    setIdx(user.id);
    setIsModalOpenEdit(true);
  };

  return (
    <>
      <div className="flex justify-between px-[135px] mt-[20px]">
        <Input
          onChange={(e) => searchName(e.target.value)}
          style={{ width: "300px" }}
          placeholder="Search..."
        />

        <Button type="primary" onClick={() => setIsModalOpenAdd(true)}>
          + Add New
        </Button>
      </div>

      <div className="flex flex-wrap justify-center m-auto gap-[20px] w-[85%] mt-[30px]">
        {todos.map((user: IUser) => (
          <div
            key={user.id}
            className="border-[1px] border-[lightgray] shadow rounded-xl w-[300px] p-[15px]"
          >
            {user.images?.map((img, i) => (
              <img
                key={i}
                src={`${urlImage}/${img.imageName}`}
                className="w-full h-[150px]"
              />
            ))}

            <h3>{user.name}</h3>
            <p>{user.description}</p>

            <p>
              Status:{" "}
              {user.isCompleted ? (
                <span style={{ color: "green" }}>Active</span>
              ) : (
                <span style={{ color: "red" }}>Inactive</span>
              )}
            </p>

            <div className="flex gap-[5px] mt-[10px]">
              <Button onClick={() => handleEdit(user)}>Edit</Button>

              <Button danger onClick={() => deleteUser(user.id)}>
                Delete
              </Button>

              <Checkbox checked={user.isCompleted} />
            </div>
          </div>
        ))}
      </div>

      <Modal
        title="Add User"
        open={isModalOpenAdd}
        onCancel={() => setIsModalOpenAdd(false)}
        footer={null}
      >
        <form onSubmit={handleSubmit(Submit)}>
          <input
          id="inputsModal"
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <input
          id="inputsModal"
            placeholder="Description"
            {...register("description", { required: true })}
          />
          <button type="submit">Save</button>
        </form>
      </Modal>

      <Modal
        title="Edit User"
        open={isModalOpenEdit}
        onCancel={() => setIsModalOpenEdit(false)}
        footer={null}
      >
        <form onSubmit={handleSubmit(Submit)}>
          <input
            placeholder="Name"
            {...register("name", { required: true })}
          />
          <input
            placeholder="Description"
            {...register("description", { required: true })}
          />
          <button type="submit">Save</button>
        </form>
      </Modal>
    </>
  );
};

export default App;