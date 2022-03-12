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
  return (
    <>
      <Seo
        title="Atommy's Portfolio"
        description="Atommy's Portfolio Site. Self-introductions and a collection of works are posted here."
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
