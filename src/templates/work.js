import React from "react"

import "../styles/markdown.css"

import Seo from "../components/Seo"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Footer from "../components/Footer"

export default function Work({ pageContext }) {
  const { title, updatedAt, featuredImage } = pageContext.work
  const body = pageContext.work.body.childMarkdownRemark.html

  return (
    <>
      <Seo />
      <Layout>
        <Header />
        <div>
          <h1>{title}</h1>
          <p>{updatedAt}</p>
        </div>
        <img src={featuredImage.file.url} alt="work-cover"></img>
        <div dangerouslySetInnerHTML={{ __html: body }} />

        <Footer />
      </Layout>
    </>
  )
}
