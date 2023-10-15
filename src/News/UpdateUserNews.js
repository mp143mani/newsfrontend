import React, {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import env from "../enviroinment";


export default function UpdateUserNews() {
  const params = useParams();
  const navigate = useNavigate();
  let [name,setName]=useState("")
  let [channelName,setChannelName]=useState("")
  let [email,setEmail]=useState("")
  const [isDisabled, setIsDisabled] = useState(true);
  let [title,setTitle]=useState("")
  let [description,setDescription]=useState("")



  const getData = async () => {
    let res = await axios.get(`${env.apiurl}/addNews/edit-userNews/${params.id}`);
console.log(res.data.name)
      setName(res.data.name);
      setChannelName(res.data.channelName);
      setEmail(res.data.email);
      setTitle(res.data.title);
      setDescription(res.data.description);
   

  };

  
  const handleSubmit = async ()=>{
    let res = await axios.put(`${env.apiurl}/addNews/edit-userNews/${params.id}`,{
        name,
        channelName,
        title,
        email,
        description
  
    })
    // {fun.loadData}
    if(res.data.statusCode===200)
    {    
        navigate("/ManageNews");
    }

};


useEffect(()=>{getData()},[])

  return (
    <Container className="wallpaper1">
      <h1>Update News</h1>
      <Form>
        <FormGroup>
          <Label for="name">name</Label>
          <Input
            onChange={(e)=>setName(e.target.value)}
            value={name}
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
            value={channelName}
          />
        </FormGroup>
        <FormGroup>
          <Label for="title">title</Label>
          <Input
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Enter Title"
            type="title"
            value={title}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">email</Label>
          <Input
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter email"
            type="text"
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          {/* <Input
            onChange={(e)=>setDescription(e.target.value)}
            placeholder="Enter description"
            type="description"
          /> */}
 <textarea className="form-control" id="exampleFormControlTextarea1" onChange={(e)=>setDescription(e.target.value)}  value={description}></textarea>

        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
      
    </Container>
  );
}
