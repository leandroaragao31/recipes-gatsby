module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
    resolve: "gatsby-source-graphql",
      options: {
        typeName: "recipedata", // nome
        fieldName: "recipedata",// nome
        url: "https://api-us-east-1.graphcms.com/v2/ckux5ljnm0bmu01z4c5ekdwos/master", //link 1 do CMS

    }
  }
]
}
