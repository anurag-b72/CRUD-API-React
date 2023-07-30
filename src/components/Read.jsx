import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tableDark, setTableDark] = useState("");

  //   Function To Read Field 
  const getData = () => {
    axios
      .get("https://64799f8ea455e257fa6370c8.mockapi.io/crud-api-react")
      .then((res) => {
        // console.log(res.data[0].name);
        setData(res.data);
      });
  };

  useEffect(() => { // useEffect hook in this code snippet is used to trigger the getData function once, after the initial render of the component
    getData();
  }, []);

//   Function To Delete Field 
  function handleDelete(id) {
    axios.delete(`https://64799f8ea455e257fa6370c8.mockapi.io/crud-api-react/${id}`)
    .then(()=>{
        getData() // .then -> getData() is run to re-render getData() to display component after deleting any field.
    })
  }

  function setToLocalStorage(id, name, email){
    localStorage.setItem("id", id)
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
  }

  return (
    <>      
    <div className="form-check form-switch">Dark Mode
        <input type="checkbox" className="form-check-input" onClick={()=>{
            if(tableDark !== "table-dark") setTableDark("table-dark")
            else setTableDark("")
        }} />
    </div>
    <div className='d-flex justify-content-between m-4'>
      <h2>Read Operation</h2>
      <Link to="/"><button className='btn btn-info'>Create</button></Link>
    </div>
      <table className={`table ${tableDark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update"><button className="btn btn-success" onClick={()=> setToLocalStorage(eachData.id, eachData.name, eachData.email)}>Edit</button></Link>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={()=>handleDelete(eachData.id)}>Delete</button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
