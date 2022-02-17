import rocketImg from '../assets/images/rocket.svg'

import '../styles/launch.scss'

export function Launch() {
  return (
    <div className="content">
      <div className="countdown">
        <h1>READY TO LAUNCH IN...</h1>

        <div className="timer">
          <div className="labels">
            <label>Days</label>
            <label>Hours</label>
            <label>Minutes</label>
            <label>Seconds</label>
          </div>

          <div className="numbers">
            <span className="days">08 :</span>
            <span className="hours">12 :</span>
            <span className="minutes">44 :</span>
            <span className="seconds">28</span>
          </div>
        </div>

        <p>Sign up to learn more about the launch </p>

        <button>Sing up</button>
      </div>

      <div className="image">
        <img src={rocketImg} alt="" />
      </div>
    </div>
  )
}
