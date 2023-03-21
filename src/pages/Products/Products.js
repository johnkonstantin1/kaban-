import React from "react";
import "./Products.css";
function Products() {
  return (
    <>
      <h1 className="main-article">
      Check out our portfolio page to see examples of our visually stunning and effective websites. We take pride in delivering custom solutions that meet our clients' specific goals and accurately reflect their brand. Our expertise in creating websites that are optimized for search engines and provide a seamless user experience has also led to increased traffic and revenue for our clients. Contact us today to discuss how we can help grow your business with a website that truly stands out.
      </h1 >
      <section className="hero-section">
        
        <div className="card-container">
          <div className="card">
            <div>
              <img className="card-background" src="/images/landing1.jpg" />
            </div>
            <div className="content">
              <div className="card-category">Website Maintenance</div>
              <h1 className="card-desc">Comprehensive Website Maintenance Services to Keep Your Website Running Smoothly</h1>
            </div>
          </div>
          <div className="card">
            <div>
              <img className="card-background" src="/images/landin2.jpg" />
            </div>
            <div className="content">
              <div className="card-category">Mobile Development</div>
              <h1 className="card-desc">Custom Mobile Development Solutions to Reach Your Audience Anywhere</h1>
            </div>
          </div>
          <div className="card">
            <div>
              <img className="card-background" src="/images/landing3.jpg" />
            </div>
            <div className="content">
              <div className="card-category">Web Design</div>
              <h1 className="card-desc">Professional Web Design Services to Enhance Your Online Presence</h1>
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
              <div className="card-category">Web Development</div>
              <h1 className="card-desc">Custom Web Development Solutions to Meet the Specific Needs of Your Business</h1>
            </div>
          </div>
          <div className="card">
            <div>
              <img className="card-background" src="/images/landing5.jpg" />
            </div>
            <div className="content">
              <div className="card-category">E-commerce</div>
              <h1 className="card-desc">Effective E-commerce Solutions to Drive Sales and Increase Revenue</h1>
            </div>
          </div>
          <div className="card">
            <div>
              <img className="card-background" src="/images/landing6.jpg" />
            </div>
            <div className="content">
              <div className="card-category">Search Engine Optimization</div>
              <h1 className="card-desc">Optimized Content and SEO Strategies to Increase Your Website's Visibility</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
