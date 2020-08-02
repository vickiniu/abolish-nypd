import React from "react"
import Linkify from "react-linkify"

import "../../styles/styles.css"

export interface Reinvestment {
  name: string
  amount: number
  reason?: string
  data?: string
}

interface PeoplesReinvestmentCardProps {
  reinvestment: Reinvestment
}

const PeoplesReinvestmentCard = (props: PeoplesReinvestmentCardProps) => {
  const reinvestment = props.reinvestment
  return (
    <div
      style={{
        minHeight: "160px",
        border: "0.25px solid #efefef",
        boxShadow: "rgba(0, 0, 0, 0.2) 2px 2px 0 1px",
        padding: "0.6em",
        marginRight: "1em",
        marginBottom: "1em",
        backgroundColor: "white",
        width: "350px",
        minWidth: "350px",
        maxWidth: "350px",
        overflowWrap: "break-word",
      }}
    >
      <h3 style={{ margin: "10px 0px 5px 0px" }}>{reinvestment.name}</h3>
      <p
        style={{
          fontStyle: "italic",
          color: "grey",
          margin: "0px 0px 5px 0px",
        }}
      >
        {/* TODO(vicki): format this as $X.XM or $ABCk if possible for readability */}
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "usd",
        }).format(reinvestment.amount)}
      </p>
      {reinvestment.reason && (
        <>
          <p style={{ margin: "0px", fontWeight: "bold" }}>
            How does it help our communities?
          </p>
          <p style={{ margin: "0px 0px 5px 0px" }}>{reinvestment.reason}</p>
        </>
      )}
      {reinvestment.data && (
        <>
          <p style={{ margin: "0px", fontWeight: "bold" }}>Data or sources</p>
          <Linkify>
            <p style={{ margin: "0px 0px 5px 0px" }}>{reinvestment.data}</p>
          </Linkify>
        </>
      )}
    </div>
  )
}

export default PeoplesReinvestmentCard
