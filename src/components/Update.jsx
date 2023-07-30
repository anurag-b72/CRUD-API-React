import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Update = () => {
    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    }, [])
    
    const navigate = useNavigate()
    //Function to Update field
    function handleUpdate(e){
        e.preventDefault();
        axios.put(`https://64799f8ea455e257fa6370c8.mockapi.io/crud-api-react/${id}`,
        {name: name, email: email})
        .then(()=>{
            navigate('/read')
        })
    }

  return (
    <>
        <h2>Update</h2>
        <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} value={name} />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)} value={email} />              
            </div>
            <button type="submit" className="btn btn-primary mx-2" onClick={handleUpdate}>Update</button>
            <Link to="/read"><button type="submit" className="btn btn-info mx-2" >Back</button></Link>
        </form>
    </>
  )
}

export default Update