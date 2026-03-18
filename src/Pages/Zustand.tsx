// import {useFormik} from "formik"
import { toDolist } from '../Zustand/todo'
let url = "https://696e0194d7bacd2dd7155df5.mockapi.io/users"
interface IUser {
  name:string,
  avatar:string,
  age:string,
  status:boolean,
  id:string
}
const Zustand = () => {
let {data}:any = toDolist()
  
//   let {handleChange, handleSubmit, setFieldValue, resetForm, values} = useFormik({
//   initialValues:{
//   name:"",
//   avatar:"",
//   age:"",
//   status:false,
// },
// onSubmit:(values) => {
  
// }
// })
  return (
    <div>
      {data.map((user:IUser) => {
        return <div>
          <h1>{user.name}</h1>
        </div>
      })}
    </div>
  )
}

export default Zustand