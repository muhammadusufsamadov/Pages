import { useForm, Controller } from "react-hook-form";
import { Button, Input, Modal, Select } from "antd";
import { useEffect, useState } from "react";
import { todoList } from "./Zustand/todo";

type FormData = {
  name: string;
  status: string;
};

const App = () => {
  const { data, getUsers, deleteUser, editUser, addUser } = todoList();

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [idx, setIdx] = useState<number | null>(null);

  const { control, register, setValue, reset, handleSubmit } =
    useForm<FormData>();

  useEffect(() => {
    getUsers();
  }, []);

  const onSubmit = async (value: FormData) => {
    const user = {
      name: value.name,
      status: value.status === "true",
      avatar: "https://i.pravatar.cc/150",
    };

    if (idx !== null) {
      await editUser({ id: idx, ...user });
      setIsEditOpen(false);
    } else {
      await addUser(user);
      setIsAddOpen(false);
    }

    reset();
    setIdx(null);
  };

  const handleEdit = (user: any) => {
    setValue("name", user.name);
    setValue("status", user.status.toString());
    setIdx(user.id);
    setIsEditOpen(true);
  };

  return (
    <>
      <div className="flex justify-between p-5">
        <Input placeholder="Search..." style={{ width: 300 }} />
        <Button onClick={() => setIsAddOpen(true)}>+ Add</Button>
      </div>

      <div className="flex flex-wrap gap-5 justify-center">
        {data.map((user: any) => (
          <div key={user.id} className="border p-4 w-[300px]">
            <img
              src={user.avatar || "https://via.placeholder.com/150"}
              alt=""
              className="w-full h-[150px]"
            />

            <p>{user.name}</p>
            <p>{user.status ? "Active" : "Inactive"}</p>

            <div className="flex gap-2">
              <Button onClick={() => handleEdit(user)}>Edit</Button>
              <Button danger onClick={() => deleteUser(user.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* ADD */}
      <Modal
        title="Add User"
        open={isAddOpen}
        onOk={handleSubmit(onSubmit)}
        onCancel={() => setIsAddOpen(false)}
      >
        <Input
          placeholder="Name"
          {...register("name", { required: true })}
        />

        <Controller
          control={control}
          name="status"
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              placeholder="Status"
              options={[
                { value: "true", label: "Active" },
                { value: "false", label: "Inactive" },
              ]}
            />
          )}
        />
      </Modal>

      {/* EDIT */}
      <Modal
        title="Edit User"
        open={isEditOpen}
        onOk={handleSubmit(onSubmit)}
        onCancel={() => setIsEditOpen(false)}
      >
        <Input {...register("name", { required: true })} />

        <Controller
          control={control}
          name="status"
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: "true", label: "Active" },
                { value: "false", label: "Inactive" },
              ]}
            />
          )}
        />
      </Modal>
    </>
  );
};

export default App;