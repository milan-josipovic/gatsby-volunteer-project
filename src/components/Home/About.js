import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from "../../images/defaultBcg2.jpeg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg2.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)

  return (
    <section className={styles.about}>
      <Title title="o" subtitle="nama" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about society" /> */}
            <Img fluid={aboutImage.childImageSharp.fluid} alt="about society" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>napravimo promenu</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            earum aut labore?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perspiciatis molestiae culpa aspernatur?
          </p>
          <button type="button" className="btn-primary">
            procitajte vise
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
