import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import FeaturedActions from "../components/Home/FeaturedActions"

export default ({ data }) => (
  <Layout>
    <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
      <Banner
        title="volonteri u akciji"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cupiditate."
      >
        <AniLink fade to="/action" className="btn-white">
          istrazite akcije
        </AniLink>
      </Banner>
    </StyledHero>

    <About />
    <Services />
    <FeaturedActions />
  </Layout>
)

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
