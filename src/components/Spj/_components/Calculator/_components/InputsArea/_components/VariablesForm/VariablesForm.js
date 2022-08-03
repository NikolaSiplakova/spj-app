import { React, memo } from "react"
import "./VariablesForm.scss"
import { Formik } from "formik"
import VariableInput from "./_components/VariableInput/VariableInput"
import AutoSave from "./_components/AutoSave/AutoSave"

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
        handleSubmit,
        isSubmitting,
      }) => {
        return (
          <form onSubmit={handleSubmit} onChange={handleChange}>
            <div className="scrollable-holder">
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
  )
}

export default memo(VariableForm)
