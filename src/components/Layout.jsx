import React from "react"

const Layout = ({ children }) => {
  return (
    <div className="box-border relative container pb-8 mx-auto px-3 min-h-screen">
      {children}
    </div>
  )
}

export default Layout
