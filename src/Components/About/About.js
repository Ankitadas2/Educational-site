import React from 'react';
import emp from '../../images/employ.jpg'
import ins from '../../images/ins.jfif'
import learn from '../../images/learn.jfif'

const About = () => {
    return (
        <div>
          <h1 className="text-primary fs-1">About us</h1>
            <div className="row row-cols-1 row-cols-md-4 g-6 w-75 mt-5">
  <div className="col  ms-auto">
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
      <div className="card-body bg-success pt-4 ">
        <h5 className="card-title text-light mb-2">Learning</h5>
        <p className="card-text fs-6 fw-bold">Learning process is beginner level.Students feel enjoy in this learning</p>
      </div>
    </div>
  </div>
  
  
</div>
        </div>
    );
};

export default About;