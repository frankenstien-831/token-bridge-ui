import React from 'react'

export const Disclaimer = ({ onConfirmation }) => (
    <div className="disclaimer-alert">
        <h1 className="title">Ocean Protocol Token Bridge</h1>
        <div className="description">
        <p>Use of this app is at your own risk. You may experience
        unexpected delays, unexpected visual artifacts, unexpected loss of tokens or funds from improper app configuration, or other negative outcomes.</p>
        <p><strong>By hitting the <em>Continue</em> button, you are representing that you’ve read our {' '}
        <a
            href="https://forum.poa.network/t/end-user-licensing-agreement-and-terms-of-service/2197"
            target="_blank" rel="noopener noreferrer">Terms of
        Service</a> in full, and that you agree to be legally bound by them.</strong></p>
        </div>
        <div className="disclaimer-buttons">
            <button
                className="disclaimer-confirm"
                onClick={onConfirmation}>
                Continue
            </button>
        </div>
  </div>
)
