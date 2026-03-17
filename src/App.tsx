import React from "react";
import { DeleteData, loadableAtom } from "./atom/todo";
import { useAtom } from "jotai";
import {Button} from "antd"
import "./App.css"
const App = () => {
  const [{ data, state, error }] = useAtom(loadableAtom);
  let [,deleteUser] = useAtom(DeleteData)
  if(state == "loading"){
    return <h1>Loading....</h1>
  }
  return (
    state == "hasData" && (
      <div className="body">
      <div className="flex w-[90%] flex-wrap m-auto justify-center gap-[20px]">
        {data.map((user) => {
          return (
            <div key={user.id} className="w-[350px] bg-[white] flex justify-center items-center shadow-lg border-[1px] border-[lightgray] h-[320px] rounded-4xl">
              <div className="div">
                <img className="w-[100%] h-[160px]" style={{borderTopRightRadius:"23px", borderTopLeftRadius:"23px", position:"relative", bottom:"5px"}} src={user.avatar} alt="" />
              <h1>{user.name}</h1>
              <h1>{user.age}</h1>
              <h1>{user.location}</h1>
              <Button color="danger" variant="solid" onClick={() => deleteUser(user.id)}>Delete</Button>
              </div>
            </div>
          );
        })}
      </div>
        </div>
    )
  );
};

export default App;
