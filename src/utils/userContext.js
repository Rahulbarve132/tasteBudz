import { createContext } from "react";

const UserContext = createContext({
    name: "Dummy name",
    email : "dummy@gmail.com",
}) ;

export default UserContext ;      