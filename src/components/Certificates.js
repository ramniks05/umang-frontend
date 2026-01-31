import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Certificates.css';

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      id: 1,
      name: 'Udyam Registration',
      description: 'MSME Registration – Ministry of Micro, Small and Medium Enterprises, Government of India',
      category: 'MSME',
      image: `${process.env.PUBLIC_URL}/images/certificates/udyam.png`
    },
    {
      id: 2,
      name: 'FSSAI License',
      description: 'Food Safety and Standards Authority of India – License under FSS Act, 2006',
      category: 'Food Safety',
      image: `${process.env.PUBLIC_URL}/images/certificates/fssai.png`
    },
    {
      id: 3,
      name: 'FIEO Registration',
      description: 'Federation of Indian Export Organisations – Registration-Cum-Membership Certificate',
      category: 'Export',
      image: `${process.env.PUBLIC_URL}/images/certificates/fieo.png`
    },
    {
      id: 4,
      name: 'Importer-Exporter Code (IEC)',
      description: 'Directorate General of Foreign Trade – Ministry of Commerce and Industry, Government of India',
      category: 'Export',
      image: `${process.env.PUBLIC_URL}/images/certificates/iec.png`
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
                    <span className="view-text">View certificate</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal - rendered to body to avoid stacking/overflow issues */}
      {selectedCertificate && ReactDOM.createPortal(
        <div 
          className="certificate-modal" 
          onClick={handleBackdropClick}
        >
          <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
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
              Official document. Verify authenticity via the respective government portal.
            </p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Certificates;
