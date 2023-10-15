import React from "react";
import { Button } from "reactstrap";
import { Navigate, useNavigate } from "react-router-dom";
import "../App.css";
import ModalNew from "./ModalNew";

function NewsFront() {
  const navigate = useNavigate();

  return (
    <div className=" text-center  newsImage">
      <h1 className="pad">Welcome To News BlogSpot</h1>
      <Button
        className="mx-4 set4"
        style={{ background: "green", width: "6rem" }}
        onClick={() => navigate("WatchNews")}
      >
        Watch News
      </Button>
      <Button
        className="mx-4 set4"
        style={{ background: "green", width: "6rem" }}
        onClick={() => navigate("go")}
      >
        Manage News
      </Button>
     <div className="mt-5"><ModalNew  /></div> 
   
    </div>
  );
}

export default NewsFront;
