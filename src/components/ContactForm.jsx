/* 🎌 Premium Editorial Contact Registry Component */
import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('STANDBY');

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('COMPILING_PAYLOAD');
    
    setTimeout(() => {
      setStatus('DISPATCH_SUCCESS');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('STANDBY'), 4000);
    }, 1800);
  };

  return (
    <section className="contact-section" id="contact">
      <style>{`
        .contact-section {
          padding: 6rem 0 9rem;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-container {
          width: 100%;
          max-width: 580px;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .form-layout {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .form-label {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        /* Sleek minimal underline inputs */
        .form-input,
        .form-textarea {
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(17, 17, 17, 0.15);
          border-radius: 0px;
          padding: 0.8rem 0.2rem;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 14px;
          outline: none;
          transition: var(--transition-fast);
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--primary-color);
          background: rgba(255, 255, 255, 0.25);
        }

        .form-textarea {
          min-height: 120px;
          resize: vertical;
        }

        .submit-panel {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px dashed rgba(17, 17, 17, 0.1);
          padding-top: 1.8rem;
          margin-top: 1rem;
        }

        .status-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .status-standby { color: var(--text-secondary); }
        .status-compiling { color: var(--secondary-color); animation: blink 1s infinite; }
        .status-success { color: var(--accent-color); }

        @keyframes blink {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>

      <div className="container contact-container">
        <div className="contact-header">
          <h2 className="section-title">COMMUNICATION</h2>
          <div className="section-subtitle">[ INITIATE NEURAL DATALINK DISPATCH ]</div>
        </div>

        <div className="cyber-panel">
          <div className="cyber-panel-header">
            <span className="cyber-panel-title">DATALINK_TERMINAL // DISPATCH</span>
            <span className="cyber-panel-status">SYS_STATUS: {status}</span>
          </div>

          <form className="form-layout" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">SENDER IDENTIFIER // NAME</label>
              <input 
                className="form-input"
                type="text" 
                id="name"
                name="name" 
                value={form.name}
                onChange={handleInput}
                placeholder="YOUR NAME OR REPRESENTATIVE..."
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">ROUTING ADDRESS // EMAIL</label>
              <input 
                className="form-input"
                type="email" 
                id="email"
                name="email" 
                value={form.email}
                onChange={handleInput}
                placeholder="YOUR ACTIVE DATALINK ROUTING ADDR..."
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">COMMUNICATION CONTENT // MESSAGE</label>
              <textarea 
                className="form-textarea"
                id="message"
                name="message" 
                value={form.message}
                onChange={handleInput}
                placeholder="WRITE MESSAGE CORE FOR COMPILATION..."
                required
              />
            </div>

            <div className="submit-panel">
              <div>
                {status === 'STANDBY' && <span className="status-tag status-standby">❯ READY TO TRANSMIT</span>}
                {status === 'COMPILING_PAYLOAD' && <span className="status-tag status-compiling">❯ SENDING CORE PAYLOAD...</span>}
                {status === 'DISPATCH_SUCCESS' && <span className="status-tag status-success">❯ TRANSMISSION COMPLETE</span>}
              </div>

              <button 
                className="cyber-btn"
                type="submit"
                disabled={status !== 'STANDBY'}
              >
                [ SEND DISPATCH ]
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
