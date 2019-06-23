import React from 'react'
import yn from './utils/yn'
import { BRIDGE_MODES } from '../stores/utils/bridgeMode'
import { BridgeStatistics } from './index'
import { Redirect } from 'react-router'
import { TransactionsStatistics } from './TransactionsStatistics'
import { inject, observer } from "mobx-react"
import { FeeStatistics } from "./FeeStatistics"

@inject("RootStore")
@observer
export class StatisticsPage extends React.Component {

  render(){
    const { homeStore, foreignStore, bridgeMode, web3Store } = this.props.RootStore
    const isNativeToErc = bridgeMode === BRIDGE_MODES.NATIVE_TO_ERC
    const leftTitle = isNativeToErc ? 'Deposits' : 'Withdrawals'
    const rightTitle = isNativeToErc ? 'Withdrawals' : 'Deposits'
    const { REACT_APP_HOME_WITHOUT_EVENTS: HOME, REACT_APP_FOREIGN_WITHOUT_EVENTS: FOREIGN } = process.env
    const withoutEvents = web3Store.metamaskNet.id === web3Store.homeNet.id.toString() ? yn(HOME) : yn(FOREIGN)

    return withoutEvents ? ( <Redirect to="/" />) : (
      <div className="statistics-page">
          <div className='statistics-bridge-container'>
            <h3 className='sub-title'>Bridge Statistics</h3>
            <BridgeStatistics
              users={homeStore.statistics.finished ? homeStore.statistics.users.size : ''}
              totalBridged={homeStore.statistics.finished ? homeStore.statistics.totalBridged.toString() : ''}
              homeBalance={homeStore.balance}
              homeSymbol={homeStore.symbol}
              homeNativeSupplyTitle={isNativeToErc}
              foreignSymbol={foreignStore.symbol}
              foreignSupply={foreignStore.totalSupply} />
          </div>
          {
            homeStore.depositFeeCollected.finished
            && homeStore.withdrawFeeCollected.finished
            && (homeStore.depositFeeCollected.shouldDisplay || homeStore.withdrawFeeCollected.shouldDisplay)
            && <FeeStatistics
                depositFeeCollected={homeStore.depositFeeCollected}
                withdrawFeeCollected={homeStore.withdrawFeeCollected}
              />
          }
          <div className='statistics-transaction-container'>
            <div className='statistics-deposit-container'>
              <h3 className='sub-title'>Token {leftTitle}</h3>
              <TransactionsStatistics
                txNumber={homeStore.statistics.finished ? homeStore.statistics.deposits : ''}
                type={foreignStore.symbol}
                value={homeStore.statistics.finished ? homeStore.statistics.depositsValue : ''} />
            </div>
            <div className='statistics-withdraw-container'>
              <h3 className='sub-title'>Token {rightTitle}</h3>
              <TransactionsStatistics
                txNumber={homeStore.statistics.finished ? homeStore.statistics.withdraws : ''}
                type={foreignStore.symbol}
                value={homeStore.statistics.finished ? homeStore.statistics.withdrawsValue : ''} />
            </div>
          </div>
      </div>
    )
  }
}
