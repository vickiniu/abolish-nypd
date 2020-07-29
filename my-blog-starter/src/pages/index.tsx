import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/styles.css"

interface GridImageProps {
  image: any
  alt: string
  imgPosition: "right" | "center"
}

const GridImage = (props: GridImageProps) => {
  const imgMargin = props.imgPosition === "center" ? "0 auto" : "0 0 0 auto"
  return (
    <Img
      fluid={props.image}
      alt={props.alt}
      style={{
        maxWidth: "300px",
        display: "block",
        margin: imgMargin,
      }}
    />
  )
}

interface ChildProps {
  children?: any
}

const Card = (props: ChildProps) => {
  return (
    <div
      style={{
        paddingRight: "100px",
        verticalAlign: "top",
      }}
    >
      {props.children}
    </div>
  )
}

const Row = (props: ChildProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {props.children}
    </div>
  )
}

const Col = (props: ChildProps) => {
  return <div className="col">{props.children}</div>
}

const CardContainer = (props: ChildProps) => {
  return (
    <div
      className="no-link-style"
      style={{
        padding: "10px 50px 10px 50px",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
      }}
    >
      {props.children}
    </div>
  )
}

interface CallToActionProps {
  href: string
  title: string
  children?: any
}

const CallToAction = (props: CallToActionProps) => {
  return (
    <a href={props.href}>
      <div
        className="no-link-style"
        style={{
          margin: "10px",
          padding: "30px",
          textAlign: "center",
          width: "250px",
          height: "200px",
          border: "0.25px solid rgba(0, 0, 0, 0.5)",
          alignItems: "center",
        }}
      >
        <strong>{props.title}</strong>
        <br />
        {props.children}
      </div>
    </a>
  )
}

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    demand1: any
    demand2: any
    demand3: any
    demand4: any
    demand5: any
    demand6: any
  }
}

const Index = ({ data }: Props) => {
  const siteTitle = data?.site.siteMetadata.title
  return (
    <Layout location={window.location} title={siteTitle}>
      <SEO title="Abolish the NYPD" />
      <div style={{ textAlign: "center" }}>
        <h1>ABOLISH THE NYPD</h1>
        <p>
          A compilation of resources, information, and actions on defunding (and
          abolishing) the NYPD.
        </p>
      </div>

      <h2>WHY DEFUND THE NYPD?</h2>
      <p>
        We know our communities are safe and can thrive when we have housing,
        healthcare, living wages, high quality education, and public transit,
        and the resources and community-based services we need. That’s what New
        York City should be spending its money on — NOT the NYPD.
      </p>
      <p>
        When we say we want to defund the NYPD, we don’t want their funding to
        disappear into thin air — we demand that it is re-invested into our
        communities.
      </p>
      <h2>
        HOW DOES DEFUNDING GET US TO ABOLITION? WHY SHOULD WE ABOLISH THE NYPD?
      </h2>
      <blockquote style={{ marginLeft: "0px" }}>
        <p>
          As an abolitionist organizer working to end policing, incarceration
          and surveillance, and to create lasting alternatives, I know that
          “defund the police” is not just a slogan- or even the end goal. It is
          a strategic demand that gets us even closer to our mission of
          abolishing police and prisons. Yes, “defund the police” is a rallying
          cry, reminding us that we are deserving of a world without cops. But
          it is also a concrete step towards abolition. It is up to us to fight
          for that world every chance we get.
        </p>
        <p>
          — K Agbebiyi,{" "}
          <a href="https://twitter.com/sheabutterfemme">@sheabutterfemme</a>
        </p>
      </blockquote>
      <h2>WHERE DO THINGS STAND IN NYC?</h2>
      <p>
        Ending police violence starts with significant and effective cuts to the
        NYPD's budget. Over the last few weeks, thousands of New Yorkers have
        shown up in the streets, called and emailed their Council Members and
        demanded that we defund the NYPD and invest in communities — by AT LEAST
        $1 billion this year. Years of organizing by activists and advocates
        have gotten us to this critical moment.
      </p>
      <p>
        With mere days until the June 30th deadline for a final budget,{" "}
        <a
          href="https://council.nyc.gov/press/2020/06/12/1983/"
          target="_blank"
        >
          the City Council announced
        </a>{" "}
        that they “can and should work to get $1 billion in cuts” to the NYPD
        this year. While this is a win, and a step in the right direction, we
        are nowhere near done with this fight yet. In fact, it is time to fight
        harder for deeper, meaningful, and more transparent cuts- and to ensure
        that money gets invested back in New York’s communities.
      </p>
      <p>
        We need to be clear on what we’re asking for, and hold our electeds
        accountable for it. And we need to ask them to vote no on a budget that
        doesn’t deliver what the people demand.
      </p>
      <h2>WHAT DO DEEPER, MEANINGFUL, TRANSPARENT CUTS MEAN?</h2>
      <Row>
        <Col>
          <Card>
            <h3>Release the Council's detailed NYPD cuts proposal</h3>
            <p>
              We demand that the Speaker release the Council’s proposed cuts
              immediately to allow for public review and complete transparency.
            </p>
            <GridImage
              image={data.demand1.childImageSharp.fluid}
              alt={"Graphic: stack of coins"}
              imgPosition="right"
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <h3>Cut NYPD budget and officer headcount by half</h3>
            <p>
              We demand the police (operating) budget be cut by half ($3B) and
              the headcount of uniformed officers be cut by half to truly
              address police violence.
            </p>
            <GridImage
              image={data.demand2.childImageSharp.fluid}
              alt={"Graphic: fist holding a dollar bill"}
              imgPosition="center"
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <h3>Cops out of schools.</h3>
            <p>
              We demand an end to police response to issues that could be
              transitioned to community workers, and demand all officers and
              NYPD employees be removed from schools, mental health response and
              co-response teams, homeless outreach, neighborhood disputes,
              transit, and subways.
            </p>
            <GridImage
              image={data.demand3.childImageSharp.fluid}
              alt={"Graphic: schoolhouse"}
              imgPosition="right"
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <h3>Redirect funds to Black communities.</h3>
            {/* Add margin to bottom to space out the graphic better */}
            <p style={{ marginBottom: "100px" }}>
              We demand that the City redirect the billions that go to police
              departments toward providing health care, housing, social
              services, schools, childcare and eldercare, and programs that
              benefit Black people, that would create less need for police in
              the first place.
            </p>
            <GridImage
              image={data.demand4.childImageSharp.fluid}
              alt={"Graphic: two hands holding hearts"}
              imgPosition="center"
            />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <h3>Fully transparent NYPD budget.</h3>
            <p>
              We demand a fully transparent NYPD budget that is accessible to
              the public. It is unacceptable that there are large swaths of the
              NYPD budget unavailable to anyone.
            </p>
            <GridImage
              image={data.demand5.childImageSharp.fluid}
              alt={"Graphic: stack of coins"}
              imgPosition="right"
            />
          </Card>
        </Col>
        <Col>
          <Card>
            <h3>No rollbacks.</h3>
            <p>
              We demand that these cuts remain in place for future fiscal years,
              and not just as a ‘austerity budget’ measure. These cuts to the
              NYPD are in the interest of community safety and the well being of
              Black people, not just savings for the City during this fiscal
              crisis.
            </p>
            <GridImage
              image={data.demand6.childImageSharp.fluid}
              alt={"Graphic: circle with a slash through it for 'no' sign"}
              imgPosition="center"
            />
          </Card>
        </Col>
      </Row>
      <h3>TAKE ACTION</h3>
      <p>
        Here are four things you can do today to get educated, join the fight,
        and stay engaged!
      </p>
      <CardContainer>
        <CallToAction href="/contact-reps" title="Call Your Rep">
          Email and call your council member calling for #DefundNYPD today!
        </CallToAction>
        <CallToAction href="/peoples-budget" title="People's Budget">
          Where should we cut the NYPD? How should we invest at least $1B in our
          communities?
        </CallToAction>
        <CallToAction href="/resources" title="Learn More">
          Read about the City budget, why we must abolish the police, and orgs
          doing the work!
        </CallToAction>
        <CallToAction href="http://eepurl.com/g7qPnn" title="Subscribe">
          Join our email list to stay up to date on resources, actions, and
          updates!
        </CallToAction>
      </CardContainer>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    demand1: file(relativePath: { eq: "demand1.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    demand2: file(relativePath: { eq: "demand2.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    demand3: file(relativePath: { eq: "demand3.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    demand4: file(relativePath: { eq: "demand4.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    demand5: file(relativePath: { eq: "demand5.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    demand6: file(relativePath: { eq: "demand6.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
