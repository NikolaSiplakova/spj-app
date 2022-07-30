import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import classes from "./Button.module.scss"

const Button = (props) => {
  const { icon, isExtended, label, onClick, primary, secondary } = props

  return (
    <button
      className={classnames(classes["button"], {
        [classes["button--primary"]]: primary === true,
        [classes["button--secondary"]]: secondary === true,
        [classes["button--collapsed"]]: isExtended === false,
      })}
      onClick={onClick}
    >
      {icon}
      <div className={classes["button__label"]}>{label}</div>
    </button>
  )
}

export default Button

Button.propTypes = {
  icon: PropTypes.node.isRequired,
  isExtended: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  primary: PropTypes.bool.isRequired, //orange bckg
  secondary: PropTypes.bool.isRequired, //white bckg
}

Button.defaultProps = {
  isExtended: true,
  primary: true,
  secondary: false,
}
