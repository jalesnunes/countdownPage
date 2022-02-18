import { useState } from 'react'
import rocketImg from '../assets/images/rocket.svg'

import '../styles/launch.scss'

export function Launch() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  let countdownDate = new Date('feb 18, 2022 00:00:00').getTime()

  setInterval(function () {
    let now = new Date().getTime()
    let distance = countdownDate - now

    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
  })

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
            <span>{days} : {hours} : {minutes} : {seconds}</span>
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
