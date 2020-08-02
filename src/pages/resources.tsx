import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

interface Props {
  data: {
    allMarkdownRemark: any
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const Posts = ({ data }: Props) => {
  const siteTitle = data?.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout page="resources" title={siteTitle}>
      <SEO title="Learn More" />
      <div style={{ textAlign: "center" }}>
        <h1>RESOURCES ON ABOLITION</h1>
      </div>
      <blockquote style={{ marginLeft: "0px" }}>
        <p>
          There is not a single era in United States history in which the police
          were not a force of violence against black people. Policing in the
          South emerged from the slave patrols in the 1700 and 1800s that caught
          and returned runaway slaves. In the North, the first municipal police
          departments in the mid-1800s helped quash labor strikes and riots
          against the rich. Everywhere, they have suppressed marginalized
          populations to protect the status quo.
        </p>
        <p>
          — Mariame Kaba,{" "}
          <a href="https://www.nytimes.com/2020/06/12/opinion/sunday/floyd-abolish-defund-police.html">
            New York Times
          </a>
        </p>
      </blockquote>

      {posts.map(({ node }: any) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        )
      })}
    </Layout>
  )
}

export default Posts

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
