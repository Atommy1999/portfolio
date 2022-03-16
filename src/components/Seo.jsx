import React from "react"
import { Helmet } from "react-helmet"
import { domainName, siteName } from "../constants/siteConfig"

const Seo = ({ title, description, img, page_url, type }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
      />
      <meta name="description" content={description} />
      {/* OGP */}
      <head prefix="og: http://ogp.me/ns#" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta
        property="og:url"
        content={page_url ? page_url : `https://${domainName}`}
      ></meta>
      <meta property="og:image" content={img} />

      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

export default Seo
