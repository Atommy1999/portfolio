import React from "react"
import Typewriter from "typewriter-effect"

const Hero = () => {
  return (
    <div className="content flex items-center h-64 bg-white ">
      <Typewriter
        onInit={typewriter => {
          typewriter
            .typeString("Hello, I'm Atommy.<br> Welcome to My Portfolio!")
            .pauseFor(2500)
            .deleteAll()
            .pauseFor(1000)
            .typeString("I Love Design, Developing and Music.")
            .pauseFor(2500)
            .deleteAll()
            .pauseFor(1000)
            .typeString("I Hope You Enjoy My Works!")
            .start()
        }}
        options={{
          wrapperClassName: "text-5xl font-ubuntu text-gold",
          cursorClassName: "text-5xl Typewriter__cursor",
          delay: 80,
          deleteSpeed: 20,
        }}
      />
    </div>
  )
}

export default Hero
