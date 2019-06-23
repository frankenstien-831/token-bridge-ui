import React from 'react'
import Dotdotdot from 'react-dotdotdot'
import { toDataUrl } from 'ethereum-blockies'

export const Authority = ({ address, number, logoIndex }) => {
    const blockies = address && toDataUrl(address)

    return (
        <div className="authority">
            <span className='authority-number'>{number}</span>
            <img className="authority-logo" src={blockies} alt="Blockies" />
            <Dotdotdot clamp={2} tagName="code">{address}</Dotdotdot>
        </div>
    );
}
