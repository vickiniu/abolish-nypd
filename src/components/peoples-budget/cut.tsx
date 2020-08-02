import React from "react"
import Linkify from "react-linkify"

import "../../styles/styles.css"

export interface Cut {
  name: string
  description: string
  amount: number
  reason?: string
  data?: string
}

interface PeoplesCutsCardProps {
  cut: Cut
}

const PeoplesCutsCard = (props: PeoplesCutsCardProps) => {
  const cut = props.cut
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
      <h3 style={{ margin: "10px 0px 5px 0px" }}>{cut.name}</h3>
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
        }).format(cut.amount)}
      </p>
      <p style={{ margin: "0px", fontWeight: "bold" }}>What is it?</p>
      <p style={{ margin: "0px 0px 5px 0px" }}>{cut.description}</p>
      {cut.reason && (
        <>
          <p style={{ margin: "0px", fontWeight: "bold" }}>
            Why should we cut it?
          </p>
          <p style={{ margin: "0px 0px 5px 0px" }}>{cut.reason}</p>
        </>
      )}
      {cut.data && (
        <>
          <p style={{ margin: "0px", fontWeight: "bold" }}>Data or sources</p>
          <Linkify>
            <p style={{ margin: "0px 0px 5px 0px" }}>{cut.data}</p>
          </Linkify>
        </>
      )}
    </div>
  )
}

export default PeoplesCutsCard
