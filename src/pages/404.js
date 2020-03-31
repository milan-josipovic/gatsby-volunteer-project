import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"
export default function error() {
  return (
    <Layout>
      <SEO title="Error" />
      <header className={styles.error}>
        <Banner title="ups stranica ne postoji">
          <AniLink fade to="/" className="btn-white">
            nazad na pocetnu stranu
          </AniLink>
        </Banner>
      </header>
    </Layout>
  )
}
