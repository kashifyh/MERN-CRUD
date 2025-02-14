import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function UpdateUser() {
  const {id} = useParams()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:3001/getUser/'+id)
    .then( result=>{
      console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })   
    .catch(err => console.log(err))
},[])

const Update= (e)=>{
  e.preventDefault();
  axios.put("http://localhost:3001/updateUser/"+id, {name, email, age})
  .then(result=>{
    console.log(result)
    navigate('/')
  })
  .catch(err => console.log(err))  
}


  return (
    <form onSubmit={Update}>
    <div className="form-group">
      <label >Name</label>
      <input type="text" className="form-control"  placeholder="Enter Name" 
      value={name}  onChange={(e)=> setName(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label >Email address</label>
      <input type="email" className="form-control" placeholder="Enter email" 
      value={email}  onChange={(e)=> setEmail(e.target.value)} />
    </div>
    <div className="form-group">
      <label >Age</label>
      <input type="text" className="form-control" placeholder="Enter age" 
      value={age}  onChange={(e)=> setAge(e.target.value)} />
      <button type="submit" className="btn btn-primary btn-success">Submit</button>
    </div>
  </form>
  )
}

export default UpdateUser