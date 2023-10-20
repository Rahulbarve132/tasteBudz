import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile"
import Profile from "./ProfileClass";

const About = () =>{
return(
    <div>
        <h1> About us page</h1>
        <p>
        This is the namaste react live course and we love it</p>
        <ProfileFunctionalComponent name={"Rahul"}/>
        <Profile name={"Rahulclass"}/>
    </div>
)
}

export default About ; 

