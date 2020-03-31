import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
const about = ({ data }) => {
  return (
    <Layout>
      <SEO title="O nama" />
      <StyledHero img={data.aboutBcg.childImageSharp.fluid} />
    </Layout>
  )
}

export default about

export const query = graphql`
  query {
    aboutBcg: file(relativePath: { eq: "aboutBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
