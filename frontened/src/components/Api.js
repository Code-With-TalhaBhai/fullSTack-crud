import axios from "axios";

// const url = "http://localhost:3003/users";
const url = "http://localhost:8008/users";
// const url = "http://localhost:8008";
// const url = "/users";

export const getUsers = async()=>{
    return await axios.get(`${url}/all`);
}

export const editUsers = async(id)=>{
    return await axios.get(`${url}/${id}`);
}

export const updateUsers = async(id,user)=>{
    return await axios.put(`${url}/${id}`,user);
}

export const addUsers = async(user) =>{
    return await axios.post(`${url}/add`, user);
    // return await axios.post(url, user);
}

export const deleteUsers = async(id)=>{
    return await axios.delete(`${url}/${id}`);
}