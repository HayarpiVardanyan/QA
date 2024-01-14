import {$authHost} from "./index";

export const createForm = async (name, surname, education, work) => {
    const {data} = await $authHost.post('/api/form',{name, surname, education, work })
    return data
}