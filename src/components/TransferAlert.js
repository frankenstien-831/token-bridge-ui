import React from 'react'
import numeral from 'numeral'
import { ArrowRight } from './icons/ArrowRight'

export const TransferAlert = ({
  onConfirmation,
  onCancel,
  from,
  to,
  fromCurrency,
  toCurrency,
  fromAmount,
  toAmount,
  fee,
  reverse
  }) => {

  const formattedFromAmount = numeral(fromAmount).format('0,0[.][000000000000000000]', Math.floor)
  const formattedToAmount = numeral(toAmount).format('0,0[.][000000000000000000]', Math.floor)

  return (
    <div className="transfer-alert">
      <div className="alert-container">
        <h3 className="title">Confirm Transaction</h3>
        <div className="transfer-title">

          <div className="alert-logo-box">
            <div className={reverse ? 'foreign-logo' : 'home-logo'} />
            <div className="transfer-network">{from}</div>
          </div>
          <div><strong>{formattedFromAmount}</strong> {fromCurrency}</div>

          <ArrowRight />
          
          <div><strong>{formattedToAmount}</strong> {toCurrency}</div>
          <div className="alert-logo-box">
            <div className={reverse ? 'home-logo' : 'foreign-logo'} />
            <div className="transfer-network">{to}</div>
          </div>

        </div>
        <div className="transfer-description" data-testid="transfer-description">
          {fee && <p><strong>Fee: {fee.toString()}%</strong></p>}
          <p>
            Please confirm that you would like to send <strong>{formattedFromAmount}</strong> {fromCurrency} from {from} to receive <strong>{formattedToAmount}</strong> {toCurrency} on {to}.
          </p>
        </div>
        <div className="transfer-buttons">
          <button className="transfer-confirm" onClick={onConfirmation}>Confirm</button>
          <button className="transfer-cancel" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  )
}
