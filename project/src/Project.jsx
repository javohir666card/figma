import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import accorditionImage from "./Images/accorditionImage.png";
import "./Project.css";
function Project() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="accordition-header" style={{color:"orange"}}>Название проекта</Accordion.Header>
        <Accordion.Body className="accorditionBody">
     <div className="titleAndImgSection">
      <h1>1. Споры с работодателем</h1>
     <img src={accorditionImage} alt="" />
     </div>
       <div className="textSection">
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor quam dolor, sed tempus placerat. Cursus aliquet ullamcorper enim dolor faucibus faucibus. Praesent ut duis suspendisse at velit, tellus. Donec egestas interdum venenatis quis. Quam commodo ac tellus augue in quam eleifend elit. Id auctor leo commodo nibh vitae. Massa sed odio diam ipsum vel. Sed cras tellus id fames pellentesque. Sed eu magna eget gravida sit. Urna lectus vulputate egestas aliquam ornare etiam nec orci. Sed amet vitae id vitae. Ipsum, at est purus dui et enim morbi. Nulla tempor massa et suscipit ac tempus lobortis. Tellus interdum eleifend a risus amet vulputate vitae arcu erat. Orci quam neque  </p>
       </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header className="accordition-header">Название проекта </Accordion.Header>
        <Accordion.Body className="accorditionBody">
        <div className="titleAndImgSection">
      <h1>1. Споры с работодателем</h1>
     <img src={accorditionImage} alt="" />
     </div>
       <div className="textSection">
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor quam dolor, sed tempus placerat. Cursus aliquet ullamcorper enim dolor faucibus faucibus. Praesent ut duis suspendisse at velit, tellus. Donec egestas interdum venenatis quis. Quam commodo ac tellus augue in quam eleifend elit. Id auctor leo commodo nibh vitae. Massa sed odio diam ipsum vel. Sed cras tellus id fames pellentesque. Sed eu magna eget gravida sit. Urna lectus vulputate egestas aliquam ornare etiam nec orci. Sed amet vitae id vitae. Ipsum, at est purus dui et enim morbi. Nulla tempor massa et suscipit ac tempus lobortis. Tellus interdum eleifend a risus amet vulputate vitae arcu erat. Orci quam neque neque laoreet sed.  </p>
       </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Project;