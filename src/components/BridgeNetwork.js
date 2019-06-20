import React from 'react'
import numeral from 'numeral'
import { InfoIcon } from './icons/InfoIcon'

export const BridgeNetwork = ({
  balance,
  currency,
  isHome,
  networkSubtitle,
  networkTitle,
  showModal,
  side
}) => {
  const containerName = isHome ? 'home' : 'foreign'
  const formattedBalance = isNaN(numeral(balance).format('0.00', Math.floor))
    ? numeral(0).format('0,0.00', Math.floor)
    : numeral(balance).format('0,0.00', Math.floor)

  const showMore = () => (
    <div className="bridge-network-data" onClick={showModal}>
        <span className="network-show-more">Network Info</span>
    </div>
  )

  return (
    <div className={`network-container-${containerName}`}>
      <div>
        <h2 className="network-title">{networkTitle}</h2>
        {networkSubtitle ? <span className="network-name">{networkSubtitle}</span> : null}
      </div>
      <p>
        <span className="network-basic-label">Balance:</span>
        <span className="network-balance"> {formattedBalance} {currency}</span>
      </p>
      {showMore()}
    </div>
 )
}
