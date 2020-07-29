import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"

import { rhythm, scale } from "../utils/typography"

import "../styles/styles.css"
import "../styles/bootstrap.nav.css"
import "../styles/font-awesome-4.7.0/css/font-awesome.min.css"

interface Props {
  location: Location
  title: string
  children?: any
}

// TODO(vicki): accept page in props to set active link
const Header = () => {
  const logo = useStaticQuery(graphql`
    query LogoQuery {
      logo: file(relativePath: { eq: "fist.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div
      className="header"
      style={{
        backgroundColor: "#EFEFEF",
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: 5,
        height: "4rem",
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <Image
            fixed={logo.logo.childImageSharp.fixed}
            alt={"Abolish NYPD"}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link active" href="/">
              Home
            </a>
            <a className="nav-item nav-link" href="/contact-reps">
              Contact Your Rep
            </a>
            <a className="nav-item nav-link" href="/peoples-budget">
              People's Budget
            </a>
            <a className="nav-item nav-link" href="/learn-more">
              Learn More
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

const Footer = () => {
  const linkStyle = {
    paddingLeft: "5px",
    paddingRight: "5px",
    textDecoration: "none",
    boxShadow: "none",
    color: "rgba(0, 0, 0, 0.5)",
    margin: "auto",
  }
  return (
    <div
      className="social-footer"
      style={{
        borderTop: "0.25px solid rgba(0, 0, 0, 0.5)",
        margin: "auto",
        width: "300px",
        alignItems: "center",
        textAlign: "center",
        paddingTop: "20px",
        paddingBottom: "20px",
      }}
    >
      <p>Abolish the NYPD</p>
      <div>
        <a
          href="https://www.instagram.com/AbolishtheNYPD/"
          target="_blank"
          style={linkStyle}
        >
          <i className="fa fa-instagram fa-2x"></i>
        </a>
        <a
          href="https://twitter.com/AbolishtheNYPD"
          target="_blank"
          style={linkStyle}
        >
          <i className="fa fa-twitter fa-2x"></i>
        </a>
        <a href="http://eepurl.com/g7qPnn" target="_blank" style={linkStyle}>
          <i className="fa fa-envelope fa-2x"></i>
        </a>
      </div>
    </div>
  )
}

const Layout = ({ location, title, children }: Props) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(48),
          padding: `5rem ${rhythm(3 / 4)} ${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>{children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
