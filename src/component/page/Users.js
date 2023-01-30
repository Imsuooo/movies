import { useState,useEffect } from "react";
import axios from "axios";
import Userlist from "./Userlist";
const Users = () => {
   const [users, setusers]=useState([
    ]); 
    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(Response=>{
            setusers(Response.data)

        })
    },[]);
    
    return (
        <>
            <h1 className="userh1">Users</h1>
            <Userlist users={users}/>
        </>
    );
};

export default Users;