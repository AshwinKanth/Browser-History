import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item-container">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} className="logo" alt="domain logo" value="logoUrl" />
      <p className="title">{title}</p>
      <p className="domainUrl">{domainUrl}</p>
      <div className="delete-container">
        <button className="delete-button" type="button" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete-img"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
