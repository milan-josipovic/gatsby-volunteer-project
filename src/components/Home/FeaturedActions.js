import React from "react"
import Action from "../Actions/Action"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../Title"
import styles from "../../css/items.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const getActions = graphql`
  query {
    featuredActions: allContentfulAction(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          slug
          country
          contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const FeaturedActions = () => {
  const response = useStaticQuery(getActions)
  const actions = response.featuredActions.edges

  return (
    <section className={styles.tours}>
      <Title title="istaknute" subtitle="akcije" />
      <div className={styles.center}>
        {actions.map(({ node }) => {
          return <Action key={node.contentful_id} action={node} />
        })}
      </div>
      <AniLink fade to="/action" className="btn-primary">
        sve akcije
      </AniLink>
    </section>
  )
}

export default FeaturedActions
