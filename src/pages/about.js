import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const About = () => {
  return (
      <Layout>
        <Head title="About" />
  <div>
      <h1>About Page </h1>
      <p>Need Developer ? <Link to="/contact"> Contact Me. </Link> </p>
    </div>
    </Layout>
  );
}

export default About
