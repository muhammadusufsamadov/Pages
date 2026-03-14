import {atom} from "jotai"
export let cntAtom = atom(0)
export let AtomData = atom([
    {
        id: 1,
        name:"Muhammad",
        age:14,
        status:false
    },
    {
        id: 2,
        name:"Ali",
        age:22,
        status:true
    }
])
export let deleteUser = atom(null,(get, set, id) => {
    set(AtomData, get(AtomData).filter((user) => user.id != id ))
})
export let changeStatus = atom(null,(get, set, id) => {
    set(AtomData, get(AtomData).map((user) => user.id == id ? {...user, status:!user.status} : user))
})
export let addUser = atom(null, (get, set, newUser) => {
    set(AtomData, [...get(AtomData),newUser])
})

export let EditUser = atom(null, (get, set, obj) => {
    set(AtomData, get(AtomData).map((user) => user.id == obj.id ? obj : user) )
})