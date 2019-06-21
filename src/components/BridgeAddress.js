import React from 'react'

export const BridgeAddress = ({ isHome, reverse }) => {
  const getAddress = () => isHome ?
    (<div className="home-address-container" />)
    :
    (<div className="foreign-address-container" />)

  return isHome ?
    (<div className="bridge-home">
      {getAddress()}
    </div>)
    :
    (<div className="bridge-foreign">
      {getAddress()}
    </div>)
}
