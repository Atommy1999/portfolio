import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Header from "../components/Header"
import Works from "../components/Works"
import Profile from "../components/Profile"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Atommy's Portfolio</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <script
          src="https://kit.fontawesome.com/cee6072cec.js"
          crossorigin="anonymous"
        ></script>
        <meta name="description" content="description" />
        <meta name="og:description" content="og:description" />
      </Helmet>

      <Layout>
        <Header />
        <Hero />
        <Works />
        <Profile />
        <Contact />
        <Footer />
      </Layout>
    </>
  )
}
