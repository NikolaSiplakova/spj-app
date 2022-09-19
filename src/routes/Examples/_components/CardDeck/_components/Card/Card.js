import React from "react"
import PropTypes from "prop-types"

import Button from "common/Button/Button"
import { ReactComponent as VisualizationIcon } from "styles/icons/visualization.svg"
import { ReactComponent as StepByStepIcon } from "styles/icons/steps.svg"

import classes from "./Card.module.scss"
import { Link } from "react-router-dom"
import { APP_ROUTES } from "constants/routes"
import { VISUALIZATION } from "constants/visualizationTypes"

const getInitialValuesString = (initialValues) => {
  return initialValues.map(
    (initialValue) => `${initialValue.varName}=${initialValue.value}`
  )
}

const Card = ({ orderNum, example }) => {
  return (
    <div className={classes["example-card"]}>
      <div className={classes["example-card-sidebar"]}>
        #{orderNum}
        <div className={classes["example-card-sidebar-buttons"]}>
          <Link
            to={APP_ROUTES.ROOT}
            state={{
              initialValues: example.initialValues,
              initialJaneCode: example.equation,
              visualizationType: VISUALIZATION.ALL_STEPS,
            }}
          >
            <Button
              primary
              isExtended={false}
              icon={<VisualizationIcon className={classes["icon"]} />}
            />
          </Link>
          <Link
            to={APP_ROUTES.ROOT}
            state={{
              initialValues: example.initialValues,
              initialJaneCode: example.equation,
              visualizationType: VISUALIZATION.STEP_BY_STEP,
            }}
          >
            <Button
              primary
              isExtended={false}
              icon={<StepByStepIcon className={classes["icon"]} />}
            />
          </Link>
        </div>
      </div>
      <div className={classes["example-card-body"]}>
        <div className={classes["example-card-body-content"]}>
          {example.equation}
        </div>
        <div className={classes["example-card-body-content"]}>
          {getInitialValuesString(example.initialValues).join(", ")}
        </div>
        <div className={classes["example-card-body-footer"]}>
          {example.specialType}
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  orderNum: PropTypes.number.isRequired,
  example: PropTypes.object.isRequired,
}

export default Card
