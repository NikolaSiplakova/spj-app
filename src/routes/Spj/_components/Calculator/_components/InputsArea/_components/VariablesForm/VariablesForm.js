import { React, useEffect, Fragment, memo } from "react"
import PropTypes from "prop-types"

import { Formik } from "formik"

import Header from "common/Header/Header"

import VariableInput from "./_components/VariableInput/VariableInput"
import AutoSave from "./_components/AutoSave/AutoSave"

import { ReactComponent as RefreshIcon } from "styles/icons/refresh.svg"

import classes from "./VariablesForm.module.scss"

const VariableForm = ({ setInputValues, programVariables }) => {
  const getInitialValues = () =>
    programVariables.reduce(
      (object, key, index) => ({
        ...object,
        [`variable${index}`]: 0,
      }),
      {}
    )

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
            const renderActions = () => (
              <RefreshIcon className={classes["icon"]} onClick={resetForm} />
            )

            return (
              <Fragment>
                <Header
                  action={renderActions()}
                  className={classes["header"]}
                  title="Premenné"
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
}

export default memo(VariableForm)
