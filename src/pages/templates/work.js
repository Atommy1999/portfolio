import React from "react"

import Layout from "../../components/Layout"

export default function Work({ pageContext }) {
  const { title, updatedAt, featuredImage } = pageContext.work
  const body = pageContext.work.body.childMarkdownRemark.html

  return (
    <Layout>
      <div>
        <h1>{title}</h1>
        <p>{updatedAt}</p>
      </div>
      <img src={featuredImage.file.url} alt="work-cover"></img>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </Layout>
  )
}
