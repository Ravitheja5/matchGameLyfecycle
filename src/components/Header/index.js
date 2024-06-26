import {Component} from 'react'
import './index.css'

class Header extends Component {
  state = {time: 60}

  componentDidMount() {
    this.timerId = setInterval(this.timer, 1000)
  }

  timer = () => {
    const {time} = this.state
    if (time !== 0) {
      this.setState(prevState => ({time: prevState.time - 1}))
    }
  }

  render() {
    const {score} = this.props
    const {time} = this.state
    return (
      <nav className="nav-bar">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
        <div className="box2">
          <p>
            score : <span className="score">{score}</span>
          </p>
          <div className="timer-box">
            <img
              alt="timer"
              className="timer-logo"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            />
            <p>
              <span className="timer">{time} </span>sec
            </p>
          </div>
        </div>
        <button onClick={this.onClickButton}>BUTTON</button>
      </nav>
    )
  }
}

export default Header
