import React, { useEffect, useState } from 'react'
import { Button } from "reactstrap";
import { Navigate, useNavigate } from 'react-router-dom';
import axios from "axios";
import env from "../enviroinment";
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';
import { BsNewspaper } from "react-icons/bs";
// import { Divider } from '@mui/material';
import { Divider } from "@react-md/divider";




function WatchNews() {
const navigate = useNavigate();
let [data, setData] = useState([]);

let loadData = async () => {
    let res = await axios.get(`${env.apiurl}/addNews/getAllNews`);
    if (res.data.statusCode === 200 || 304) {
     
      setData(res.data.data);
    
    } else {
      alert("Something Went Wrong");
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    
        
    <Carousel>
      
      {data.map((e,i)=>{
      return (
        <Carousel.Item interval={5000} key={i}>
        <img
          className="d-block w-100"
          src="https://th.bing.com/th/id/OIP.vL-1Tn1mERcG-lUMK5iOoQHaEo?pid=ImgDet&rs=1"
          alt="First slide"
          
        />
        <Carousel.Caption>
        
       
        <div className="adjust set1"><h3><BsNewspaper /></h3>  <h2>{e.channelName}</h2></div>
        
        
          <h2  >{e.title}</h2>
          <p className="set">{e.description}</p>
          <Divider />
          <div className="row gx-5">
              <div className="col">Author : {e.name}</div> 
              <div className="col">Contact : {e.email}</div>
          </div>
       
        </Carousel.Caption>
      </Carousel.Item>
    )})}
      
   
    </Carousel>
  );

      
      
 
}

export default WatchNews;
