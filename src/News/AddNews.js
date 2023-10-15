import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import env from "../enviroinment";
import Button from "react-bootstrap/Button";
import { FaTrashAlt, FaPlus, FaPen } from "react-icons/fa";


function AddNews() {
  let [data, setData] = useState([]);
  let navigate = useNavigate();
  let tableRef = useRef(null);
  const [searchText, setSearchText] =useState('')
  let token = localStorage.getItem("token"); 

  let loadData = async () => {
    let res = await axios.get(`${env.apiurl}/addNews/getUserNews`,
    
    {
      headers: {
        Authorization: `Bearer ${token}`,
      }});
    if (res.data.statusCode === 200 || 304) {
    
      setData(res.data.data);
      
    } else {
      alert(res.data.message);
      navigate("/go");
    }
  };

  let handleDelete = async (id) => {
    let res = await axios.delete(`${env.apiurl}/addNews/delete-userNews/${id}`);
    if (res.data.statusCode === 200) {
      loadData();
    } else {
      alert(res.data.message);
    }
  };

  let handleCreate = async () => {
    navigate("/CreateUserNews");
  };


  let handleUpdate = async (id) => {
    navigate("/UpdateUserNews/" + id);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div id="content2" >
      <div className="login-wrapper">
        <h1>User LIST</h1>
      </div>
      <nav className="navbar bg-light">
      <form className="container-fluid">
       <div className="input-group">
      <span className="input-group-text" id="basic-addon1">User Search Bar</span>
      <input type="text" className="form-control" onChange={(e)=>setSearchText(e.target.value)} placeholder="Search title " aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
  </form>
</nav>
      <div >
      <div className ="Content5">
      <Button color="danger" onClick={() => handleCreate()}>
                      <FaPlus />
                    </Button>
        </div>
        <div className ="Content4">
       
        <Table  striped responsive="md" bordered hover ref={tableRef}>
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Posted By</th>
              <th>Channel Name</th>
              <th>Title</th>
             
              <th>Description</th>
              <th>Email</th>
          
              <th>Created At</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((e)=>e.title.toLowerCase().includes(searchText.toLowerCase()) ).map((e, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.channelName}</td>
                  <td>{e.title}</td>
                
                  <td>{e.description}</td>
                  <td>{e.email}</td>
            
                  <td>{e.createdAt}</td>
                  <td>
                    <Button color="danger" onClick={() => handleDelete(e._id)}>
                      <FaTrashAlt />
                    </Button>
                  </td>
                  <td>
                    <Button color="primary" onClick={() => handleUpdate(e._id)}>
                      <FaPen />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        </div>
        <div className ="Content5">
        <Button variant="primary" onClick={() => loadData()}>
          Refresh
        </Button>
        </div>
      </div>
    </div>
  );
}

export default AddNews;
