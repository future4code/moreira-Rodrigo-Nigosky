import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const AddPostsPage = () => {
    useProtectedPage()
    return (
        <div>
            <h1>ADD POSTS PAGE</h1>
        </div>
    )
}

export default AddPostsPage