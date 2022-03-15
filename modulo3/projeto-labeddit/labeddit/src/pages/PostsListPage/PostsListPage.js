import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const PostsListPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>POSTS LIST PAGE</h1>            
        </div>
    )
}

export default PostsListPage