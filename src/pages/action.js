import React, { Component } from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
export default class Action extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.actionBcg.childImageSharp.fluid} />
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
