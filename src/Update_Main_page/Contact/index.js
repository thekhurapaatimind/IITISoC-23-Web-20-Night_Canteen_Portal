import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Header'
import './../Contact/Contact.css'
const Contact = () => {
  return (<>
  <Header />
  <section id='home' class="ftco-section contact-section bg-light">
  <div class="container">
    <div class="row d-flex contact-info">
      <div class="col-12">
        <h2 class="h4 font-weight-bold"><span>Contact Information&nbsp;&nbsp; </span></h2>
      </div>
      <div class="col-3 d-flex">
       <div class="box">
         <p><span>Address:</span> Central Dining Facility
Indian Institute of Technology Indore,
Khandwa Road, Simrol,
Indore 453552 </p>
       </div>
     </div>
     <div class="col-3 d-flex">
       <div class="box">
         <p><span>Phone :</span> <a href="+91 731-6603368">+ 91 731-6603368</a></p>
       </div>
     </div>
     <div class="col-3 d-flex">
       <div class="box">
         <p><span>Email :</span> <a href="mailto:">dining.committee.sg@iiti.ac.in</a></p>
       </div>
     </div>
     <div class="col-3 d-flex">
       <div class="box">
         <p><span>Website :</span> <a href="#">http://localhost:3000/</a></p>
       </div>
     </div>
   </div>
 </div>
</section>
    </>
  )
}

export default Contact