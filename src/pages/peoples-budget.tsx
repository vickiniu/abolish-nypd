import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PeoplesReinvestmentCard, {
  Reinvestment,
} from "../components/peoples-budget/reinvestment"
import PeoplesCutsCard, { Cut } from "../components/peoples-budget/cut"

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

interface PeoplesBudgetState {
  peoplesCuts: Cut[]
  peoplesReinvestments: Reinvestment[]
}

class PeoplesBudget extends Component<Props, PeoplesBudgetState> {
  constructor(props: Props) {
    super(props)
    this.state = {
      peoplesCuts: [],
      peoplesReinvestments: [],
    }
  }
  siteTitle = this.props.data?.site.siteMetadata.title

  componentDidMount() {
    fetch(
      `https://api.airtable.com/v0/app9sISkqADT6l3HG/Cut%20It%20(NYPD%20Budget)?api_key=${process.env.AIRTABLE_API_KEY}`
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          peoplesCuts: data.records.map((record: any) => {
            return {
              name: record.fields["What is it?"],
              description: record.fields["What to cut?"],
              amount: record.fields["How much is it?"],
              reason: record.fields["Why should we cut it?"],
              data: record.fields["Any data or sources to share?"],
            }
          }),
        })
      })
      .catch(err => {
        console.log(err)
      })

    fetch(
      `https://api.airtable.com/v0/app9sISkqADT6l3HG/Reinvest%20It%20(In%20Communities)?api_key=${process.env.AIRTABLE_API_KEY}`
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          peoplesReinvestments: data.records.map((record: any) => {
            return {
              name: record.fields["What should the City invest in?"],
              amount: record.fields["How much?"],
              reason: record.fields["How does it help our communities?"],
              data: record.fields["Any data or sources to share?"],
            }
          }),
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <Layout page="peoples-budget" title={this.siteTitle}>
        <SEO title="Peoples Budget" />
        <div style={{ textAlign: "center" }}>
          <h1>PEOPLE'S BUDGET OF NYC</h1>
        </div>
        <h2>THE NYPD BUDGET'S WAY TOO HIGH — WE NEED TO CUT IT!</h2>
        <p>
          The People's Budget is a collaborative effort to source meaningful
          cuts and reinvestments that reduce policing and meet our community
          needs. We're asking you to weigh in — all of the ideas here have been
          contributed by fellow community members, and we've love for you to add
          your own.
        </p>
        <p>
          Explore these cuts and re-investments, and add your own suggestions!
          Keep in mind, this is open source, so we want data and justifications,
          but we reject the idea of "expertise". The people know best what we
          need!
        </p>
        <h2>THE PEOPLE'S CUTS</h2>
        <p>
          Where should we cut the NYPD budget? What programs do you think need
          to go? How can we most effectively defund the NYPD? Here, we're
          looking for your specific suggestions and research!
        </p>
        <p>
          Add your suggestions for the people's cuts{" "}
          <a href="https://airtable.com/shrNhlxrqvXcCvJ4o" target="_blank">
            here
          </a>
          !
        </p>
        <div
          style={{
            marginBottom: "50px",
            position: "relative",
            zIndex: 0,
          }}
        >
          <div
            style={{
              overflowY: "auto",
              display: "flex",
            }}
          >
            {this.state.peoplesCuts.map((cut: Cut) => (
              <PeoplesCutsCard key={cut.name} cut={cut} />
            ))}
          </div>
        </div>
        <h2>THE PEOPLE'S REINVESTMENTS</h2>
        <p>
          How should we invest at least a billion dollars in our communities?
          Housing? Healthcare? Youth Services? What programs and services do we
          need?
        </p>
        <p>
          Add your reinvesmtent suggestions{" "}
          <a href="https://airtable.com/shrpWjt2QNm9kgebH" target="_blank">
            here
          </a>
          !
        </p>
        <div
          style={{
            marginBottom: "50px",
            position: "relative",
            zIndex: 0,
          }}
        >
          <div
            style={{
              overflowY: "auto",
              display: "flex",
            }}
          >
            {this.state.peoplesReinvestments.map(
              (reinvestment: Reinvestment) => (
                <PeoplesReinvestmentCard
                  key={reinvestment.name}
                  reinvestment={reinvestment}
                />
              )
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

export default PeoplesBudget
