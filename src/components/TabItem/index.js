import './index.css'

const TabItem = props => {
  const {tabsList, clickTabItem, isActive} = props
  const {tabId, displayText} = tabsList
  const changeTab = () => {
    clickTabItem(tabId)
  }
  const activeTabId = isActive ? 'active-tabId' : ''
  return (
    <li className="tab-container">
      <button
        className={`btn ${activeTabId}`}
        onClick={changeTab}
        type="button"
      >
        <p className="tab-name">{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
