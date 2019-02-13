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
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/png/favicon.png',
        appName: 'Software Niagara',
        appDescription: 'Startup and tech events for everyone',
        developerName: 'Nickolas Kenyeres',
        developerURL: 'https://www.knicklabs.com',
        background: '#EEF1F4',
        short_name: "SN",
        theme_color: '#94C1FF',
        display: 'standalone',
        orientation: 'any',
        version: '0.0.1',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: true,
          yandex: false,
          windows: true,
        },
      },
    },
    // This has to come after gatsby-plugin-favicon to ingest the manifest.
    'gatsy-plugin-offline',
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
