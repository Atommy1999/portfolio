import React from "react"

const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full h-8 m-auto left-0 right-0 flex justify-center items-center bg-gold rounded-t-lg">
      <p className="text-white text-sm">© {new Date().getFullYear()} Atommy.</p>
    </div>
  )
}

export default Footer
