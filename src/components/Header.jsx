import React from "react"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import LOGO_IMG from "../../static/logo.svg"

const Header = () => {
  return (
    <div className="flex justify-between items-cen my-2 w-full">
      <Link to="/">
        <div className="flex flex-row items-center">
          <img
            src={LOGO_IMG}
            className="w-12 h-12 p-1 rounded-full lg:w-16 lg:h-16"
            alt="logo"
          ></img>
          <span className="font-orbitron text-xl font-black ml-1 lg:text-2xl lg:ml-2">
            Atommy
          </span>
        </div>
      </Link>
      <div className="flex items-center gap-2 lg:gap-4">
        <AnchorLink offset="50" href="#works">
          <p className="font-bold lg:text-lg hover:underline">Works</p>
        </AnchorLink>
        <AnchorLink offset="50" href="#profile">
          <p className="font-bold lg:text-lg hover:underline">Profile</p>
        </AnchorLink>
        <AnchorLink offset="50" href="#contact">
          <p className="font-bold lg:text-lg hover:underline">Contact</p>
        </AnchorLink>
      </div>
    </div>
  )
}

export default Header
