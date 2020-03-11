import React from "react"
import Image from "gatsby-image"
import styles from "../../css/tour.module.css"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Action = ({ action }) => {
  const { name, country, days, slug, images } = action
  let mainImage = images[0].fluid

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single action" />
        <AniLink fade className={styles.link} to={`/action/${slug}`}>
          detaljnije
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country}
          </h4>
          <div className={styles.details}>
            <h6>{days} dana</h6>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Action
