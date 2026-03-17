import axios from "axios"
import {atom} from "jotai"
import {loadable} from "jotai/utils"
const url = "https://696e0194d7bacd2dd7155df5.mockapi.io/users"

//Trigger;
const trigger = atom(false)
const GetDataAtom = atom(async (get) => {
    get(trigger)
    try {
        let {data} = await axios.get(url)
        return data
    } catch (error) {
        console.error(error);
    }
})
export const DeleteData = atom(null, async (get, set, id:number) => {
try {
    await axios.delete(`${url}/${id}`)
    set(trigger, !get(trigger))
} catch (error) {
    console.error(error);
}
})
export const loadableAtom = loadable(GetDataAtom)