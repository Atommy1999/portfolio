import React from "react"
import { Link } from "gatsby"

import Seo from "../components/Seo"
import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Success() {
  return (
    <>
      <Seo title="送信完了" type="article" />
      <Layout>
        <Header isTop={false} />
        <span className="absolute top-14 -right-8 text-lg font-bold text-gold font-orbitron rotate-90">
          Thank you
        </span>
        <h2 className="heading mt-10 text-gold mb-4 font-noto">送信完了</h2>
        <p className="mb-4">お問い合わせありがとうございました。</p>
        <Link to="/" className="text-blue-600 no-underline">
          <p>トップページへ</p>
        </Link>
        <Footer />
      </Layout>
    </>
  )
}
