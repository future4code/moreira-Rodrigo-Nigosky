import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const PostDetailPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>POST DETAIL PAGE</h1>
        </div>
    )
}

export default PostDetailPage