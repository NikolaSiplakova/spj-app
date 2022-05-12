import "./VariableInput.scss"

const VariableInput = (props) => {
  const {
    areVariablesSet,
    errors,
    index,
    variable,
    values,
    setAreVariablesSet,
  } = props

  const inputName = `variable${index}`

  return (
    <div className="input">
      <div className="input__name">{variable.varName}</div>
      <div className="input-holder">
        <input
          className="input__text"
          type="text"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          name={inputName}
          value={values[`variable${index}`]}
        />
        {errors[`variable${index}`] !== undefined && (
          <div className="error-message">{errors[`variable${index}`]}</div>
        )}
      </div>
    </div>
  )
}

export default VariableInput
