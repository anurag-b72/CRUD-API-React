import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    // const header = { "Access-Control-Allow-Origin": "*" };

    const handleSubmit = (e) => {
        // console.log("Clicked");
        e.preventDefault();
        axios.post(
            "https://64799f8ea455e257fa6370c8.mockapi.io/crud-api-react", 
            {name: name, email: email},
            // header,
        )
        .then(()=>{
            navigate("/read")
        })
    }

  return (
    <>
    <div className='d-flex justify-content-between m-4'>
        <h2>Create</h2>
        <Link to="/read"><button className='btn btn-info'>Show Data</button></Link>
    </div>
        <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} value={name} />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)} value={email} />              
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
    </>
  )
}

export default Create