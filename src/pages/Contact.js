import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const location = useLocation();

  const initialProduct = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get('product') || '';
  }, [location.search]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: initialProduct ? `I would like to enquire about ${initialProduct}. ` : ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Build WhatsApp message
    const whatsappNumber = '919922833338';
    const text = `
Enquiry from Exobase website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || '-'}
Company: ${formData.company || '-'}

Message:
${formData.message}
`.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setSubmitStatus('success');
  };

  return (
    <main className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch with us to discuss your requirements, specifications, and delivery timelines. 
            We're here to provide honest communication and reliable execution.
          </p>
          <a
            href="https://wa.me/919922833338"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-hero-whatsapp"
          >
            WhatsApp: +91 99228 33338 <span className="fast-response">(Fast Response)</span>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              {initialProduct && (
                <p className="selected-product">
                  You are enquiring about: <strong>{initialProduct}</strong>
                </p>
              )}
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="form-success">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}

                <button 
                  type="submit" 
                  className="btn btn-primary btn-large"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-container">
              <div className="contact-info">
                <h2>Get In Touch</h2>
                <p className="info-description">
                  We believe trust is built through honest communication. Reach out to us 
                  for any inquiries about our products, services, or partnership opportunities.
                </p>

                <div className="info-items">
                  <a
                    href="https://wa.me/919922833338"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-item info-item-whatsapp"
                  >
                    <div className="info-icon info-icon-whatsapp">💬</div>
                    <div className="info-content">
                      <h3>WhatsApp: +91 99228 33338</h3>
                      <p className="info-whatsapp-tag">Fast Response</p>
                    </div>
                  </a>

                  <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div className="info-content">
                      <h3>Location</h3>
                      <p>Tata Capitol Heights, Tower 4, Room 1202,</p>
                      <p>Rambagh, Near VR Mall, Nagpur, Maharashtra – 440003</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">📧</div>
                    <div className="info-content">
                      <h3>Email</h3>
                      <p>info@exobase.in</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">📞</div>
                    <div className="info-content">
                      <h3>Phone</h3>
                      <p>+91 99228 33338</p>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">⏰</div>
                    <div className="info-content">
                      <h3>Business Hours</h3>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
