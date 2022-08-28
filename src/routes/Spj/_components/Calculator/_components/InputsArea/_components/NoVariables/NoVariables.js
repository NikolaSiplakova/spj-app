import "./NoVariables.scss"
import { useIntl } from "react-intl"

const NoVariables = (props) => {
  const intl = useIntl()
  return (
    <div className="info">
      <span className="info__text">
        {intl.formatMessage({ id: "empty_variables" })}
      </span>
    </div>
  )
}

export default NoVariables
