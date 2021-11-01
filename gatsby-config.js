module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "recipes-gatsby",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
    {
    resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata", 
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/ckupxs3fv0jm901xuhz4eb6ft/master", //link 1 do CMS

    }
  }
]
}
