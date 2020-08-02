import React from "react"

import "../styles/styles.css"
import "../styles/bootstrap.nav.css"
import "../styles/font-awesome-4.7.0/css/font-awesome.min.css"

const Footer = () => {
  const linkStyle = {
    paddingLeft: "10px",
    paddingRight: "10px",
    textDecoration: "none",
    boxShadow: "none",
    color: "#000",
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

export default Footer
