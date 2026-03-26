import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Checkbox, Input, Modal } from "antd";
import { Controller, useForm } from "react-hook-form";
import type { IData } from "./todo";
import "./App.css";
import { GetUser, DeleteUser, DeleteImage, AddUser, AddImage,EditUser, changeStatus } from "./TodoRequest";
const url = "http://37.27.29.18:8001/api/to-dos";
const urlImage = "http://37.27.29.18:8001/images";
const App = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUser() as any);
  }, []);

  let [idx, setIdx] = useState(null)

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
  //ImageModal;
  const [isModalOpenImage, setIsModalOpenImage] = useState(false);

  const showModalImage = () => {
    setIsModalOpenImage(true);
  };

  let [idxImage, setIdxImage] = useState(null)
  let [image, setImage] = useState(null)
  const handleOkImage = () => {
    let formImage = new FormData()
    formImage.append("images", image)
    dispatch(AddImage({id:idxImage, image:formImage}))
    setIsModalOpenImage(false);
  };

  const handleCancelImage = () => {
    setIsModalOpenImage(false);
  };

  let { data } = useSelector((state: IData) => state.counter);
  let { control, setValue, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      description: "",
      isCompleted: false,
      file: null,
    },
  });
  let onSubmit = (data) => {
    if(idx == null){
      let formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key])
      }
      dispatch(AddUser(formData));
      handleCancelAdd();
    }
    else{
      dispatch(EditUser({id: idx, NewUser:{...data, id: idx, isCompleted: false}}))
      handleCancelEdit()
      setIdx(null)
    }
  }
  let handleFileChange = (event) => {
    let files = event.target.files;
    console.log(files);
    setValue("images", files[0]);
  };

  let handleFileImageChange = (event) => {
    let files = event.target.files
    setImage(files[0])
  }

  let handleEdit = (user) => {
    setValue("name", user.name)
    setValue("description", user.description)
    setIdx(user.id)
  }
  return (
    <main>
      <div className="flex items-center justify-between  px-[100px] mt-[30px] mb-[40px]">
        <Input style={{ width: "300px" }} placeholder="Search by Name..." />
        <div className="flex items-center gap-[20px]">
          <select className="select" name="" id="">
            <option value="">All</option>
            <option value="true">Active</option>
            <option value="false">Inactive</option>
          </select>
          <Button onClick={showModalAdd} type="primary">
            + Add New
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap w-[88%] m-auto justify-center gap-[30px]">
        {data.map((user: IData) => {
          return (
            <div className="shadow-lg px-[15px] py-[15px] bg-[white] w-[340px]  rounded-3xl border-[1px] border-[lightgray]">
              <div>
                {user.images?.map((img) => {
                  return (
                    <div>
                      <img
                        className="w-[100%] h-[170px]"
                        src={`${urlImage}/${img.imageName}`}
                        alt=""
                      />
                      <div className="flex justify-center gap-[120px] mt-[10px]">
                        <Button
                          danger
                          onClick={() => dispatch(DeleteImage(img.id))}
                        >
                          Delete
                        </Button>
                        <Button onClick={() => {showModalImage(), setIdxImage(user.id)}} color="cyan" variant="solid">
                          + Add URL
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <h1 className=" flex justify-between px-[10px] mt-[10px]">
                <b>Name : </b>
                <span style={{ fontFamily: "cursive" }}>{user.name}</span>
              </h1>
              <h1 className=" flex justify-between px-[10px] mt-[10px]">
                <b>Description : </b>
                <span style={{ fontFamily: "cursive" }}>
                  {user.description.slice(0, 16) + "..."}
                </span>
              </h1>
              <h1 className=" flex justify-between px-[10px] mt-[10px]">
                <b>Status : </b>
                <span
                  style={{ fontFamily: "cursive" }}
                  className={user.isCompleted ? "Active" : "Inactive"}
                >
                  {user.isCompleted ? "Active" : "Inactive"}
                </span>
              </h1>
              <div className="flex justify-evenly mt-[20px]">
                <Button color="orange" variant="dashed">
                  Info
                </Button>
                <Button type="primary" onClick={() => {showModalEdit(), handleEdit(user)}}>Edit</Button>
                <Button
                  color="danger"
                  variant="solid"
                  onClick={() => dispatch(DeleteUser(user.id))}
                >
                  Delete
                </Button>
                <Checkbox onChange={() => dispatch(changeStatus({id: user.id}))} />
              </div>
            </div>
          );
        })}
      </div>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpenAdd}
        onOk={handleOkAdd}
        onCancel={handleCancelAdd}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                className="Controller"
                type="text"
                placeholder="Name"
                {...field}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Input
                className="Controller"
                type="text"
                placeholder="Description"
                {...field}
              />
            )}
          />
          <input
            type="file"
            className="Controller"
            onChange={handleFileChange}
          />
          
          <button className="Save" type="submit">
            Save
          </button>
        </form>
      </Modal>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpenEdit}
        onOk={handleOkEdit}
        onCancel={handleCancelEdit}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                className="Controller"
                type="text"
                placeholder="Name"
                {...field}
              />
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Input
                className="Controller"
                type="text"
                placeholder="Description"
                {...field}
              />
            )}
          />
          
          <button className="Save" type="submit">
            Save
          </button>
        </form>
      </Modal>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpenImage}
        onOk={handleOkImage}
        onCancel={handleCancelImage}
      >
          <input
            type="file"
            className="Controller"
            onChange={handleFileImageChange}
          />  
      </Modal>
    </main>
  );
};

export default App;
