module.exports = {
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    // "gatsby-plugin-manifest",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
