import React from 'react'

export const Disclaimer = ({ onConfirmation }) => (
  <div className="disclaimer-alert">
    <div className="alert-container">
      <h1 className="disclaimer-title">Ocean Protocol Token Bridge</h1>
      <div className="disclaimer-description">
        <p>Use of this app and the TokenBridge is at your own risk. Users may experience
        unexpected delays, unexpected visual artifacts, unexpected loss of tokens or funds from improper app configuration, or other negative outcomes.</p>
        <p>By hitting the "continue" button, you are representing that you’ve read our
        <a
          href="https://forum.poa.network/t/end-user-licensing-agreement-and-terms-of-service/2197"
          target="_blank" rel="noopener noreferrer">Terms of
        Service</a> in full, and that you agree to be legally bound by them.</p>
      </div>
      <div className="disclaimer-buttons">
        <button
          className="disclaimer-confirm"
          onClick={onConfirmation}>
          Continue
        </button>
      </div>
    </div>
  </div>
)
