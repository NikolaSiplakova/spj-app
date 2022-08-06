import { React, memo, Fragment } from "react"
import { Formik } from "formik"

import Header from "common/Header/Header"

import VariableInput from "./_components/VariableInput/VariableInput"
import AutoSave from "./_components/AutoSave/AutoSave"

import { ReactComponent as RefreshIcon } from "styles/icons/refresh.svg"

import classes from "./VariablesForm.module.scss"

const VariableForm = (props) => {
  const { setInputValues, programVariables } = props

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

  const validate = (values) => {
    const errors = {}
    for (const [varKey, value] of Object.entries(values)) {
      const parsedInput = Number(value.trim())

      if (isNaN(parsedInput) === true) {
        errors[varKey] = "Zadaj číslo"
      }
    }
    return errors
  }

  const renderActions = () => <RefreshIcon className={classes["icon"]} />

  return (
    <div>
      <Header action={renderActions()} title="Premenné" />
      <div className={classes["variables-form"]}>
        <Formik
          initialValues={{}}
          validate={validate}
          enableReinitialize={true}
          onSubmit={onSubmitFunc}
        >
          {({ values, errors, handleChange, handleSubmit }) => {
            return (
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
                <AutoSave debounceMs={1000} />
              </form>
            )
          }}
        </Formik>
      </div>
    </div>
  )
}

export default memo(VariableForm)
