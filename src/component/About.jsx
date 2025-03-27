import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";



const teamMembers = [
  { name: "Akchhay Kumar", role: "Founder & Developer", imgSrc: "src/imges/user2.jpg" },
  { name: "Fulnaj Khatoon", role: "Content Creator", imgSrc: "src/imges/user1.jpg" },
  { name: "Utsahi Chahuhan", role: "Graphic Designer", imgSrc: "src/imges/user4.png" },
];

const TeamMember = ({ name, role, imgSrc }) => (
  <div className="col-md-4">
    <div className="team-card text-center p-3 shadow-sm rounded">
      <img src={imgSrc} alt={name} className="img-fluid rounded-circle mb-3" width="150" />
      <h5>{name}</h5>
      <p>{role}</p>
    </div>
  </div>
);

const AboutUs = () => {
  return (
    <>
    
      <div className="container about-section text-center mt-4">
        <h2>Our Mission</h2>
        <p className="lead">
          We aim to preserve and share the sacred knowledge of Ramayan and Bhagavad Geeta
          through a modern digital platform.
        </p>
      </div>

      <div className="container team-section text-center mt-5">
        <h2>Meet Our Team</h2>
        <div className="row mt-4">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
      
    </>
  );
};

export default AboutUs;
