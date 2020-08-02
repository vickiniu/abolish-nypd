import React from "react"

import "../styles/styles.css"

interface EmailProps {
  name: string | undefined
  neighborhood: string | undefined
}

const Email = (props: EmailProps) => {
  const name = props.name ? props.name : "[NAME]"
  const neighborhood = props.neighborhood
    ? props.neighborhood
    : "[NEIGHBORHOOD]"

  const emailText = `Dear Councilmember,

My name is ${name} and I am a resident of ${neighborhood}. I was disappointed when the Council failed to effectively defund the NYPD, not even reaching $1M in real cuts. Meanwhile, there were huge budget cuts to social services, education, and youth programs with many Black and brown New Yorkers outside of the NYPD losing their jobs.

At the same time, we have seen the NYPD use excessive force and violence time and time again. Most recently, they grabbed a young woman off the streets in an unmarked van, using incredible force during a peaceful occasion. The demonstrations at City Hall have been terrorized and razed down repeatedly by the NYPD, destroying one of the few safe havens left in the city for those needing housing, food, or just a sense of community.

While the FY2021 budget adoption vote is over, I urge you to commit to defunding and reducing the scale of the NYPD. Budgets are moral documents, and it is clear that the NYPD is an institution of violence and oppression in New York City that is not keeping our communities safe. I will continue to call and fight for cut overtime, a hiring freeze, and a moratorium on equipment, firearm, and military expenses. I want police out of our schools, off our streets, and out of homeless and other social services. The City Council has failed New Yorkers, and we  will not forget.

Thank you,
${name}
  `

  const body = encodeURIComponent(emailText)
  const subject = encodeURIComponent("Defund + Abolish the NYPD")
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&su=${subject}&body=${body}&bcc=${emails}`
  const mailUrl = `mailto:?bcc${emails}&subject=${subject}&body=${body}`
  return (
    <>
      <div
        style={{
          padding: "50px",
          backgroundColor: "white",
          margin: "50px 0px",
          borderRadius: "8px",
          boxShadow: "rgba(184, 194, 215, 0.35) 0px 6px 9px 0px",
        }}
      >
        <p>Dear Councilmember,</p>
        <p>
          My name is {name} and I am a resident of {neighborhood}. I was
          disappointed when the Council failed to effectively defund the NYPD,
          not even reaching $1M in real cuts. Meanwhile, there were huge budget
          cuts to social services, education, and youth programs with many Black
          and brown New Yorkers outside of the NYPD losing their jobs.
        </p>
        <p>
          At the same time, we have seen the NYPD use excessive force and
          violence time and time again. Most recently, they grabbed a young
          woman off the streets in an unmarked van, using incredible force
          during a peaceful occasion. The demonstrations at City Hall have been
          terrorized and razed down repeatedly by the NYPD, destroying one of
          the few safe havens left in the city for those needing housing, food,
          or just a sense of community.
        </p>
        <p>
          While the FY2021 budget vote is over, I urge you to commit to
          defunding and reducing the scale of the NYPD. Budgets are moral
          documents, and it is clear that the NYPD is an institution of violence
          and oppression in New York City that is not keeping our communities
          safe. I will continue to call and fight for cut overtime, a hiring
          freeze, and a moratorium on equipment, firearm, and military expenses.
          I want police out of our schools, off our streets, and out of homeless
          and other social services. The City Council has failed New Yorkers,
          and we will not forget.
        </p>
        <p>
          Thank you,
          <br />
          {name}
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            marginLeft: "5px",
            marginRight: "5px",
            maxWidth: "200px",
            textAlign: "center",
          }}
        >
          <a href={gmailUrl} target="_blank">
            <button>Send with Gmail</button>
          </a>
        </div>
        <div
          style={{
            marginLeft: "5px",
            marginRight: "5px",
            maxWidth: "200px",
            textAlign: "center",
          }}
        >
          <a href={mailUrl}>
            <button>Send with Mail App</button>
          </a>
          <p style={{ margin: "5px" }}>
            <i>(best for mobile)</i>
          </p>
        </div>
      </div>
    </>
  )
}

const emails = `
  mguerra@council.nyc.gov,
  district2@council.nyc.gov,
  speakerjohnson@council.nyc.gov,
  kpowers@council.nyc.gov,
  bkallos@council.nyc.gov,
  helen@helenrosenthal.com,
  district7@council.nyc.gov,
  dayala@council.nyc.gov,
  d09perkins@council.nyc.gov,
  yrodriguez@council.nyc.gov,
  district11@council.nyc.gov,
  andy.king@council.nyc.gov,
  MGjonaj@council.nyc.gov,
  fcabrera@council.nyc.gov,
  Rtorres@council.nyc.gov,
  District16Bronx@council.nyc.gov,
  salamanca@council.nyc.gov,
  RDiaz@council.nyc.gov,
  district19@council.nyc.gov,
  pkoo@council.nyc.gov,
  FMoya@council.nyc.gov,
  nroloson@council.nyc.gov,
  nwidzowski@council.nyc.gov,
  BGrodenchik@council.nyc.gov,
  RLancman@council.nyc.gov,
  dromm@council.nyc.gov,
  arasoulinejad@council.nyc.gov,
  bclarke@council.nyc.gov,
  Adams@council.nyc.gov,
  JWilkerson@council.nyc.gov,
  KMooney@council.nyc.gov,
  Koslowitz@council.nyc.gov,
  District30@council.nyc.gov,
  dkurzyna@council.nyc.gov,
  swong@council.nyc.gov,
  drichards@council.nyc.gov,
  msilva@council.nyc.gov,
  bscott@council.nyc.gov,
  eulrich@council.nyc.gov,
  LCumbo@council.nyc.gov,
  district36@council.nyc.gov,
  meugene@council.nyc.gov,
  District41@council.nyc.gov,
  jsimmons@council.nyc.gov,
  mwashington@council.nyc.gov,
  AskJB@council.nyc.gov,
  AskKalman@council.nyc.gov,
  District45@council.nyc.gov,
  SPierre@council.nyc.gov,
  HNolasco@council.nyc.gov,
  AMaisel@council.nyc.gov,
  MTreyger@council.nyc.gov,
  cdeutsch@council.nyc.gov,
  DROSE@Council.nyc.gov,
  SMatteo@council.nyc.gov,
  borelli@council.nyc.gov,
  cojo63@gmail.com,
  ydanisrodriguez@hotmail.com,
  AndyJCohen@optonline.net,
  councilmanandyking@gmail.com,
  mcarroyo17@yahoo.com,
  peterkoo88@gmail.com,
  daneek7@hotmail.com,
  stephenlevin9@yahoo.com,
  cornegyr@yahoo.com,
  inezdbarron@aol.com,
  ben@benkallos.com`

export default Email
