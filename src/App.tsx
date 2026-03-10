import React, { useState } from 'react'
import { useTodo } from './todo'
import { Button } from 'antd'

const App = () => {
  const {count,addNewUser,data,deleteUser, setCount, setCount2, setCount3, setCount4, setCount5} = useTodo()
  let [name, setName] = useState("")
  return (
    <div>
      <h1>{count}</h1>
      <Button onClick={() => setCount()}>+</Button>
      <Button onClick={() => setCount2()}>-</Button>
      <Button onClick={() => setCount3()}>*</Button>
      <Button onClick={() => setCount4()}>/</Button>
      <Button onClick={() => setCount5()}>Reset</Button>

<input type="text" onChange={(e) =>setName(e.target.value) } name="" id="" />
<Button type='primary' onClick={() => {addNewUser(name), setName("")}}>Add</Button>
      <section className='flex justify-center gap-[30px] text-center'>
        {data.map((e) => {
          return <div className='shadow-lg py-[30px] px-[20px] w-[200px]'>
            <h1>{e.name}</h1>
            {e.status && (
              <p className='text-[green]'>Active</p>
            )}
            {!e.status && (
              <p className='text-[red]'>Inactive</p>
            )}
          <Button danger onClick={() => deleteUser(e.id)}>Delete</Button>
          </div>
        })}
      </section>
    </div>
  )
}

export default App