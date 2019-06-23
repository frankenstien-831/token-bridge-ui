import React from 'react'

export const EventsListHeader = ({selected, homeName, homeValue, foreignName, foreignValue, onChangeList, handleChange, handleKeyDown}) => (
  <>
    <div className="events-header">
      <h3 className="sub-title">Events</h3>
      <div className="events-filter-container">
        <span className="events-filter-icon" />
        <input onChange={handleChange} onKeyDown={handleKeyDown} type="text" className="events-filter" placeholder="Tx Hash or Block Number..." />
        <select value={selected} onChange={onChangeList} className="events-select">
          <option value={homeValue}>{homeName}</option>
          <option value={foreignValue}>{foreignName}</option>
        </select>
      </div>
    </div>
    <div className="events-columns">
      <span className="column-title txhash-column">TxHash</span>
      <span className="column-title recipient-column">Recipient</span>
      <span className="column-title value-column">Recipient Value</span>
      <span className="column-title block-column">Block Number</span>
    </div>
  </>
)
