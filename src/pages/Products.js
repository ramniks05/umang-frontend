import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Rice',
      image: '/images/product/rice.png',
      description: 'Premium quality rice exports with strict quality control and reliable delivery schedules. We handle various varieties including Basmati, Non-Basmati, and specialty rice.',
      features: [
        'Strict quality control measures',
        'Multiple varieties available',
        'Reliable delivery schedules',
        'Proper storage and handling'
      ]
    },
    {
      id: 2,
      name: 'Cotton',
      image: '/images/product/cotton.png',
      description: 'Expertise in cotton ginning and pressing, ensuring superior quality and consistency. Our background in cotton processing gives us deep understanding of the product.',
      features: [
        'Ginning and pressing expertise',
        'Superior quality standards',
        'Consistent supply',
        'Decades of experience'
      ]
    },
    {
      id: 3,
      name: 'Maize',
      image: '/images/product/maize.png',
      description: 'High-grade maize supplied based on buyer requirements and market conditions. We ensure proper handling and storage to maintain quality.',
      features: [
        'High-grade quality',
        'Buyer-specific requirements',
        'Proper storage management',
        'Market-responsive supply'
      ]
    },
    {
      id: 4,
      name: 'Wheat',
      image: '/images/product/wheat.png',
      description: 'Quality wheat exports meeting international standards and specifications. We handle sourcing, storage, and shipment with precision.',
      features: [
        'International standards',
        'Quality specifications',
        'Precise handling',
        'Reliable sourcing'
      ]
    },
    {
      id: 5,
      name: 'Sugar',
      image: '/images/product/sugar.png',
      description: 'Premium sugar exports with proper handling and storage management. We ensure quality is maintained throughout the supply chain.',
      features: [
        'Premium quality',
        'Proper storage management',
        'Quality maintenance',
        'Supply chain expertise'
      ]
    }
  ];

  return (
    <main className="products">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <h1 className="page-title">Our Products</h1>
          <p className="page-subtitle">
            We focus on a limited set of products deeply—understanding how they behave, 
            how they are handled, and where risks typically arise.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-list">
            {products.map((product) => (
              <div key={product.id} className="product-detail-card">
                <div className="product-header">
                  <div className="product-icon-large">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <h2>{product.name}</h2>
                </div>
                <p className="product-description">{product.description}</p>
                <div className="product-features">
                  <h3>Key Features:</h3>
                  <ul>
                    {product.features.map((feature, index) => (
                      <li key={index}>
                        <span className="feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="product-enquiry-actions">
                  <a
                    href={`https://wa.me/919922833338?text=${encodeURIComponent(
                      `Hello, I would like to enquire about ${product.name} from Exobase Private Limited.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    WhatsApp Enquiry
                  </a>
                  <Link
                    to={`/contact?product=${encodeURIComponent(product.name)}`}
                    className="btn btn-outline-enquiry"
                  >
                    Enquiry via Form
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="products-approach">
        <div className="container">
          <div className="approach-content">
            <h2>Our Product Philosophy</h2>
            <p>
              Rather than trading across everything available, we prefer to understand a limited set of 
              products deeply—how they behave, how they are handled, and where risks typically arise. 
              This focused approach allows us to deliver consistent quality and reliable service.
            </p>
            <div className="philosophy-points">
              <div className="philosophy-point">
                <h3>Deep Understanding</h3>
                <p>We know our products inside and out—from sourcing to shipment.</p>
              </div>
              <div className="philosophy-point">
                <h3>Quality Focus</h3>
                <p>Every product meets strict quality standards through our proven processes.</p>
              </div>
              <div className="philosophy-point">
                <h3>Reliable Supply</h3>
                <p>Consistent availability based on market conditions and buyer requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Interested in Our Products?</h2>
            <p>
              Contact us to discuss your requirements, specifications, and delivery timelines. 
              We're here to provide honest communication and reliable execution.
            </p>
            <a href="/contact" className="btn btn-primary btn-large">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
