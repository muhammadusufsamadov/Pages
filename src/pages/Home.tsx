import React from 'react'
import { toDolist } from '../Zustand/ZustandLogik'

const Home = () => {
    let {data}:any = toDolist((state) => state.data)
  return (
    <>
        <div>
            {data.map((user) => {
                return <div key={user.id}>
                    <h1>{user.name}</h1>
                    <h1>{user.age}</h1>
                    {user.status && (
                        <p className='text-[green]'>Active</p>
                    )}
                    {!user.status && (
                        <p className='text-[red]'>Inactive</p>
                    )}
                </div>
            })}
        </div>
    </>
  )
}

export default Home