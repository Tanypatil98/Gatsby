import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import Img from "../posts/download.png"

const Home = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Welcome to gatsby</h1>
      <p>This is the Gatsby Blog site.</p>
      <img src={Img} alt='Gatsby' style={{width: '50%', height: '20%'}} />
    </Layout>
  );
}

export default Home
