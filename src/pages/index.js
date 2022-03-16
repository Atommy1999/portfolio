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

import OGP_DEFAULT_IMG from "../../static/OGP_card.png"

export default function Home({ data }) {
  const { title, description, siteUrl } = data.site.siteMetadata
  const img = `${siteUrl}/${OGP_DEFAULT_IMG}`

  return (
    <>
      <Seo
        title={title}
        description={description}
        type="website"
        page_url={siteUrl}
        img={img}
      />
      <Layout>
        <Header isTop={true} />
        <Hero />
        <Works data={data} />
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
    allContentfulWorks {
      edges {
        node {
          title
          featuredImage {
            title
            file {
              url
            }
          }
          description {
            description
          }
          createdWith
          slug
        }
      }
    }
  }
`
