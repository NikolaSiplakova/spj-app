import { React, useEffect, Fragment, memo } from "react"
import { useIntl } from "react-intl"
import PropTypes from "prop-types"

import { Formik } from "formik"

import { VISUALIZATION } from "constants/visualizationTypes"

import Header from "common/Header/Header"
import VariableInput from "./_components/VariableInput/VariableInput"
import AutoSave from "./_components/AutoSave/AutoSave"

import { ReactComponent as RefreshIcon } from "styles/icons/refresh.svg"

import classes from "./VariablesForm.module.scss"

const VariableForm = ({
  programVariables,
  setInputValues,
  setVisualizationType,
}) => {
  const intl = useIntl()

  const getInitialValues = () =>
    programVariables.reduce((object, key, index) => {
      return {
        ...object,
        [`variable${index}`]: key.value,
      }
    }, {})

  useEffect(() => {
    onSubmitFunc(getInitialValues())
  }, [])

  const onSubmitFunc = (values) => {
    setInputValues(
      programVariables.map((variable, index) => {
        const submitValue =
          values[`variable${index}`] === undefined
            ? 0
            : Number(values[`variable${index}`])

        return {
          ...variable,
          value: submitValue,
        }
      })
    )
    setVisualizationType(VISUALIZATION.NONE)
  }

  return (
    <div>
      <div className={classes["variables-form"]}>
        <Formik
          initialValues={getInitialValues()}
          enableReinitialize={true}
          onSubmit={onSubmitFunc}
        >
          {({ values, errors, handleChange, handleSubmit, resetForm }) => {
            const resetVariablesForm = () => {
              resetForm()
              setVisualizationType(VISUALIZATION.NONE)
            }

            const renderActions = () => (
              <RefreshIcon
                className={classes["icon"]}
                onClick={resetVariablesForm}
              />
            )

            return (
              <Fragment>
                <Header
                  action={renderActions()}
                  className={classes["header"]}
                  title={intl.formatMessage({ id: "variables" })}
                />
                <form onSubmit={handleSubmit} onChange={handleChange}>
                  <div className={classes["scrollable-holder"]}>
                    {programVariables.map((variable, index) => (
                      <VariableInput
                        errors={errors}
                        index={index}
                        variable={variable}
                        values={values}
                        key={index}
                      />
                    ))}
                  </div>
                  <AutoSave debounceMs={100} />
                </form>
              </Fragment>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}

VariableForm.propTypes = {
  programVariables: PropTypes.array.isRequired,
  setInputValues: PropTypes.func.isRequired,
  setVisualizationType: PropTypes.func.isRequired,
}

export default memo(VariableForm)
