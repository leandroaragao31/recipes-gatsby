module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-react-helmet`,
    {
    resolve: "gatsby-source-graphql",
      options: {
        typeName: "recipedata", 
        fieldName: "recipedata",
        url: "https://api-us-east-1.graphcms.com/v2/ckux5ljnm0bmu01z4c5ekdwos/master", //link 1 do CMS

    }
  }
]
}
