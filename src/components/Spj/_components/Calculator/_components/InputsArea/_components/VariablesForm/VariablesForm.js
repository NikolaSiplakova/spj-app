import "./VariablesForm.scss"
import _ from "lodash"
import { Formik } from "formik"
import VariableInput from "./_components/VariableInput/VariableInput"
import NoVariables from "./_components/VariableInput/VariableInput"
import { useState } from "react"

const VariableForm = (props) => {
  const {
    areVariablesSet,
    setAreVariablesSet,
    inputValues,
    setInputValues,
    programVariables,
  } = props

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
    setAreVariablesSet(true)
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

  const getButtonClassName = (errors) => {
    if (areVariablesSet === true) {
      return "btn btn--disabled"
    }
    return "btn"
  }

  return (
    <Formik
      initialValues={{}}
      validate={validate}
      enableReinitialize={true}
      onSubmit={onSubmitFunc}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => {
        return (
          <form
            onSubmit={handleSubmit}
            onChange={() => setAreVariablesSet(false)}
          >
            <div className="scrollable-holder">
              {programVariables.map((variable, index) => (
                <VariableInput
                  areVariablesSet={areVariablesSet}
                  errors={errors}
                  index={index}
                  variable={variable}
                  values={values}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setAreVariablesSet={setAreVariablesSet}
                />
              ))}
            </div>
            <div className="btn-holder">
              <button
                className={getButtonClassName(errors)}
                type="submit"
                disabled={areVariablesSet === true}
              >
                Potvrdiť
              </button>
            </div>
          </form>
        )
      }}
    </Formik>
  )
}

export default VariableForm
