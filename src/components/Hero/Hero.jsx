import React from 'react'
import WelcomeText from '../Welcome/WelcomeText'
import HeroBackground from './HeroBackground'

function Hero() {
  return (
    <div>
      <div style={{ padding: "40px 80px ", display: "flex", overflow:"hidden" }}>
        <WelcomeText />
        <HeroBackground />
      </div>
      <div style={{ padding: "40px", display: "flex" }} >

      </div>
    </div>
  )
}

export default Hero
