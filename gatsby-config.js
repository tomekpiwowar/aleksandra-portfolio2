module.exports = {
  siteMetadata: {
    title: `Aleksandra Piwowar - Portfolio`,
    description: `Aleksandra Piwowar - Portfolio`,
    author: `Tomek Piwowar`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Montserrat:700", "Poppins:300,400,500,600"],
        },
      },
    },
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: require(`${__dirname}/src/assets/styles/theme.js`).lightTheme,
        dark: require(`${__dirname}/src/assets/styles/theme.js`).darkTheme,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aleksandra Portfolio`,
        short_name: `Aleksandra Portfolio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#f98bb0`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`,
  ],
}
