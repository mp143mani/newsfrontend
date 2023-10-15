import React, {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import env from "../enviroinment";


export default function UpdateNews() {
  const params = useParams();
  const navigate = useNavigate();
  let [name,setName]=useState("")
  let [role,setRole]=useState("")
  let [channelName,setChannelName]=useState("")
  let [email,setEmail]=useState("")
  const [isDisabled, setIsDisabled] = useState(true);


  useEffect(()=>{getData()},[])

  const getData = async () => {
    let res = await axios.get(`${env.apiurl}/users/edit-user/${params.id}`);
console.log(res)
      setName(res.data.name);
      setChannelName(res.data.channelName);
      setEmail(res.data.email);
      setRole(res.data.role);
   

  };

  
  const handleSubmit = async ()=>{
    let res = await axios.put(`${env.apiurl}/users/edit-user/${params.id}`,{
        name,
        channelName,
        role,
        email
  
    })
    // {fun.loadData}
    if(res.data.statusCode===200)
    {    
        navigate("/ManageNews");
    }

};

  return (
    <Container className="wallpaper1">
      <h1>Update User Details</h1>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            onChange={(e)=> {setName(e.target.value)}}
            value={name}
            placeholder="Enter name"
            type="text"
            disabled={isDisabled}
          />
        </FormGroup>
        <FormGroup>
          <Label for="channelName">channel Name</Label>
          <Input
            onChange={(e)=> {setChannelName(e.target.value)}}
            value={channelName}
            placeholder="Enter channel Name"
            type="channelName"
            disabled={isDisabled}
          />
        </FormGroup>
        <FormGroup>
          <Label for="role">Role</Label>
          <Input
            onChange={(e)=> {setRole(e.target.value)}}
            value={role}
            placeholder="Enter role"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            onChange={(e)=> {setEmail(e.target.value)}}
            value={email}
            placeholder="Enter mobileNumber"
            type="text"
            disabled={isDisabled}
          />
           </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
}
