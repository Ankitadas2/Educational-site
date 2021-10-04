import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import edu from '../../images/edu.jpg'
import Details from '../Details/Details';
import './Home.css'
import emp from '../../images/employ.jpg'
import ins from '../../images/ins.jfif'
import learn from '../../images/learn.jfif'
import Instructor from '../Instructor/Instructor';

const Home = () => {
    const [detail,setDetail]=useState([])
    useEffect(()=>{
        fetch('./short.JSON')
        .then(res=>res.json())
        .then(data=>setDetail(data))
    },[])
    return (
        <div> 
            
<div>
        
        <img className="w-75 mt-4" src={edu} alt="" />
        
        <div>
            <h1 className="pt-5 text-primary fw-bold">About us</h1>
        <div className="row row-cols-1 row-cols-md-4 g-6 w-75 mt-5 ms-5">
  <div className="col ms-auto pe-4">
    <div className="card">
      <img  src={emp} className="card-img-top" alt="..."/>
      <div className="card-body bg-success">
        <h5 className="card-title text-light ">Our employee</h5>
        <p className="card-text text-dark fs-6 fw-bold" >Our employers so much supportive.They all work very effectivly</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={ins} className="card-img-top" alt="..."/>
      <div className="card-body bg-success">
        <h5 className="card-title text-light">Instrutors</h5>
        <p className="card-text fs-6 fw-bold">Our instructors always attentive their classes.They all work very effectivly</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={learn} className="card-img-top" alt="..."/>
      <div className="card-body bg-success pt-3 ">
        <h5 className="card-title text-light mb-2">Learning</h5>
        <p className="card-text fs-6 fw-bold">Learning process is beginner level.Students feel enjoy in this learning</p>
      </div>
    </div>
  </div>
  </div>
        </div>
        </div>
        <div>
    <Instructor></Instructor>
  </div>
  
        <h1 className="pt-5 text-warning fw-bold">Service Features</h1>
        <Container>
            <Row md={3} className="bg-success p-2 text-white bg-opacity-75">
{
    detail.map(details=><Details details={details}></Details>)
}
            </Row>
        </Container>
        </div>
    );
};

export default Home;