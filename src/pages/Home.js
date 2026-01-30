import React from 'react';
import { Link } from 'react-router-dom';
import Certificates from '../components/Certificates';
import './Home.css';

const Home = () => {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <img 
          src={`${process.env.PUBLIC_URL}/images/export-banner.png`}
          alt="Export Banner"
          className="hero-banner-image"
        />
        <div className="hero-content">
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="highlights">
        <div className="container">
          <h2 className="section-title">Why Choose Exobase?</h2>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">🌾</div>
              <h3>Deep Product Knowledge</h3>
              <p>
                We focus on a limited set of products—rice, cotton, maize, wheat, and sugar— 
                understanding them deeply rather than trading across everything.
              </p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">⚡</div>
              <h3>Operational Excellence</h3>
              <p>
                Decades of experience in handling raw materials, managing storage, 
                and meeting practical delivery requirements shape our approach.
              </p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🤝</div>
              <h3>Trust Through Execution</h3>
              <p>
                We build trust through honest communication and careful execution, 
                not just assurances. Every shipment is planned with precision.
              </p>
            </div>
            <div className="highlight-card">
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
        <div className="container">
          <h2 className="section-title">Our Core Products</h2>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-icon">
                <img src={`${process.env.PUBLIC_URL}/images/product/rice.png`} alt="Rice" />
              </div>
              <h3>Rice</h3>
              <p>Premium quality rice exports with strict quality control and reliable delivery schedules.</p>
            </div>
            <div className="product-card">
              <div className="product-icon">
                <img src={`${process.env.PUBLIC_URL}/images/product/cotton.png`} alt="Cotton" />
              </div>
              <h3>Cotton</h3>
              <p>Expertise in cotton ginning and pressing, ensuring superior quality and consistency.</p>
            </div>
            <div className="product-card">
              <div className="product-icon">
                <img src={`${process.env.PUBLIC_URL}/images/product/maize.png`} alt="Maize" />
              </div>
              <h3>Maize</h3>
              <p>High-grade maize supplied based on buyer requirements and market conditions.</p>
            </div>
            <div className="product-card">
              <div className="product-icon">
                <img src={`${process.env.PUBLIC_URL}/images/product/wheat.png`} alt="Wheat" />
              </div>
              <h3>Wheat</h3>
              <p>Quality wheat exports meeting international standards and specifications.</p>
            </div>
            <div className="product-card">
              <div className="product-icon">
                <img src={`${process.env.PUBLIC_URL}/images/product/sugar.png`} alt="Sugar" />
              </div>
              <h3>Sugar</h3>
              <p>Premium sugar exports with proper handling and storage management.</p>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link to="/products" className="btn btn-outline">
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
