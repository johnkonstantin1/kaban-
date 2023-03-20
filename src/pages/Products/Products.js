import React from "react";
import "./Products.css";
function Products() {
  return (
    <>
      <h1 className="main-article">
        Here we present to you some of our recent works:
        We are fast growing up team with a big ambitions, who want to become a main part of modeling industry.
      </h1 >
      <section className="hero-section">
        
        <div className="card-container">
          <div className="card">
            <div>
              <img className="card-background" src="/images/landing1.jpg" />
            </div>
            <div className="content">
              <div className="card-category">Cool design</div>
              <h1 className="card-desc">Great workout</h1>
            </div>
          </div>
          <div className="card">
            <div>
              <img className="card-background" src="/images/landin2.jpg" />
            </div>
            <div className="content">
              <div className="card-category">Fast time delivery</div>
              <h1 className="card-desc">Fast solutions</h1>
            </div>
          </div>
          <div className="card">
            <div>
              <img className="card-background" src="/images/landing3.jpg" />
            </div>
            <div className="content">
              <div className="card-category">Adaptive developing</div>
              <h1 className="card-desc">For every type of devise</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="hero-section-2">
        <div className="card-container">
          <div className="card">
            <div>
              <img className="card-background" src="/images/landing4.jpg" />
            </div>
            <div className="content">
              <div className="card-category">Great animations</div>
              <h1 className="card-desc">Creative designers</h1>
            </div>
          </div>
          <div className="card">
            <div>
              <img className="card-background" src="/images/landing5.jpg" />
            </div>
            <div className="content">
              <div className="card-category">Presentation</div>
              <h1 className="card-desc">Presentetion of project</h1>
            </div>
          </div>
          <div className="card">
            <div>
              <img className="card-background" src="/images/landing6.jpg" />
            </div>
            <div className="content">
              <div className="card-category">Every type</div>
              <h1 className="card-desc">Every type of design</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
