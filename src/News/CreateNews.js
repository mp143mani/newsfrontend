import React, {   useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from 'axios'
import env from '../enviroinment'
import '../CSS/Login.css';



export default function CreateNews() {

  const navigate = useNavigate();
  let [name,setName]=useState("")
  let [channelName,setChannelName]=useState("")
  let [title,setTitle]=useState("")
  
  let [description,setDescription]=useState("")
  let [email,setEmail]=useState("")

    const handleSubmit = async ()=>{
        let res = await axios.post(`${env.apiurl}/addNews/addUserNews`,{
            name,
            channelName,
            title,
            description,
            email
      
        })
        // {fun.loadData}
        if(res.data.statusCode===200)
        {    
            navigate("/AddNews");
        }

  };

  return (
    <Container className="wallpaper1">
      <h1>Add News</h1>
      <Form>
        <FormGroup>
          <Label for="name">name</Label>
          <Input
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter  Name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="channelName">Channel Name</Label>
          <Input
            onChange={(e)=>setChannelName(e.target.value)}
            placeholder="Enter Channel Name"
            type="channelName"
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">title</Label>
          <Input
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Enter Title"
            type="title"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">email</Label>
          <Input
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter email"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          {/* <Input
            onChange={(e)=>setDescription(e.target.value)}
            placeholder="Enter description"
            type="description"
          /> */}
          <textarea className="form-control" id="exampleFormControlTextarea1" onChange={(e)=>setDescription(e.target.value)}></textarea>
        </FormGroup>
        <Button onClick={()=>handleSubmit()}>Submit</Button>
      </Form>
 
    </Container>
  );
}
