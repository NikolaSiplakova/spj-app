import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import classes from "./Header.module.scss"

const Header = (props) => {
  const { action, className, title } = props

  return (
    <div
      className={classnames(classes["header-holder"], {
        [className]: className !== null,
      })}
    >
      <span className={classes["header-title"]}>{title}</span>
      {action}
    </div>
  )
}

export default Header

Header.propTypes = {
  action: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
}

Header.defaultProps = {
  action: null,
  className: null,
}
