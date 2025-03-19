import "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      {/* Hero Section (Carousel) */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/2.jpg" className="d-block w-100" alt="Slide 1" style={{ height: "500px", objectFit: "cover" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Explore Ramayan</h5>
              <p>Discover the life and teachings of Lord Rama.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/img/1.jpg" className="d-block w-100" alt="Slide 2" style={{ height: "500px", objectFit: "cover" }} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Explore Geeta</h5>
              <p>Learn the teachings of Lord Krishna in the Bhagavad Gita.</p>
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
        <p className="lead mb-5">We bring you the best insights and stories from the great epics of Ramayan and Geeta.</p>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {/* Ramayan Card */}
          <div className="col">
            <div className="card shadow-lg">
              <img src="/img/ramayan1.png" className="card-img-top" alt="Ramayan" style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">Ramayan</h5>
                <p className="card-text">Dive into the journey of Lord Rama and learn valuable lessons.</p>
                <a href="/ramayan" className="btn btn-outline-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Geeta Card */}
          <div className="col">
            <div className="card shadow-lg">
              <img src="/img/geeta2.png" className="card-img-top" alt="Geeta" style={{ height: "200px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">Geeta</h5>
                <p className="card-text">Understand the deep wisdom of the Bhagavad Gita.</p>
                <a href="/geeta" className="btn btn-outline-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
