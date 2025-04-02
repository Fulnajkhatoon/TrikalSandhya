import "react";
// import Navbar from "./Navbar"; // Import the Navbar component
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container about-section mt-5">
        <center><h2>Our Mission</h2></center>
        <p className="lead">
          We aim to preserve and share the sacred knowledge of Ramayan and
          Bhagavad Geeta through a modern digital platform.
        </p>
      </div>
      <div className="container team-section mt-5">
        <center><h2>Meet Our Team</h2></center>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card text-center">
              <img src="/img/user1.jpg" className="card-img-top" alt="Utsahi Chauhan" 
                style={{ width: "150px", height: "150px", objectFit: "cover", margin: "auto" }} />
              <div className="card-body">
                <h5 className="card-title">Utsahi Chauhan</h5>
                <p className="card-text">Founder & Developer</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <img src="/img/user1.jpg" className="card-img-top" alt="Priya Patel" 
                style={{ width: "150px", height: "150px", objectFit: "cover", margin: "auto" }} />
              <div className="card-body">
                <h5 className="card-title">Priya Patel</h5>
                <p className="card-text">Content Creator</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <img src="/img/user2.jpg" className="card-img-top" alt="Akshay Karan" 
                style={{ width: "150px", height: "150px", objectFit: "cover", margin: "auto" }} />
              <div className="card-body">
                <h5 className="card-title">Akshay Karan</h5>
                <p className="card-text">Graphic Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
