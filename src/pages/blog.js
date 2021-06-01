import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as blogStyle from './blog.module.scss'
import Head from "../components/head"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node{
            frontmatter {
              title,
              date
            },
            fields {
              slug
            }
          }
          }
        }
    }
  `)
  return (
      <Layout>
        <Head title="Blog" />
  <div>
      <h1>Blog Page </h1>
      <ol className={blogStyle.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li className={blogStyle.post} key={edge.node.frontmatter.title}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
    </Layout>
  );
}

export default Blog
