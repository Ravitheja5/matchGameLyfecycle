import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActiveTab} = props
  const {tabId, displayText} = tabDetails

  const onClickTabButton = () => {
    onClickTab(tabId)
  }

  const styledTab = isActiveTab ? 'styleTab' : null

  return (
    <li className={styledTab} onClick={onClickTabButton}>
      {displayText}
    </li>
  )
}

export default TabItem
