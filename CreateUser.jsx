import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateUser() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()

  const navigate = useNavigate()

  const Submit= (e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/createUser", {name, email, age})
    .then(result=>console.log(result))
    .catch(err => console.log(err))
    navigate('/');
  }
  return (
      <div>
        <form onSubmit={Submit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" class="form-control" id="InputName" aria-describedby="emailHelp" placeholder="Enter Name" onChange={(e)=> setName(e.target.value)} />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email"  onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div class="form-group">
            <label for="InputPhone">Age</label>
            <input type="text" class="form-control" id="InputAge" aria-describedby="emailHelp" placeholder="Enter age"  onChange={(e)=> setAge(e.target.value)}/>
            <button type="submit" class="btn btn-primary btn-success">Submit</button>
          </div>
        </form>
    </div>
  )
}

export default CreateUser