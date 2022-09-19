import React from "react"
import { EXAMPLES } from "constants/examples"

import Card from "./_components/Card/Card"

import classes from "./CardDeck.module.scss"

const CardDeck = () => {
  return (
    <div className={classes["example-card-deck"]}>
      {EXAMPLES.map((example, i) => (
        <Card example={example} key={i} orderNum={i + 1} />
      ))}
    </div>
  )
}

export default CardDeck
