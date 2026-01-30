import React from 'react';
import Certificates from '../components/Certificates';
import './About.css';

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
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span>🌾</span>
              </div>
            </div>
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
                such as maize, wheat, and sugar, supplied based on buyer requirements and market conditions. 
                We deliberately keep our focus narrow. Rather than trading across everything available, we 
                prefer to understand a limited set of products deeply—how they behave, how they are handled, 
                and where risks typically arise.
              </p>
            </div>
            <div className="approach-card">
              <h3>Commitment to Execution</h3>
              <p>
                What sets us apart is the way we approach commitments. We do not treat exports as transactions 
                alone. Every shipment is planned with an understanding of storage conditions, handling practices, 
                documentation requirements, and realistic timelines. Many issues in exports arise not during 
                negotiation, but after confirmation. Our emphasis is on reducing those gaps through preparation 
                rather than explanations.
              </p>
            </div>
            <div className="approach-card">
              <h3>Operational Excellence</h3>
              <p>
                At an operational level, we place strong importance on organisation and clarity. From sourcing 
                and bulk storage to shipment coordination, we follow processes that are practical rather than 
                theoretical. We pay attention to details that are often overlooked—how material is stacked, 
                how moisture and handling are managed, and how information flows between parties—because these 
                details directly affect outcomes.
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
              Our interactions with buyers are straightforward. We believe trust is built through honest communication, 
              not assurances. Specifications, timelines, and documentation are discussed early and aligned with what 
              can actually be executed. Where inspections or certifications are required, we coordinate them with a 
              clear understanding of both buyer expectations and on-ground realities.
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
                The company is guided by a management structure that brings together experience in finance, compliance, 
                operations, and export coordination. This allows decisions to be taken with a long-term perspective, 
                balancing growth with operational stability. Being process-driven helps us remain consistent, especially 
                as volumes and responsibilities increase.
              </p>
              <p>
                Looking ahead, our aim is not rapid expansion for its own sake. We intend to grow steadily—adding products, 
                capabilities, and markets at a measured pace—while preserving the operational discipline that defines how 
                we work. Through careful execution, realistic commitments, and long-term thinking, we seek to build an 
                export house that buyers can rely on year after year.
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
              <p>Consistent processes and operational rigor in everything we do.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">✓</div>
              <h3>Quality</h3>
              <p>Understanding quality that comes from hands-on experience.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">✓</div>
              <h3>Preparation</h3>
              <p>Reducing gaps through careful planning and execution.</p>
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
              <p>An export house buyers can rely on year after year.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
