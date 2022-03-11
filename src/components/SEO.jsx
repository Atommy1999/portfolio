import React from "react"
import { Helmet } from "react-helmet"

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      <script
        src="https://kit.fontawesome.com/cee6072cec.js"
        crossorigin="anonymous"
      ></script>
      <meta name="description" content={description} />
      <meta name="og:description" content="og:description" />
    </Helmet>
  )
}

export default SEO
