import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import { rhythm } from "../utils/typography"

import "../styles/styles.css"
import "../styles/bootstrap.nav.css"

interface HeaderProps {
  page?: string
}

const Header = (props: HeaderProps) => {
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

  const className = (page: string) => {
    return page === props.page ? "active" : ""
  }

  return (
    <div
      className="header"
      style={{
        backgroundColor: "#f8f9fb",
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: 5,
      }}
    >
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">
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
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className={className("home")} href="/">
              Home
            </Nav.Link>
            <Nav.Link
              className={className("contact-reps")}
              href="/contact-reps"
            >
              Contact Reps
            </Nav.Link>
            <Nav.Link
              className={className("peoples-budget")}
              href="/peoples-budget"
            >
              People's Budget
            </Nav.Link>
            <Nav.Link className={className("resources")} href="/resources">
              Learn More
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
