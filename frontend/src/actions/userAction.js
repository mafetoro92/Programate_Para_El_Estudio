import axios from 'axios'
import { types } from "../types/types";

export const fetchAllUsers = async (token) => {
    const res = await axios.get('http://localhost:3001/api/user/all_info', {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetAllUsers = (res) => {
    return {
        type: types.getAllUsers,
        payload: res.data
    }
}