import React from "react"
import PropTypes from "prop-types"

import classes from "./Header.module.scss"

const Header = (props) => {
  const { action, title } = props

  return (
    <div className={classes["header-holder"]}>
      <span className={classes["header-title"]}>{title}</span>
      {action}
    </div>
  )
}

export default Header

Header.propTypes = {
  action: PropTypes.node,
  title: PropTypes.string.isRequired,
}

Header.defaultProps = {
  action: null,
}
