import { useState } from 'react';

// ─── EmailJS Config ────────────────────────────────────────────────
// Replace these values with your actual EmailJS credentials
const EMAILJS_PUBLIC_KEY         = 'sAveJwREQ0Jhvlb5R';       // Account → API Keys
const EMAILJS_SERVICE_ID         = 'service_eoozn28';       // Email Services → Service ID
const EMAILJS_TEMPLATE_TO_RAVI   = 'template_1hsajna';   // Template that sends to ravivis042@gmail.com
const EMAILJS_TEMPLATE_AUTOREPLY = 'template_1sr17e5';   // Auto-reply template for the sender
// ──────────────────────────────────────────────────────────────────


async function sendEmail(templateId, templateParams) {
  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id:      EMAILJS_SERVICE_ID,
      template_id:     templateId,
      user_id:         EMAILJS_PUBLIC_KEY,
      template_params: templateParams,
    }),
  });
  if (!res.ok) throw new Error(await res.text());
}

export default function ContactSection() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 10)  e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setStatus('sending');

    // Template 1 params — To Email is HARDCODED in EmailJS template as ravivis042@gmail.com
    const paramsToRavi = {
      from_name:  form.name,
      from_email: form.email,
      reply_to:   form.email,
      subject:    form.subject,
      message:    form.message,
    };

    // Template 2 params — To Email in EmailJS template must be {{from_email}}
    const paramsAutoReply = {
      from_name:  form.name,
      from_email: form.email,
      reply_to:   form.email,
      subject:    form.subject,
      message:    form.message,
    };

    try {
      await sendEmail(EMAILJS_TEMPLATE_TO_RAVI, paramsToRavi);
      await sendEmail(EMAILJS_TEMPLATE_AUTOREPLY, paramsAutoReply);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-4 gradient-text">Let's Connect</h2>
          <div className="divider mx-auto"></div>
          <p className="lead mt-3">Have a project in mind? Let's discuss how we can work together</p>
        </div>

        <div className="row">

          {/* Contact Info */}
          <div className="col-lg-5 mb-4" data-aos="fade-right">
            <div className="contact-info">
              <h3 className="mb-4">Get in Touch</h3>
              <p className="mb-4">
                I'm always excited to work on new challenges and innovative projects. Whether you need
                enterprise solutions or AI-powered applications, let's create something amazing together.
              </p>

              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h5>Email</h5>
                  <p>ravivis811@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h5>Phone</h5>
                  <p>+91 8708859349</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h5>Location</h5>
                  <p>India</p>
                </div>
              </div>

              <div className="social-links mt-4">
                <a href="#" className="social-link" target="_blank" rel="noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="social-link" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" className="social-link" target="_blank" rel="noreferrer">
                  <i className="fab fa-stack-overflow"></i>
                </a>
                <a href="#" className="social-link" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="contact-form">

              {status === 'success' && (
                <div className="mb-4 p-3 text-center" style={{
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid var(--accent-color)',
                  borderRadius: 10,
                  color: 'var(--accent-color)',
                }}>
                  <i className="fas fa-check-circle me-2"></i>
                  Message sent! You'll receive a confirmation email shortly.
                </div>
              )}

              {status === 'error' && (
                <div className="mb-4 p-3 text-center" style={{
                  background: 'rgba(224,108,117,0.1)',
                  border: '1px solid #e06c75',
                  borderRadius: 10,
                  color: '#e06c75',
                }}>
                  <i className="fas fa-exclamation-circle me-2"></i>
                  Failed to send message. Please try again or email directly.
                </div>
              )}

              <form onSubmit={handleSubmit} id="contactForm" noValidate>
                <div className="row g-3">

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Your Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                      />
                      <i className="fas fa-user form-icon"></i>
                      {errors.name && <small style={{ color: '#e06c75' }}>{errors.name}</small>}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label">Your Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                      />
                      <i className="fas fa-envelope form-icon"></i>
                      {errors.email && <small style={{ color: '#e06c75' }}>{errors.email}</small>}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Project Inquiry"
                      />
                      <i className="fas fa-tag form-icon"></i>
                      {errors.subject && <small style={{ color: '#e06c75' }}>{errors.subject}</small>}
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                      ></textarea>
                      <i className="fas fa-comment form-icon"></i>
                      {errors.message && <small style={{ color: '#e06c75' }}>{errors.message}</small>}
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-gradient btn-lg w-100"
                      disabled={status === 'sending'}
                    >
                      {status === 'sending' ? (
                        <><i className="fas fa-spinner fa-spin me-2"></i>Sending...</>
                      ) : (
                        <><i className="fas fa-paper-plane me-2"></i>Send Message</>
                      )}
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

