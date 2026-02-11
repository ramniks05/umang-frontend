import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Certificates from '../components/Certificates';
import './Home.css';

const HERO_SLIDES = [
  { src: 'hero-slide-1.png', alt: 'Agricultural commodity handling and logistics' },
  { src: 'hero-slide-2.png', alt: 'Cotton and commodity export operations' },
];

/* Same slots as About: replace with real photos (warehouse, cotton yard, container loading, office/team) */
const GLIMPSES_IMAGES = [
  { id: 'warehouse', title: 'Warehouse', alt: 'Our warehouse and storage operations', src: 'operations/warehouse.png', fallback: 'operations/placeholder.svg' },
  { id: 'cotton-yard', title: 'Cotton Yard', alt: 'Cotton yard and ginning operations', src: 'operations/cotton-yard.png', fallback: 'operations/placeholder.svg' },
  { id: 'container-loading', title: 'Container Loading', alt: 'Container loading and logistics', src: 'operations/container-loading.png', fallback: 'operations/placeholder.svg' },
  { id: 'office-team', title: 'Office & Team', alt: 'Our office and team', src: 'operations/office-team.png', fallback: 'operations/placeholder.svg' },
];

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="home">
      {/* Hero Section - Image slider */}
      <section className="hero" aria-label="Hero banner">
        <div className="hero-slider">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={slide.src}
              className={`hero-slide ${index === activeSlide ? 'hero-slide-active' : ''}`}
              aria-hidden={index !== activeSlide}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/${slide.src}`}
                alt={slide.alt}
                className="hero-slide-image"
              />
            </div>
          ))}
        </div>
        <div className="hero-slider-dots" aria-label="Slide navigation">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`hero-slider-dot ${index === activeSlide ? 'hero-slider-dot-active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeSlide ? 'true' : undefined}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
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
            <div className="highlight-card">
              <div className="highlight-icon">🏭</div>
              <h3>Ground-Level Experience</h3>
              <p>
                Ground-level experience in cotton and agri commodities with decades of 
                hands-on operational knowledge—from field to port.
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

      {/* Glimpses – image slots for real warehouse, cotton yard, container loading, office/team */}
      <section className="glimpses-section" aria-label="Glimpses of our operations">
        <div className="container">
          <h2 className="section-title">Glimpses of Our Operations</h2>
          <p className="glimpses-intro">
            From warehouse and yard to loading and office—see where we work.
          </p>
          <div className="glimpses-grid">
            {GLIMPSES_IMAGES.map((item) => (
              <figure key={item.id} className="glimpses-photo">
                <div className="glimpses-photo-frame">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${item.src}`}
                    alt={item.alt}
                    className="glimpses-photo-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `${process.env.PUBLIC_URL}/images/${item.fallback}`;
                    }}
                  />
                </div>
                <figcaption className="glimpses-photo-caption">{item.title}</figcaption>
              </figure>
            ))}
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
