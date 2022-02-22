import axios from "axios";
import {BASE_URL} from "../constants/urls"
import { goToPostsListPage } from "../routes/coordinator";

export const login = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/users/login`, body)
    .then((res)=> {
        localStorage.setItem("token", res.data.token)
        clear()
        goToPostsListPage(navigate)
    })
    .catch((err)=>alert("Erro no Login"))
}

export const signUp = (body, clear, navigate) => {
    axios.post(`${BASE_URL}/user/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToPostsListPage(navigate)
        })
        .catch((err) => alert("Erro no cadastro"))
}