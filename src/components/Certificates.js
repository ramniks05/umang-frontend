import React, { useState } from 'react';
import './Certificates.css';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Dummy certificate data - will be replaced with admin panel integration
  const certificates = [
    {
      id: 1,
      name: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
      category: 'Quality',
      image: '/images/certificates/iso-9001.jpg' // Placeholder path
    },
    {
      id: 2,
      name: 'FSSAI License',
      description: 'Food Safety and Standards Authority of India',
      category: 'Food Safety',
      image: '/images/certificates/fssai.jpg' // Placeholder path
    },
    {
      id: 3,
      name: 'Export License',
      description: 'Authorized Export House Certification',
      category: 'Export',
      image: '/images/certificates/export-license.jpg' // Placeholder path
    },
    {
      id: 4,
      name: 'APEDA Registration',
      description: 'Agricultural and Processed Food Products Export Development Authority',
      category: 'Export',
      image: '/images/certificates/apeda.jpg' // Placeholder path
    },
    {
      id: 5,
      name: 'GST Registration',
      description: 'Goods and Services Tax Registration',
      category: 'Compliance',
      image: '/images/certificates/gst.jpg' // Placeholder path
    },
    {
      id: 6,
      name: 'IEC Code',
      description: 'Import Export Code Certification',
      category: 'Export',
      image: '/images/certificates/iec.jpg' // Placeholder path
    }
  ];

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const closeModal = () => {
    setSelectedCertificate(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <section className="certificates">
        <div className="container">
          <div className="certificates-header">
            <h2 className="section-title">Our Certifications</h2>
            <p className="section-subtitle">
              We maintain the highest standards of quality, compliance, and operational excellence. 
              Our certifications reflect our commitment to meeting international standards and regulatory requirements.
            </p>
          </div>
          <div className="certificates-grid">
            {certificates.map((certificate) => (
              <div 
                key={certificate.id} 
                className="certificate-card"
                onClick={() => handleCertificateClick(certificate)}
              >
                <div className="certificate-icon">
                  <span>🏆</span>
                </div>
                <div className="certificate-content">
                  <h3>{certificate.name}</h3>
                  <p>{certificate.description}</p>
                  <span className="certificate-category">{certificate.category}</span>
                  <span className="view-certificate">
                    <span className="view-icon">👁</span>
                    <span className="view-text">Click to view</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div 
          className="certificate-modal" 
          onClick={handleBackdropClick}
        >
          <div className="certificate-modal-content">
            <button 
              className="certificate-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>
            <div className="certificate-modal-header">
              <h3>{selectedCertificate.name}</h3>
              <p>{selectedCertificate.description}</p>
            </div>
            <div className="certificate-modal-image">
              <img 
                src={selectedCertificate.image} 
                alt={selectedCertificate.name}
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect width="800" height="600" fill="%23f0f0f0"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="Arial" font-size="24" fill="%23999"%3ECertificate Image%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
            <p className="certificate-note">
              * Certificate image will be displayed here. Upload certificate images to /public/images/certificates/ folder.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;
