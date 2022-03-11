import React from "react"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import LOGO_IMG from "../../static/logo.svg"

const Header = () => {
  return (
    <div className="flex justify-between my-3 w-full">
      <Link to="/">
        <div className="flex flex-row items-center">
          <img
            src={LOGO_IMG}
            className="w-12 h-12 p-1 rounded-full"
            alt="logo"
          ></img>
          <span className="font-orbitron text-xl font-black ml-1">Atommy</span>
        </div>
      </Link>
      <div className="flex items-center gap-3">
        <AnchorLink offset="50" href="#works">
          <p className="underline">Works</p>
        </AnchorLink>
        <AnchorLink offset="50" href="#profile">
          <p className="underline">Profile</p>
        </AnchorLink>
        <AnchorLink offset="50" href="#works">
          <p className="underline">Contact</p>
        </AnchorLink>
      </div>
    </div>
  )
}

export default Header
