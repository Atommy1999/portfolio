import React from "react"
import { Link } from "gatsby"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function NotFound({ data }) {
  return (
    <>
      <Seo
        title="Not Found"
        description="Atommy's Portfolio Site. Self-introductions and a collection of works are posted here."
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
