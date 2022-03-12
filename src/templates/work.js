import React from "react"

import "../styles/markdown.css"

import Seo from "../components/Seo"
import Header from "../components/Header"
import Layout from "../components/Layout"
import Footer from "../components/Footer"

export default function Work({ pageContext }) {
  const { title, updatedAt, featuredImage } = pageContext.work
  const description = pageContext.work.description.description
  const body = pageContext.work.body.childMarkdownRemark.html

  return (
    <>
      <Seo title={`${title} | Atommy`} description={description} />
      <Layout>
        <Header />
        <span className="absolute top-7 -right-3 text-lg font-bold text-gold  font-orbitron rotate-90">
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

        <Footer />
      </Layout>
    </>
  )
}
