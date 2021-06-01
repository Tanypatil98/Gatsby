import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as headerStyle from "./header.module.scss"

const Header = () => {
    const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
    

    return  (
        <header>
            <h1>
                <Link className={headerStyle.title} to="/">{data.site.siteMetadata.title}</Link>
            </h1>
            <nav>
                <ul className={headerStyle.navList}>
                    <li>
                        <Link to="/" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>Home</Link>
                    </li>
                    <li>
                        <Link to="/blog" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/about" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header