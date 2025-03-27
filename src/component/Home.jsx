import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "/src/imges/1.jpg";
import img2 from "/src/imges/2.jpg";
import img3 from "/src/imges/3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Home = () => {
  useEffect(() => {
    // Ensure Bootstrap JS is loaded
    import("bootstrap/dist/js/bootstrap.bundle.min").then(() => {
      console.log("Bootstrap Loaded");
    });
  }, []);

  return (
    <>
      {/* CSS Fixes for Carousel Overlapping Issue */}
      <style>
        {`
          .carousel-inner img {
            height: 500px;
            object-fit: cover;
          }
          .carousel-item {
            min-height: 500px;
          }
          .carousel {
            overflow: hidden;
          }
            .card {
    width: 100%;  /* Ensure the card takes up 100% width of its container */
    max-width: 300px;  /* Set a maximum width for the card */
    margin: 0 auto;  /* Center the cards within their column */
    height: 450px;  /* Set a fixed height for cards */
}

.card-img-top {
    height: 200px;  /* Fixed height for images */
    object-fit: cover;  /* Ensure images cover the area without stretching */
}

/* Adjust card body layout for consistent height */
.card-body {
    height: 200px;  /* Set a fixed height for the card body */
    display: flex;
    flex-direction: column;
    justify-content: space-between;  /* Ensure space between card title and button */
}

/* Optional: Set a specific size for buttons */
.card .btn {
    width: 100%;
}

        
        `}
      </style>

      {/* Hero Section (Carousel) */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Explore Ramayan</h5>
              <p>Discover the life and teachings of Lord Rama.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Explore Geeta</h5>
              <p>Learn the teachings of Lord Krishna in the Bhagavad Gita.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Explore Mahabharat</h5>
              <p>Uncover the wisdom from the epic battle of Kurukshetra.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Content Section */}
      <div className="container text-center py-5">
        <h2 className="mb-4">Discover Our Content</h2>
        <p className="lead mb-5">We bring you the best insights and stories from the great epics of Ramayan, Geeta, and Mahabharat.</p>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {/* Ramayan Card */}
          <div className="col">
            <div className="card shadow-lg">
              <img src="src/imges/ramayan1.png" className="card-img-top" alt="Ramayan" />
              <div className="card-body">
                <h5 className="card-title">Ramayan</h5>
                <p className="card-text">Dive into the journey of Lord Rama and learn valuable lessons about righteousness and duty.</p>
                <Link to="/ramayan" className="btn btn-outline-primary">Read More</Link>
              </div>
            </div>
          </div>

          {/* Geeta Card */}
          <div className="col">
            <div className="card shadow-lg">
              <img src="src/imges/geeta2.png" className="card-img-top" alt="Geeta" />
              <div className="card-body">
                <h5 className="card-title">Geeta</h5>
                <p className="card-text">Understand the deep wisdom of the Bhagavad Gita and how it relates to life's struggles and choices.</p>
                <Link to="/geeta" className="btn btn-outline-primary">Read More</Link>
              </div>
            </div>
          </div>

          {/* Mahabharat Card */}
          <div className="col">
            <div className="card shadow-lg">
              <img src="src/imges/mahabharat.png" className="card-img-top" alt="Mahabharat" />
              <div className="card-body">
                <h5 className="card-title">Mahabharat</h5>
                <p className="card-text">Unravel the story of the greatest epic battle and the moral lessons it teaches about life and war.</p>
                <Link to="/mahabharat" className="btn btn-outline-primary">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
