import React from "react"

import "../styles/markdown.css"

import Seo from "../components/Seo"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Footer from "../components/Footer"

export default function Work({ pageContext }) {
  const { title, updatedAt, featuredImage, slug } = pageContext.work
  const description = pageContext.work.description.description
  const body = pageContext.work.body.childMarkdownRemark.html
  const siteUrl = pageContext.siteUrl

  return (
    <>
      <Seo
        title={`${title} | Atommy`}
        description={description}
        type="article"
        page_url={`${siteUrl}/work/${slug}/`}
        img={`https:${featuredImage.file.url}`}
      />
      <Layout>
        <Header />
        <span className="absolute top-10 -right-3 text-lg font-bold text-gold font-orbitron rotate-90">
          Works
        </span>
        <div className="h-16"></div>
        <div>
          <h1 className="text-2xl font-bold tracking-wide -mb-1">{title}</h1>
          <p className="text-sm font-normal text-slate-500 font-karla pl-0.5">
            Posted on {updatedAt}
          </p>
        </div>
        <div className="rounded-sm flex justify-center items-center mt-1 mb-10 py-10">
          <img
            className="rounded-lg border-none w-5/6 max-w-xl drop-shadow-md"
            src={featuredImage.file.url}
            alt="work-cover"
          />
        </div>

        <div className="markdown" dangerouslySetInnerHTML={{ __html: body }} />
        <div className="h-16"></div>

        <Footer />
      </Layout>
    </>
  )
}
