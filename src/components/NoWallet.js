import React, { Component } from 'react'
import noWalletIcon from '../assets/images/no-wallet-modal/i@3x.png'
import { ModalContainer } from './ModalContainer'
import { inject, observer } from 'mobx-react'

@inject('RootStore')
@observer
export class NoWallet extends Component {
  state = {
    showModal: true
  }

  handleCancel = () => {
    this.setState({ showModal: false })
  }

  render() {
    const { RootStore: { web3Store: { walletInstalled } }, showModal: showNoWallet } = this.props
    const showModal = showNoWallet && !walletInstalled

    if (!showModal || !this.state.showModal) return null

    return (
      <ModalContainer showModal={showModal && this.state.showModal}>
        <div className="noWallet-alert">
            <h2 className="title">Wallet not found</h2>
            <p className="description">A wallet is not installed. For using this application you need to have a Web3 wallet installed in your browser.</p>
            <p className="description">Check out the following links to learn how to install one of these wallets.</p>
            <div className="noWallet-buttons">
              <a
                className="noWallet-metamask"
                href="https://forum.poa.network/t/wallet-metamask-extension/1819"
                rel="noopener noreferrer"
                target="_blank"
              >
                Metamask
              </a>
              <a
                className="noWallet-niftyWallet"
                href="https://forum.poa.network/t/nifty-wallet-guide/1789"
                rel="noopener noreferrer"
                target="_blank"
              >
                Nifty Wallet
              </a>
              <a
                  className="noWallet-alphawallet"
                  href="https://alphawallet.com/"
                  rel="noopener noreferrer"
                  target="_blank"
              >
                 AlphaWallet
              </a>
              <button className="noWallet-cancel" onClick={this.handleCancel}>Cancel</button>
            </div>
        </div>
      </ModalContainer>
    )
  }
}
