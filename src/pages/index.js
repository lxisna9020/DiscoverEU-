import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MainPoint from "../components/MainPoint"
import Trips from "../components/Trips"
import Works from "../components/Works"
import Email from "../components/Email"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <MainPoint />
      <Works
        name="works"
        heading="How Discover EU works"
        subHeading="Discover EU searches any city, town, landmark, attraction or address
        across the globe with thousands of multi-modal routes to easily get you
        from A to B."
      />
      <Trips
        name="trips"
        heading="Amazing places to visit"
        subHeading="Europe has incredible places for you all around. Our fantastic
          destinations are ready for your visit."
      />
      <Email name="offers" />
    </Layout>
  )
}

export default IndexPage
