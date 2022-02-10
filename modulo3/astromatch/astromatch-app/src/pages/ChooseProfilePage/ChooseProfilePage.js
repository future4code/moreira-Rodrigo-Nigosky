import React from "react"
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import axios from "axios"
import { BASE_URL, headers } from "../../constants/urls"


class ChooseProfilePage extends React.Component{
    state = {
        profileList: []
    }

    componentDidMount(){
        this.getProfiles()
    } 

    getProfiles =() =>{
        axios.get(`${BASE_URL}/person`, headers) 
        .then((res) =>{
            this.setState({profileList: res.data.profile })
        })
        .catch((err) => {
            alert(err.response.data.message)
    })
}

    render(){
        const profileComponents = this.state.profileList.map((profile) =>{
            return <ProfileCard 
            key = {profile.id} 
            profile ={profile}  
        />
        })

        return(
            <div>
                {profileComponents}
            </div>    
        )
    }
}

export default ChooseProfilePage