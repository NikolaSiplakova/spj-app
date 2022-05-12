import "./RuleHolder.scss"
import React, { useState } from "react"

const RuleHolder = (props) => {
  const { pic, title } = props
  return (
    <div className="grammar-rule">
      <div className="title">{title}</div>
      <div className="grammar-rule">
        <img src={pic} alt="" className="pic"></img>
      </div>
    </div>
  )
}

export default RuleHolder
