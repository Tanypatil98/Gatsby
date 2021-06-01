import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as footer from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            author
          }
        }
      }
  `)

    return (
        <footer className={footer.footer}>
            <p>Copy Rights by {data.site.siteMetadata.author}</p>
        </footer>
    );
}

export default Footer