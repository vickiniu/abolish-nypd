import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Email from "../components/email"

import "../styles/styles.css"

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

const ContactReps = ({ data }: Props) => {
  // Use React state to render name and neighborhood in email template
  const [neighborhood, setNeighborhood] = React.useState<string>()
  const [name, setName] = React.useState<string>()
  const [visible, setVisible] = React.useState(false)

  const siteTitle = data?.site.siteMetadata.title
  return (
    <Layout page="contact-reps" title={siteTitle}>
      <SEO title="Contact Reps" />
      <h1 style={{ textAlign: "center" }}>CONTACT YOUR REP</h1>
      <h2>TAKE ACTION TODAY</h2>
      <p>
        This year, the City Council made a disappointing vote to keep the NYPD
        budget almost entirely intact using{" "}
        <a href="https://www.cityandstateny.com/articles/politics/new-york-city/did-de-blasio-actually-defund-nypd.html">
          shady budget tricks
        </a>
        . We still have cops in our schools, on our streets, in homelessness
        services, and being paid enormous overtime to police and terrorize New
        Yorkers.
      </p>
      <p>
        While the vote on the adopted budget is over, it is always important to
        let our elected representatives know that the people demand the NYPD be
        defunded, and that we see through their budget smoke and mirrors.
      </p>
      <h3>EMAIL NYC CITY COUNCIL</h3>
      <div>
        <label style={{ display: "block", marginTop: "5px" }}>Name</label>
        <input
          id="name"
          style={{ display: "block", marginTop: "5px" }}
          onChange={event => setName(event.target.value)}
        />
        <label style={{ display: "block", marginTop: "5px" }}>
          Neighborhood / Borough
        </label>
        <input
          id="neighborhood"
          style={{ display: "block", marginTop: "5px" }}
          onChange={event => setNeighborhood(event.target.value)}
        />
        <button
          style={{
            marginTop: "10px",
          }}
          onClick={() => {
            setVisible(true)
          }}
        >
          Generate Email
        </button>
        {visible && <Email name={name} neighborhood={neighborhood} />}
      </div>
    </Layout>
  )
}

export default ContactReps
