const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const {createNodeField } = actions

    if(node.internal.type === 'MarkdownRemark'){
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
    const res = await graphql(`
      query {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
  
      // Create blog post pages.
      res.data.allMarkdownRemark.edges.forEach(edge => {
       return createPage({
          // Path for this page — required
          component: blogPostTemplate,
          path: `/blog/${edge.node.fields.slug}`,
          context: {
           slug: edge.node.fields.slug
          },
        })
      })
    
  }