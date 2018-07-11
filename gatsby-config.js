module.exports = {
  siteMetadata: {
    title: 'Isaac Bigsby Trogdon',
    desc:  'Based in Berlin DE - IBT works in web-development. Building platforms over years in media design, digital strategies.',
    keywords: 'drupal, web-development, Isaac Bigsby Trogdon'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: `<!-- end -->`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}
