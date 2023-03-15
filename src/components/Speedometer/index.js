// Write your code here
import './index.css'
import {Component} from 'react'

class speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      const num = prevState.count

      if (num === 200) {
        return {count: prevState.count}
      }
      return {count: prevState.count + 10}
    })
  }

  break = () => {
    this.setState(prev => {
      const num = prev.count

      if (num === 0) {
        return {count: prev.count}
      }
      return {count: prev.count - 10}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="speed">{`Speed is ${count}mph`}</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buts">
          <button className="but1" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button className="but2" onClick={this.break}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default speedometer
