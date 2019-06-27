import React, { Component } from 'react'
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
        <ModalContainer 
            showModal={showModal && this.state.showModal} 
            hideModal={() => this.setState({ showModal: false })}
        >
        <div className="noWallet-alert">
            <h2 className="title">Wallet not found</h2>
            <p className="description">A wallet is not installed. For using this application you need to have a Web3 wallet installed in your browser.</p>
            <p className="description">Check out the following links to learn how to install one of these wallets:</p>
            <ul>
                <li>
                    <a
                        href="https://forum.poa.network/t/wallet-metamask-extension/1819"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        MetaMask
                    </a>
                </li>
                <li>
                    <a
                        className="noWallet-niftyWallet"
                        href="https://forum.poa.network/t/nifty-wallet-guide/1789"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Nifty Wallet
                    </a>
                </li>
                <li>
                    <a
                        className="noWallet-alphawallet"
                        href="https://alphawallet.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        AlphaWallet
                    </a>
                </li>
            </ul>
        </div>
      </ModalContainer>
    )
  }
}
