import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"

import OGP_DEFAULT_IMG from "../../static/OGP_card.png"

export default function NotFound({ data }) {
  const { siteUrl } = data.site.siteMetadata
  const img = `${siteUrl}${OGP_DEFAULT_IMG}`
  return (
    <>
      <Seo
        title="Not Found"
        description="Atommy's Portfolio Site. Self-introductions and a collection of works are posted here."
        type="article"
        img={img}
      />
      <Layout>
        <Header isTop={false} />
        <h2 className="heading mt-10 text-red-500 mb-4">404 Not Found</h2>
        <p className="mb-4">お探しのページは見つかりませんでした。</p>
        <Link to="/">
          <p className="text-indigo-500 underline">トップページへ</p>
        </Link>
        <Footer />
      </Layout>
    </>
  )
}

export const query = graphql`
  query 404 {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
