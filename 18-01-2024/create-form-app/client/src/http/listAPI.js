import { $authHost } from "./index";

export const getUserList = async () => {
    const { data } = await $authHost.get('/api/userList');
    return data;
}



