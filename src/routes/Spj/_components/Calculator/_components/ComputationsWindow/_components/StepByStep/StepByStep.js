import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import { ReactComponent as NextIcon } from "styles/icons/next.svg"
import { ReactComponent as NextNextIcon } from "styles/icons/next2.svg"
import { ReactComponent as BackIcon } from "styles/icons/back.svg"
import { ReactComponent as BackBackIcon } from "styles/icons/back2.svg"
import { ReactComponent as StepsIcon } from "styles/icons/steps.svg"

import classes from "./StepByStep.module.scss"

const StepByStep = ({
  allStepsCount,
  displayedStepsCount,
  setDisplayedStepsCount,
}) => {
  const handleToTheStartClick = () => {
    setDisplayedStepsCount(1)
  }

  const handleStepBackClick = () => {
    if (displayedStepsCount > 1) {
      setDisplayedStepsCount((current) => current - 1)
    }
  }

  const handleNextStepClick = () => {
    if (displayedStepsCount < allStepsCount) {
      setDisplayedStepsCount((current) => current + 1)
    }
  }

  const handleToTheEndClick = () => {
    setDisplayedStepsCount(allStepsCount)
  }

  return (
    <div className={classes["menu"]}>
      <div className={classes["back-section"]}>
        <BackBackIcon
          className={classnames(classes["icon"], classes["icon--space"], {
            [classes["icon--disabled"]]: displayedStepsCount === 1,
          })}
          onClick={handleToTheStartClick}
          title="Späť k prvému kroku"
        />
        <BackIcon
          className={classnames(classes["icon"], classes["icon--one-step"], {
            [classes["icon--disabled"]]: displayedStepsCount === 1,
          })}
          onClick={handleStepBackClick}
          title="Krok vzad"
        />
      </div>
      <StepsIcon
        className={classnames(classes["icon"], classes["icon--decoration"])}
      />
      <div className={classes["next-section"]}>
        <NextIcon
          className={classnames(
            classes["icon"],
            classes["icon--space"],
            classes["icon--one-step"],
            {
              [classes["icon--disabled"]]:
                displayedStepsCount === allStepsCount,
            }
          )}
          onClick={handleNextStepClick}
          title="Krok vpred"
        />
        <NextNextIcon
          className={classnames(classes["icon"], {
            [classes["icon--disabled"]]: displayedStepsCount === allStepsCount,
          })}
          onClick={handleToTheEndClick}
          title="Zobraziť všetky kroky"
        />
      </div>
    </div>
  )
}

StepByStep.propTypes = {
  allStepsCount: PropTypes.number.isRequired,
  displayedStepsCount: PropTypes.number.isRequired,
  setDisplayedStepsCount: PropTypes.func.isRequired,
}

export default StepByStep
