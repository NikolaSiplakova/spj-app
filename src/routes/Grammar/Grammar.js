import classes from "./Grammar.module.scss"
import React from "react"
import { useIntl } from "react-intl"

import TopBar from "common/TopBar/TopBar"
import Rule from "./_components/Rule/Rule"

const Grammar = (props) => {
  const intl = useIntl()
  return (
    <div className={classes["holder"]}>
      <TopBar language={props.language} setLanguage={props.setLanguage} />
      <div className={classes["grammar"]}>
        <Rule title={intl.formatMessage({"id": "assignment_command"})}/>
        <Rule title={intl.formatMessage({"id": "conditional_command"})}/>
        <Rule title={intl.formatMessage({"id": "while_command"})}/>
        <Rule title={intl.formatMessage({"id": "repeat_command"})}/>
      </div>
    </div>
  )
}

export default Grammar
