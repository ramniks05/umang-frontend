import React from 'react';
import Certificates from '../components/Certificates';
import './About.css';

/* Replace these paths with real photos when ready: warehouse, cotton yard, container loading, office/team */
const OPERATIONS_IMAGES = [
  { id: 'warehouse', title: 'Warehouse', alt: 'Our warehouse and storage operations', src: 'operations/warehouse.png', fallback: 'operations/placeholder.svg' },
  { id: 'cotton-yard', title: 'Cotton Yard', alt: 'Cotton yard and ginning operations', src: 'operations/cotton-yard.png', fallback: 'operations/placeholder.svg' },
  { id: 'container-loading', title: 'Container Loading', alt: 'Container loading and logistics', src: 'operations/container-loading.png', fallback: 'operations/placeholder.svg' },
  { id: 'office-team', title: 'Office & Team', alt: 'Our office and team', src: 'operations/office-team.png', fallback: 'operations/placeholder.svg' },
];

const About = () => {
  return (
    <main className="about">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="container">
          <h1 className="page-title">About Exobase Private Limited</h1>
          <p className="page-subtitle">
            Built on discipline, consistency, and an understanding of quality that comes only from working on the ground.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Foundation</h2>
              <p>
                We are an India-based export house operating in the agri and natural commodities sector, 
                built on businesses that deal with material, processes, and scale on a daily basis. Our 
                background lies in cotton ginning and pressing, along with shellac sourcing and processing—operations 
                that demand discipline, consistency, and an understanding of quality that comes only from working on the ground.
              </p>
              <p>
                These activities shaped the way we think long before we entered exports. Handling raw material, 
                managing storage, dealing with variations in quality, and meeting practical delivery requirements 
                have been part of our working environment for decades. This experience continues to guide how we 
                approach international trade today—with caution, preparation, and respect for execution.
              </p>
              <p>
                Over the years we have seen how raw material behaves in different seasons, how storage conditions 
                affect quality, and how quickly market conditions can change. That reality has taught us to plan 
                for execution, not just for the deal. The real test of an export house is what happens after the 
                contract is signed—in the warehouse, at the port, and in the documentation. We bring that 
                ground-level perspective to every conversation we have with buyers.
              </p>
            </div>
            <div className="story-image">
              {/* Replace foundation.jpg with real cotton yard / foundation photo when ready */}
              <img
                src={`${process.env.PUBLIC_URL}/images/operations/foundation.jpg`}
                alt="Our foundation in cotton and agri operations"
                className="story-image-photo"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `${process.env.PUBLIC_URL}/images/operations/placeholder.svg`;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Operations – real photos: warehouse, cotton yard, container loading, office/team */}
      <section className="operations-section" aria-label="Our operations">
        <div className="container">
          <h2 className="section-title">Our Operations</h2>
          <p className="operations-intro">
            From warehouse and cotton yard to container loading and our office—see where we work.
          </p>
          <div className="operations-grid">
            {OPERATIONS_IMAGES.map((item) => (
              <figure key={item.id} className="operations-photo">
                <div className="operations-photo-frame">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${item.src}`}
                    alt={item.alt}
                    className="operations-photo-img"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `${process.env.PUBLIC_URL}/images/${item.fallback}`;
                    }}
                  />
                </div>
                <figcaption className="operations-photo-caption">{item.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="our-approach">
        <div className="container">
          <h2 className="section-title">Our Approach</h2>
          <div className="approach-grid">
            <div className="approach-card">
              <h3>Focused Portfolio</h3>
              <p>
                Our export portfolio is led by rice and cotton, supported by select agricultural commodities 
                such as maize, wheat, and sugar—supplied according to buyer requirements and market conditions. 
                We keep our focus narrow by choice. Rather than trading across everything available, we 
                concentrate on a limited set of products: how they behave, how they are handled, and where 
                risks typically arise.
              </p>
            </div>
            <div className="approach-card">
              <h3>Commitment to Execution</h3>
              <p>
                What sets us apart is how we approach commitments. We do not treat exports as transactions 
                alone. Every shipment is planned with storage conditions, handling practices, documentation, 
                and realistic timelines in mind. Many issues in exports arise after confirmation, not during 
                negotiation. We focus on reducing those gaps through preparation rather than explanations.
              </p>
            </div>
            <div className="approach-card">
              <h3>Operational Excellence</h3>
              <p>
                At an operational level, we emphasise organisation and clarity. From sourcing and bulk storage 
                to shipment coordination, we follow processes that are practical, not theoretical. We pay 
                attention to details that are often overlooked—how material is stacked, how moisture and 
                handling are managed, and how information flows between parties—because these details 
                directly affect outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Relations */}
      <section className="buyer-relations">
        <div className="container">
          <div className="relations-content">
            <h2>Building Trust Through Honest Communication</h2>
            <p>
              Our interactions with buyers are straightforward. We believe trust is built through honest 
              communication, not assurances. We discuss specifications, timelines, and documentation early, 
              and align them with what we can actually deliver. Where inspections or certifications are 
              required, we coordinate with a clear view of both buyer expectations and on-ground realities.
            </p>
          </div>
        </div>
      </section>

      {/* Management & Future */}
      <section className="management-future">
        <div className="container">
          <div className="management-content">
            <div className="management-text">
              <h2>Management & Vision</h2>
              <p>
                The company is guided by a management team with experience in finance, compliance, operations, 
                and export coordination. Decisions are taken with a long-term view, balancing growth with 
                operational stability. A process-driven approach helps us stay consistent as volumes and 
                responsibilities grow.
              </p>
              <p>
                Looking ahead, we are not focused on rapid expansion for its own sake. We intend to grow 
                steadily—adding products, capabilities, and markets at a measured pace—while keeping the 
                operational discipline that defines how we work. Through careful execution, realistic 
                commitments, and long-term thinking, we aim to be an export house that buyers can rely on 
                year after year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <Certificates />

      {/* Values */}
      <section className="values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">✓</div>
              <h3>Discipline</h3>
              <p>Consistent processes and operational rigour in everything we do.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">✓</div>
              <h3>Quality</h3>
              <p>An understanding of quality that comes from hands-on experience.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">✓</div>
              <h3>Preparation</h3>
              <p>Closing gaps through careful planning and execution.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">✓</div>
              <h3>Honesty</h3>
              <p>Building trust through transparent communication.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">✓</div>
              <h3>Long-term Thinking</h3>
              <p>Balancing growth with operational stability.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">✓</div>
              <h3>Reliability</h3>
              <p>An export house that buyers can rely on, year after year.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
