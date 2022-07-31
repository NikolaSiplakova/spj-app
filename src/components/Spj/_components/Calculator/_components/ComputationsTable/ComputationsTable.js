import React, { useState } from "react"
import classnames from "classnames"

import ComputationRow from "./_components/ComputationRow/ComputationRow"
import Header from "common/Header/Header"

import { ReactComponent as CloseIcon } from "styles/icons/close.svg"
import { ReactComponent as OpenIcon } from "styles/icons/open.svg"
import { ReactComponent as InfoIcon } from "styles/icons/info.svg"

import classes from "./ComputationsTable.module.scss"
import ResultsRow from "./_components/ResultsRow/ResultsRow"

const ComputationsTable = ({ statementsRows }) => {
  const [isWholeTable, setIsWholeTable] = useState(false)

  const lastRow = statementsRows[statementsRows.length - 1]
  console.log(lastRow)
  const toggleWholeWindow = () => {
    setIsWholeTable((current) => current === false)
  }

  const renderArrow = () => {
    if (isWholeTable === true) {
      return (
        <CloseIcon
          className={classes["actions__action"]}
          onClick={toggleWholeWindow}
        />
      )
    }

    return (
      <OpenIcon
        className={classes["actions__action"]}
        onClick={toggleWholeWindow}
      />
    )
  }

  const renderActions = () => (
    <div className={classes["actions"]}>
      {renderArrow()}
      <InfoIcon
        className={classes["actions__action"]}
        title={"Pravidlá zvýrazňovania"}
      />
    </div>
  )

  return (
    <div className={classes["computations-window"]}>
      <Header action={renderActions()} title={"Vizualizácia krokov programu"} />
      <div
        className={classnames(classes["table"], {
          [classes["table--whole"]]: isWholeTable === true,
        })}
      >
        {statementsRows.map((statementsRow, index) => (
          <ComputationRow
            key={index}
            index={index}
            statementsRow={statementsRow}
          />
        ))}
        <ResultsRow state={lastRow.state} variables={lastRow.variables} />
      </div>
    </div>
  )
}

export default ComputationsTable
