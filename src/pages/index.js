import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="volonteri u akciji"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, cupiditate."
      >
        <Link to="/action" className="btn-white">
          istrazite akcije
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)
