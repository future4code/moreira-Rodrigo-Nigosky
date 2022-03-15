import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AddPostsPage from "../pages/AddPostsPage/AddPostsPage"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostDetailPage from "../pages/PostDetailPage/PostDetailPage"
import PostsListPage from "../pages/PostsListPage/PostsListPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Header from "../components/Header/Header"


const Routers = () => {
    return (
        <Router>
            <Header />
            <Routes>

            <Route path = "/login" element = {<LoginPage />} />

            <Route path = "/cadastro" element = {<SignUpPage />} />

            <Route path = "/" element = {<PostsListPage />} />

            <Route path = "/adicionar-postagem" element = {<AddPostsPage />} />

            <Route path = "/detalhes-postagem/:id" element = {<PostDetailPage />} />                        

            <Route path = "/erro" element = {<ErrorPage />} />

            </Routes>
        </Router>        
    );
};

export default Routers