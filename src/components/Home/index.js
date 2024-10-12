import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Home = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/ebank/login" />
  }
  return (
    <div className="container">
      <div className="logo-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <button
          type="button"
          className="button-styling"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
      <h1>Your Flexibility, Our Excellence</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png"
        alt="digital card"
      />
    </div>
  )
}
export default Home
