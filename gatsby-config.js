/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Udruzenje ucesnika omladinskih radnih akcija i volontera Uzica",
    description:
      "Napravimo promenu - stitimo prirodu, prenosimo znanje & cuvajmo zdravlje",
    author: "@Milan Josipovic",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
  ],
}
