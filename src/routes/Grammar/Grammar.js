import "./Grammar.scss"
import React from "react"

import TopBar from "common/TopBar/TopBar"

const Grammar = (props) => {
  return (
    <div className="holder">
      <TopBar language={props.language} setLanguage={props.setLanguage} />
      <div className="grammar"></div>
    </div>
  )
}

export default Grammar
