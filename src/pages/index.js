import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Header from "../components/Header"
import Works from "../components/Works"
import Profile from "../components/Profile"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Seo from "../components/Seo"

export default function Home({ data }) {
  const { title, description, siteUrl } = data.site.siteMetadata

  return (
    <>
      <Seo
        title={title}
        description={description}
        type="website"
        page_url={siteUrl}
      />
      <Layout>
        <Header isTop={true} />
        <Hero />
        <Works />
        <Profile />
        <Contact />
        <Footer />
      </Layout>
    </>
  )
}

export const query = graphql`
  query index {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`
