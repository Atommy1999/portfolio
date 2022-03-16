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

import { siteDescription, siteName, domainName } from "../constants/siteConfig"
import OGP_DEFAULT_IMG from "../../static/OGP_card.png"

export default function Home({ data }) {
  return (
    <>
      <Seo
        title={siteName}
        description={siteDescription}
        type="website"
        page_url={`https://${domainName}`}
        img={OGP_DEFAULT_IMG}
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
  query allContentfulWorks {
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
