import './index.css'

const TabItem = props => {
  const {eachTabDetails, isActive, changeTabId} = props
  const {tabId, displayText} = eachTabDetails
  const onclickChangeTabId = () => {
    changeTabId(tabId)
  }
  const activeTab = isActive ? 'active-tab' : ''
  return (
    <li className={`${activeTab}`}>
      <button type="button" onClick={onclickChangeTabId}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
