module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Business Gatsby",
    author: "@gatsbyjs",
    twitter: "twgatsbyjs",
    facebook: "fbgatsbyjs",
    description: "A business site",
  },
  plugins: [
    "gatsby-plugin-sass",
    "disqus-react", 
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-lodash",


    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Business Gatsby`,
        short_name: `B-Gatsby`,
        start_url: `/`,
        background_color: `#403434`,
        theme_color: `#0d0d0d`,
        display: `standalone`,
        icon: "src/images/icon-logo.svg",
      },
    },

    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/portfolio/` , `/blog/*`],
      },
    },


    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",

    {
      resolve: "gatsby-plugin-mdx", 
      options: {
        extensions: ['.mdx', '.md']
      }
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },


    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
};
