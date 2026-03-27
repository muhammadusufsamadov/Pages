// import SalesChart from "./Component/Chart/Reachart";
// import { salesData } from "./Backend";
import { Modal } from "antd";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDispatch, useSelector } from "react-redux";
import type { IData } from "./todo";
import { useEffect, useState } from "react";
import {
  changeStatus,
  GetUser,
  urlImage,
  AddUser,
  EditUser,
  AddImage,
  DeleteImage,
  DeleteUser,
  InfoUser,
} from "./TodoRequest";
import "./App.css";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router";
const App = () => {
  let { data } = useSelector((state:any) => state.counter);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUser() as any);
  }, []);

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

  let { control, setValue, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      description: "",
      images: [],
    },
  });
  let [idx, setIdx] = useState(null);
  let onSubmit = (value: any) => {
    if (idx === null) {
      let addForm = new FormData();
      addForm.append("name", value.name);
      addForm.append("description", value.description);
      for (let i = 0; i < value.images.length; i++) {
        addForm.append("images", value.images[i]);
      }
      dispatch(AddUser(addForm));
      handleCancelAdd();
      reset();
    } else {
      dispatch(EditUser({ id: idx, ...value }));
      handleCancelEdit();
      reset();
    }
  };

  let handleEdit = (user: any) => {
    setValue("name", user.name);
    setValue("description", user.description);
    setIdx(user.id);
  };

  let handleImage = (event: any, id: number) => {
    let file = event.target.files[0];
    let formData = new FormData();
    formData.append("images", file);
    dispatch(AddImage({ id, formData }));
  };
  return (
    <>
      <div className="flex justify-between px-[130px] mb-[40px] mt-[40px]">
        <Input style={{ width: "300px" }} placeholder="Search by Name..." />
        <div>
          <Button variant="default" size="lg" onClick={showModalAdd}>
            + Add New
          </Button>
        </div>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead># ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Avatar</TableHead>
            <TableHead>About</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user: IData) => {
            return (
              <TableRow>
                <TableCell className="font-bold">{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>
                  {user.images?.map((img) => {
                    return (
                      <div className="flex flex-col items-center">
                        <img
                          className="w-[57px] h-[40px]"
                          src={`${urlImage}/${img.imageName}`}
                          alt=""
                        />
                        <div className="mt-[10px] mb-[10px]">
                          <Input
                            style={{ width: "80px" }}
                            type="file"
                            onChange={(event) => handleImage(event, user.id)}
                          />
                          <Button
                            variant="destructive"
                            onClick={() => dispatch(DeleteImage(img.id))}
                          >
                            Del
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </TableCell>
                <TableCell>{user.description.slice(0, 18)}</TableCell>
                <TableCell className="relative right-[20px]">
                  <span className={user.isCompleted ? "Active" : "Inactive"}>
                    {user.isCompleted ? "Active" : "Inactive"}
                  </span>
                </TableCell>
                <TableCell className="flex gap-[10px]">
                  <Link to={`/Info/${user.id}`}>
                  <Button variant="secondary" onClick={() => dispatch(InfoUser(user.id))}>Info</Button>
                  </Link>
                  <Button onClick={() => {showModalEdit(), handleEdit(user)}}>Edit</Button>
                  <Button variant="destructive" onClick={() => dispatch(DeleteUser(user.id))}>Delete</Button>
                  <Checkbox
                    onClick={() => dispatch(changeStatus({ id: user.id }))}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpenAdd}
        onOk={handleOkAdd}
        onCancel={handleCancelAdd}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Input placeholder="Name" {...field} />}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Input placeholder="Description" {...field} />
            )}
          />
          <Controller
            name="images"
            control={control}
            render={({ field }) => (
              <Input
                type="file"
                multiple
                onChange={(e) => field.onChange(e.target.files)}
              />
            )}
          />
          <button type="submit">Save</button>
        </form>
      </Modal>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpenEdit}
        onOk={handleOkEdit}
        onCancel={handleCancelEdit}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Input placeholder="Name" {...field} />}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Input placeholder="Description" {...field} />
            )}
          />
          <button type="submit">Save</button>
        </form>
      </Modal>
    </>
  );
};

export default App;
