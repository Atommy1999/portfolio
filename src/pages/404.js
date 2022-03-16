import React from "react"
import { Link, graphql } from "gatsby"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function NotFound() {
  return (
    <>
      <Seo title="送信完了" type="article" />
      <Layout>
        <Header isTop={false} />
        <span className="absolute top-8 -right-3 text-lg font-bold text-gold font-orbitron rotate-90">
          Sorry
        </span>
        <h2 className="heading mt-10 text-red-500 mb-4">404 Not Found</h2>
        <p className="mb-4">お探しのページは見つかりませんでした。</p>
        <Link to="/" className="text-blue-600 no-underline">
          <p>トップページへ</p>
        </Link>
        <Footer />
      </Layout>
    </>
  )
}

export const query = graphql`
  query page404 {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
