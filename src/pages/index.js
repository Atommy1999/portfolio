import React from "react"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Header from "../components/Header"
import Works from "../components/Works"
import Profile from "../components/Profile"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Works />
      <Profile />
      <Footer />
    </Layout>
  )
}
