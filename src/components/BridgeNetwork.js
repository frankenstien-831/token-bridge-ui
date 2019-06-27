import React from 'react'
import numeral from 'numeral'

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
    <button className="network-show-more" onClick={showModal}>Network Info</button>
  )

  return (
    <div className={`network-container-${containerName}`}>
    <h2 className="network-title">
        {networkTitle} 
        {networkSubtitle ? <span className="network-name">{networkSubtitle}</span> : null}
    </h2>
    <p className="network-balance">
        {formattedBalance} {currency}
    </p>
    {showMore()}
    </div>
 )
}
