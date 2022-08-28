import React from "react"
import classes from "./CardDeck.module.scss"
import PropTypes from "prop-types"
import Card from "./Card/Card"

const CardDeck =  ({ examples }) => {
  return (
    <div className={classes["example-card-deck"]}>
        {examples.map((example, i) => (
            <Card 
                example={example}
                key={i}
                orderNum={i+1}
            />
        ))}
    </div>
  )
}

CardDeck.propTypes = {
    examples: PropTypes.array.isRequired,
}

export default CardDeck
