import { useSelector } from "react-redux"
import { urlImage } from "./TodoRequest"

const Info = () => {
    let {Info} = useSelector((state:any) => state.counter )
  return (
    <div className="shadow-lg w-[400px] m-auto flex flex-col justify-center">
        {Info?.images?.map((img:any) => {
            return <div>
                <img className="w-[350px] h-[270px]" src={`${urlImage}/${img.imageName}`} alt="" />
            </div>
        })}
       <h1>{Info?.name}</h1> 
    </div>
  )
}

export default Info