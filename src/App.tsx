// import SalesChart from "./Component/Chart/Reachart";
// import { salesData } from "./Backend";
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
import { useEffect } from "react";
import { GetUser, urlImage } from "./TodoRequest";
import "./App.css"
import { Input } from "./components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./components/ui/select";
import { Button } from "./components/ui/button";

const App = () => {
  let { data } = useSelector((state) => state.counter);
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetUser() as any)
  })
  return (
    <>
    <div>
      <Input placeholder="Search by Name..."/>
      <div>
        <Button>Add New</Button>
      </div>
    </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#  ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Avatar</TableHead>
            <TableHead>About</TableHead>
            <TableHead >Status</TableHead>
            <TableHead >Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((user:IData) => {
            return <TableRow >
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>
                  {user.images?.map((img) => {
                    return <div>
                      <img className="w-[57px] h-[40px]" src={`${urlImage}/${img.imageName}`} alt="" />
                    </div>
                  })}
                </TableCell>
                <TableCell>{user.description.slice(0,18)}</TableCell>
                <TableCell className="relative right-[20px]"><span className={user.isCompleted ? "Active" : "Inactive"}>{user.isCompleted ? "Active" : "Inactive"}</span></TableCell>
              </TableRow>
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default App;
