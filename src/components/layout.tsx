import React from "react"

import { rhythm } from "../utils/typography"
import Header from "./header"
import Footer from "./footer"

import "../styles/styles.css"
import "../styles/bootstrap.nav.css"
import "../styles/font-awesome-4.7.0/css/font-awesome.min.css"

interface Props {
  title: string
  page?: string
  children?: any
}

const Layout = ({ title, page, children }: Props) => {
  return (
    <div>
      <header>
        <Header page={page} />
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
