import React, { useState } from 'react';
import './contact.css';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center text-white mb-3">Contact Us</h2>
      <p className="text-center text-white">Someone will get back to you within 24 hours.</p>

      {submitted && (
        <div className="alert alert-success text-center fw-semibold">
          Thanks for your feedback!
        </div>
      )}

      <form className="p-4 rounded contact-form" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label text-white">Name</label>
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="col-md-6">
            <label className="form-label text-white">Email</label>
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label d-block text-white">Issue</label>
          <div className="btn-group w-100" role="group">
            <input type="radio" className="btn-check" name="issue" id="issue1" />
            <label className="btn btn-outline-light" htmlFor="issue1">General inquiry</label>

            <input type="radio" className="btn-check" name="issue" id="issue2" />
            <label className="btn btn-outline-light" htmlFor="issue2">Quote request</label>

            <input type="radio" className="btn-check" name="issue" id="issue3" />
            <label className="btn btn-outline-light" htmlFor="issue3">Feedback</label>

            <input type="radio" className="btn-check" name="issue" id="issue4" />
            <label className="btn btn-outline-light" htmlFor="issue4">Other</label>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label text-white">Message</label>
          <textarea className="form-control" rows="4" placeholder="Type your message here..." required></textarea>
        </div>

        <button type="submit" className="btn btn-light w-100 fw-bold">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;