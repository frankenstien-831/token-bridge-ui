import React from 'react'
import yn from './utils/yn'
import { Authority } from './Authority'
import { Configuration } from './Configuration'
import { inject, observer } from "mobx-react"


@inject("RootStore")
@observer
export class StatusPage extends React.Component {

  render() {
    const { homeStore, foreignStore, web3Store } = this.props.RootStore
    const isHome = web3Store.metamaskNet.id.toString() === web3Store.homeNet.id.toString()
    const requiredSignatures = isHome ? homeStore.requiredSignatures : foreignStore.requiredSignatures
    const authorities = isHome ? homeStore.validatorsCount : foreignStore.validatorsCount
    const symbol = isHome ? homeStore.symbol : foreignStore.symbol
    const maxSingleDeposit = isHome ? homeStore.maxPerTx : foreignStore.maxPerTx
    const maxTotalBalance = isHome ? homeStore.maxCurrentDeposit : foreignStore.maxCurrentDeposit
    const validatorsList = isHome ? homeStore.validators : foreignStore.validators
    const { REACT_APP_HOME_WITHOUT_EVENTS: HOME, REACT_APP_FOREIGN_WITHOUT_EVENTS: FOREIGN } = process.env
    const withoutEvents = web3Store.metamaskNet.id === web3Store.homeNet.id.toString() ? yn(HOME) : yn(FOREIGN)

    return (
      <div className="status-page">
        <div className='status-configuration-container'>
            <h3 className='sub-title'>Configuration</h3>
            <Configuration
                requiredSignatures={requiredSignatures}
                authorities={authorities}
                symbol={symbol}
                maxSingleDeposit={maxSingleDeposit}
                maxTotalBalance={maxTotalBalance} />
        </div>
        {withoutEvents ? null : (
            <div className='status-authorities-container'>
                <h3 className='sub-title'>Authorities</h3>
                {validatorsList.map((validator,i) => (
                    <Authority key={validator} address={validator} number={(i+1)} />
                ))}
            </div>
        )}
      </div>
    )
  }
}
