"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="form-success">
        <div className="form-success-icon">&#10003;</div>
        <h3>Request Sent!</h3>
        <p>
          We&apos;ll get back to you faster than you can say &ldquo;Poop
          Dudes.&rdquo;
        </p>
        <button
          className="btn btn-primary"
          onClick={() => setSubmitted(false)}
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Request a Free Quote</h3>
      <div className="form-group">
        <input type="text" placeholder="Your Name" required />
      </div>
      <div className="form-group">
        <input type="tel" placeholder="Phone Number" required />
      </div>
      <div className="form-group">
        <input type="email" placeholder="Email Address" required />
      </div>
      <div className="form-group">
        <select required defaultValue="">
          <option value="" disabled>
            Select a Service
          </option>
          <option>Septic Tank Pumping</option>
          <option>Septic Tank Repair</option>
          <option>New Septic Installation</option>
          <option>Emergency Repair</option>
          <option>Field Line Service</option>
          <option>Inspection / Camera</option>
          <option>Water Line Service</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form-group">
        <textarea
          placeholder="Tell us about your situation..."
          rows={4}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary btn-lg btn-full">
        Send Request
      </button>
    </form>
  );
}
