import React from "react"
import ActionList from "./ActionList"
import { useStaticQuery, graphql } from "gatsby"

const getActions = graphql`
  query {
    actions: allContentfulAction {
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

const Actions = () => {
  const { actions } = useStaticQuery(getActions)

  return <ActionList actions={actions} />
}

export default Actions
