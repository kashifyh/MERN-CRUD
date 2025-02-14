import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

//import UserModel from './models/Users';
function Users() {
    const[users, setUsers] = useState([]);
    //([{Name: 'kashif', Email : 'kashifyh@gmail.com', Age: 23}])
    /*app.get('/', (req, res)=>{
        UserModel.find({})
    })*/
    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(result=>setUsers(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete=(id)=>{
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res=>{console.log(res)
            window.location.reload()})
        .catch(errr => console.log(errr)) 
    }


  return (
    <div>
        <Link to="./create" className='btn btn-success'>Add +</Link>
        <Link to="./register" className='btn btn-success'>Register</Link>
        <table className='table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email </th>
                <th>Age</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user) => (
                      <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td><Link className='btn btn-success' to={`./update/${user._id}`}  >Edit</Link> 
                        <button className='btn btn-danger ' onClick={(e)=> handleDelete(user._id)}>Delete</button> </td>
                    </tr>
                ))
            }
        </tbody>

        </table></div>
  )
}

export default Users