module.exports = {
  siteMetadata: {
    title: 'Vlad CGI',
    author: 'Vlad',
    description: 'A Web Application Showcasing the CGI skills of Vlad',
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};