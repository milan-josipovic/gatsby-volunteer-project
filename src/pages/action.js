import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Actions from "../components/Actions/Actions"
import SEO from "../components/SEO"
export default class Action extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Akcija" />
        <StyledHero img={this.props.data.actionBcg.childImageSharp.fluid} />
        <Actions />
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    actionBcg: file(relativePath: { eq: "actionBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
