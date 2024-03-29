import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import classes from "./Button.module.scss"

const Button = (props) => {
  const {
    icon,
    isActive,
    isExtended,
    isDisabled,
    label,
    onClick,
    primary,
    secondary,
  } = props

  return (
    <button
      className={classnames(classes["button"], {
        [classes["button--disabled"]]: isDisabled === true,
        [classes["button--primary"]]: primary === true,
        [classes["button--secondary"]]: secondary === true || isActive === true,
        [classes["button--collapsed"]]: isExtended === false,
      })}
      disabled={isDisabled}
      onClick={onClick}
      type="button"
    >
      {icon}
      <div className={classes["button__label"]}>{label}</div>
    </button>
  )
}

export default Button

Button.propTypes = {
  icon: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isExtended: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool.isRequired, //orange bckg
  secondary: PropTypes.bool.isRequired, //white bckg
}

Button.defaultProps = {
  isActive: false,
  isDisabled: false,
  isExtended: true,
  onClick: null,
  primary: true,
  secondary: false,
}
