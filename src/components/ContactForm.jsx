/* 🎌 High-End Cyberpunk Contact Console Component */
import React, { useState } from 'react';
import { AudioSynth } from '../services/AudioSynth';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('STANDBY');

  const handleHover = () => {
    AudioSynth.playHoverSweep();
  };

  const handleFocus = () => {
    AudioSynth.playBeepClick();
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // synthesize typing click sound (very light beep!)
    AudioSynth.playHoverSweep();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AudioSynth.playBeepClick();
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
          padding: 5rem 0 8rem;
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
          margin-bottom: 3.5rem;
        }

        .form-layout {
          padding: 2.2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
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
          color: var(--primary-color);
          text-shadow: var(--glow-cyan);
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .form-input,
        .form-textarea {
          background: rgba(6, 7, 10, 0.65);
          border: 1px solid rgba(0, 240, 255, 0.25);
          border-radius: 2px;
          padding: 0.8rem 1.2rem;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 13px;
          outline: none;
          transition: var(--transition-fast);
          box-shadow: inset 0 0 10px rgba(0, 240, 255, 0.03);
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: var(--secondary-color);
          box-shadow: var(--glow-magenta), inset 0 0 10px rgba(255, 42, 109, 0.05);
          background: rgba(11, 13, 22, 0.85);
        }

        .form-textarea {
          min-height: 140px;
          resize: vertical;
        }

        .submit-panel {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px dashed rgba(0, 240, 255, 0.15);
          padding-top: 1.5rem;
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
        .status-compiling { color: var(--warn-color); text-shadow: var(--glow-yellow); animation: blink 1s infinite; }
        .status-success { color: var(--primary-color); text-shadow: var(--glow-cyan); }

        @keyframes blink {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>

      <div className="container contact-container">
        <div className="contact-header">
          <h2 className="section-title">COMMUNICATION_LINK</h2>
          <div className="section-subtitle">[ INITIATE NEURAL DATALINK DISPATCH ]</div>
        </div>

        <div className="cyber-panel">
          <div className="cyber-panel-header">
            <span className="cyber-panel-title">DISPATCH_TERMINAL.EXE</span>
            <span className="cyber-panel-status">SYS_STATUS: {status}</span>
          </div>

          <form className="form-layout" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">SENDER_IDENTITY // NAME</label>
              <input 
                className="form-input"
                type="text" 
                id="name"
                name="name" 
                value={form.name}
                onChange={handleInput}
                onFocus={handleFocus}
                placeholder="INPUT IDENTIFIER..."
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">COMMUNICATION_LINK // EMAIL</label>
              <input 
                className="form-input"
                type="email" 
                id="email"
                name="email" 
                value={form.email}
                onChange={handleInput}
                onFocus={handleFocus}
                placeholder="INPUT ROUTING EMAIL..."
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">MESSAGE_PAYLOAD // DATA</label>
              <textarea 
                className="form-textarea"
                id="message"
                name="message" 
                value={form.message}
                onChange={handleInput}
                onFocus={handleFocus}
                placeholder="COMPILE MESSAGE PAYLOAD FOR DISPATCH..."
                required
              />
            </div>

            <div className="submit-panel">
              <div>
                {status === 'STANDBY' && <span className="status-tag status-standby">❯ LINK STABLE</span>}
                {status === 'COMPILING_PAYLOAD' && <span className="status-tag status-compiling">❯ COMPILING PAYLOAD...</span>}
                {status === 'DISPATCH_SUCCESS' && <span className="status-tag status-success">❯ DISPATCH SUCCESSFUL!</span>}
              </div>

              <button 
                className="cyber-btn"
                type="submit"
                onMouseEnter={handleHover}
                disabled={status !== 'STANDBY'}
              >
                [ TRANSMIT PAYLOAD ]
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
