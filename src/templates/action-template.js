import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import { FaMap } from "react-icons/fa"
import Day from "../components/SingleAction/Day"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const Template = ({ data }) => {
  const {
    name,
    country,
    days,
    description: { description },
    images,
    start,
    action,
  } = data.action

  const [mainImage, ...actionImages] = images

  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {actionImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="single action"
                  className={styles.image}
                />
              )
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMap className={styles.icon} />
              {country}
            </p>
          </div>
          <h4>datum : {start}</h4>
          <h4>broj dana : {days}</h4>
          <h4>opis :</h4>
          <p className={styles.desc}>{description}</p>
          <h2>dnevni raspored</h2>
          <div className={styles.journey}>
            {action.map((item, index) => {
              return <Day key={index} dan={item.dan} info={item.info} />
            })}
          </div>
          <AniLink fade to="/action" className="btn-primary">
            nazad na akcije
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    action: contentfulAction(slug: { eq: $slug }) {
      name
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      action {
        dan
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default Template
