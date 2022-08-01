import React, { useState } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import Header from "common/Header/Header"

import { ReactComponent as CloseIcon } from "styles/icons/close.svg"
import { ReactComponent as OpenIcon } from "styles/icons/open.svg"
import { ReactComponent as InfoIcon } from "styles/icons/info.svg"

import classes from "./ComputationsTable.module.scss"
import LatexComputations from "./_components/LatexComputations/LatexComputations"

const ComputationsTable = ({ isComputed, statementsRows }) => {
  const [isWholeTable, setIsWholeTable] = useState(false)

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

  const renderActions = () => {
    if (isComputed === false) {
      return
    }

    return (
      <div className={classes["actions"]}>
        {renderArrow()}
        <InfoIcon
          className={classes["actions__action"]}
          title={"Pravidlá zvýrazňovania"}
        />
      </div>
    )
  }

  const renderTableContent = () => {
    if (isComputed === true) {
      return <LatexComputations statementsRows={statementsRows} />
    }

    return (
      <div className={classes["info-title"]}>
        Pre zobrazenie významu zadaného programu je potrebné spustiť
        vizualizáciu.
      </div>
    )
  }

  return (
    <div className={classes["computations-window"]}>
      <Header action={renderActions()} title={"Vizualizácia krokov programu"} />
      <div
        className={classnames(classes["table"], {
          [classes["table--whole"]]: isWholeTable === true,
          [classes["table--info"]]: isComputed === false,
        })}
      >
        {renderTableContent()}
      </div>
    </div>
  )
}

ComputationsTable.propTypes = {
  isComputed: PropTypes.bool.isRequired,
  statementsRow: PropTypes.array.isRequired,
}

export default ComputationsTable
