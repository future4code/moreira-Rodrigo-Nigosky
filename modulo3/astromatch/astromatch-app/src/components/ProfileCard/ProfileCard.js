import React from "react"
import { Card } from "../../pages/ChooseProfilePage/styled"

const ProfileCard = () =>{
    return (
        <Card>
            <h3>ProfileCard</h3>
            <p>descrição</p>
            <button>curtir</button>
            <button>nao curtiu</button>
        </Card>
    )
}

export default ProfileCard