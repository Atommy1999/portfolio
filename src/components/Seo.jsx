import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
      />
      <meta name="description" content={description} />
      <meta name="og:description" content="og:description" />
    </Helmet>
  )
}

export default Seo
