import axios from 'axios'
import { types } from "../types/types";

export const dispatchLogin = () => {
    return {
        type: types.login
    }
}

export const fetchUser = async (token) => {
    const res = await axios.get('http://localhost:3005/api/info', {
        headers: {Authorization: token}
    })
    return res
}

export const dispatchGetUser = (res) => {
    return {
        type: types.getUser,
        payload: {
            user: res.data,
            isAdmin: res.data.role === 1 ? true : false
        }
    }
}