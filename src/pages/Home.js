import React from 'react';
import { Link } from 'react-router-dom';
import Certificates from '../components/Certificates';
import './Home.css';

const Home = () => {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <video
          className="hero-banner-video"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Hero banner"
        >
          <source src={`${process.env.PUBLIC_URL}/images/herobannervideo.mp4`} type="video/mp4" />
        </video>
      </section>

      {/* Key Highlights */}
      <section className="highlights">
        <div className="highlights-bg-pattern" aria-hidden="true" />
        <div className="container">
          <div className="highlights-header">
            <span className="highlights-badge">Our Advantages</span>
            <h2 className="highlights-title">Why Choose Exobase?</h2>
            <p className="highlights-subtitle">The export partner that delivers reliability, expertise, and results—every time.</p>
          </div>
          <div className="highlights-grid">
            <div className="highlight-card">
              <span className="highlight-number">01</span>
              <div className="highlight-icon">🌾</div>
              <h3>Deep Product Knowledge</h3>
              <p>
                We focus on a limited set of products—rice, cotton, maize, wheat, and sugar— 
                understanding them deeply rather than trading across everything.
              </p>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">02</span>
              <div className="highlight-icon">⚡</div>
              <h3>Operational Excellence</h3>
              <p>
                Decades of experience in handling raw materials, managing storage, 
                and meeting practical delivery requirements shape our approach.
              </p>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">03</span>
              <div className="highlight-icon">🤝</div>
              <h3>Trust Through Execution</h3>
              <p>
                We build trust through honest communication and careful execution, 
                not just assurances. Every shipment is planned with precision.
              </p>
            </div>
            <div className="highlight-card">
              <span className="highlight-number">04</span>
              <div className="highlight-icon">📋</div>
              <h3>Process-Driven</h3>
              <p>
                From sourcing to shipment coordination, we follow practical processes 
                that ensure consistency and reliability at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="products-preview">
        <div className="products-preview-pattern" aria-hidden="true" />
        <div className="container">
          <div className="products-preview-header">
            <span className="products-preview-badge">What We Export</span>
            <h2 className="products-preview-title">Our Core Products</h2>
            <p className="products-preview-subtitle">Commodities sourced with care, delivered with precision—from farm to global markets.</p>
          </div>
          <div className="products-grid">
            <div className="product-card product-card-featured">
              <div className="product-card-accent" />
              <div className="product-icon-wrap">
                <div className="product-icon-ring" />
                <div className="product-icon">
                  <img src={`${process.env.PUBLIC_URL}/images/product/rice.png`} alt="Rice" />
                </div>
              </div>
              <h3>Rice</h3>
              <p>Premium quality rice exports with strict quality control and reliable delivery schedules.</p>
              <span className="product-tag">Staple</span>
            </div>
            <div className="product-card">
              <div className="product-card-accent" />
              <div className="product-icon-wrap">
                <div className="product-icon-ring" />
                <div className="product-icon">
                  <img src={`${process.env.PUBLIC_URL}/images/product/cotton.png`} alt="Cotton" />
                </div>
              </div>
              <h3>Cotton</h3>
              <p>Expertise in cotton ginning and pressing, ensuring superior quality and consistency.</p>
              <span className="product-tag">Textile</span>
            </div>
            <div className="product-card">
              <div className="product-card-accent" />
              <div className="product-icon-wrap">
                <div className="product-icon-ring" />
                <div className="product-icon">
                  <img src={`${process.env.PUBLIC_URL}/images/product/maize.png`} alt="Maize" />
                </div>
              </div>
              <h3>Maize</h3>
              <p>High-grade maize supplied based on buyer requirements and market conditions.</p>
              <span className="product-tag">Grain</span>
            </div>
            <div className="product-card">
              <div className="product-card-accent" />
              <div className="product-icon-wrap">
                <div className="product-icon-ring" />
                <div className="product-icon">
                  <img src={`${process.env.PUBLIC_URL}/images/product/wheat.png`} alt="Wheat" />
                </div>
              </div>
              <h3>Wheat</h3>
              <p>Quality wheat exports meeting international standards and specifications.</p>
              <span className="product-tag">Grain</span>
            </div>
            <div className="product-card">
              <div className="product-card-accent" />
              <div className="product-icon-wrap">
                <div className="product-icon-ring" />
                <div className="product-icon">
                  <img src={`${process.env.PUBLIC_URL}/images/product/sugar.png`} alt="Sugar" />
                </div>
              </div>
              <h3>Sugar</h3>
              <p>Premium sugar exports with proper handling and storage management.</p>
              <span className="product-tag">Sweetener</span>
            </div>
          </div>
          <div className="products-preview-cta">
            <Link to="/products" className="btn btn-products">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <Certificates />

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Partner With Us?</h2>
            <p>
              Experience the difference that comes from working with an export house 
              that values preparation, execution, and long-term relationships.
            </p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
