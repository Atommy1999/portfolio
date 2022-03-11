import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Header from "../components/Header"
import Works from "../components/Works"
import Profile from "../components/Profile"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <>
      <SEO
        title="Atommy's Portfolio"
        description="Atommy's Portfolio Site. Self-introductions and a collection of works are posted here."
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
