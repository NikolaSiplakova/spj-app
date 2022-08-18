import _ from "lodash"
import classes from "./VariableInput.module.scss"

const VariableInput = (props) => {
  const { errors, index, variable, values } = props

  const inputName = `variable${index}`

  return (
    <div className={classes["input-holder"]}>
      <label htmlFor={`input${index}`} className={classes["label"]}>
        {variable.varName}
      </label>
      <input
        className={classes["text"]}
        id={`input${index}`}
        type="number"
        onChange={_.noop}
        onFocus={(e) => e.target.select()}
        name={inputName}
        placeholder="Zadaj hodnotu premennej"
        value={values[`variable${index}`]}
      />
      {errors[`variable${index}`] !== undefined && (
        <div className={classes["error-message"]}>
          {errors[`variable${index}`]}
        </div>
      )}
    </div>
  )
}

export default VariableInput
