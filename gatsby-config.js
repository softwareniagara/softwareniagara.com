module.exports = {
  siteMetadata: {
    title: 'Software Niagara',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-34081005-1',
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        "name": "Software Niagara",
        "short_name": "SN",
        "start_url": "/",
        background_color: "#EEF1F4",
        theme_color: "#94C1FF",
        display: "standalone",
        icon: "./src/png/favicon.png",
        include_favicon: true,
      }
    },
    // This has to come after gatsby-plugin-favicon to ingest the manifest.
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'categories',
        path: `${__dirname}/src/content/categories`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'events',
        path: `${__dirname}/src/content/events`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/content/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'venues',
        path: `${__dirname}/src/content/venues`,
      },
    },
  ],
}
