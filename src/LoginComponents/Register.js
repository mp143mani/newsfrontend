import React, {   useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from 'axios'
import env from '../enviroinment'

export default function Register() {

  const navigate = useNavigate();
  let [name,setName]=useState("")
  let [channelName,setChannelName]=useState("")
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  

    const handleSubmit = async ()=>{
      if (name && channelName &&  email && password){
        let res = await axios.post(`${env.apiurl}/users/signup`,{
          name,
          channelName,
            email,
            password
        })
        if(res.data.statusCode===200)
        {
           sessionStorage.setItem('token',res.data.token)
           navigate('/RegisterReq') 
        }
      }
      else{ alert("Fill All INFORMATION")}
 
  };

  return (
    <Container>
      <h1>Create Profile</h1>
      <Form>
        <FormGroup>
          <Label for="Name"> Name</Label>
          <Input
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter  Name"
            type="text"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="channelName">Channel Name</Label>
          <Input
            onChange={(e)=>setChannelName(e.target.value)}
            placeholder="Enter Channel Name"
            type="Channel"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">email</Label>
          <Input
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter email"
            type="text"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">password</Label>
          <Input
            id="password"
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter password"
            type="text"
            required
          />
        </FormGroup>
        <Button onClick={()=>handleSubmit()}>Submit</Button>
      </Form>
    </Container>
  );
}
