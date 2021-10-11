module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    {
    resolve: "gatsby-source-graphql",
      options: {
        typeName: "alldata",
        fieldName: "alldata",
        url: "https://api-us-east-1.graphcms.com/v2/cku8rn0m642yc01yz16vd5076/master",

    }
  }
]
}
