/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Udruzenje ucesnika omladinskih radnih akcija i volontera Uzica",
    description:
      "Napravimo promenu - stitimo prirodu, prenosimo znanje & cuvajmo zdravlje",
    author: "@Milan Josipovic",
    twitterUsername: "@_milanjosipovic",
    image: "/defaultBcg.jpeg",
    siteUrl: "https://gatsby-milutin-djuricic-project.netlify.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://gatsby-milutin-djuricic-project.netlify.com",
        sitemap:
          "https://gatsby-milutin-djuricic-project.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-env-variables`,
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-playground`,
  ],
}
