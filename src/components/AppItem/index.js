import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appId, appName, imageUrl} = eachApp
  return (
    <li className="appContainer">
      <img src={imageUrl} className="appImage" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
