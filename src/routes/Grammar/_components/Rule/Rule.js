import React, {useState} from "react"
import classes from "./Rule.module.scss"
import Header from "common/Header/Header"

import { ReactComponent as CloseIcon } from "styles/icons/close.svg"
import { ReactComponent as OpenIcon } from "styles/icons/open.svg"

const Rule = (props) => {
  const { title } = props
  const [isCollapsed, setIsCollapsed] = useState(false)
  
  const toggleCollapsed= () => {
    setIsCollapsed((current) => current === false)
  }

  const renderArrow = () => {
    if (isCollapsed === true) {
      return (
        <CloseIcon
          className={classes["actions__action"]}
          onClick={toggleCollapsed}
        />
      )
    }

    return (
      <OpenIcon
        className={classes["actions__action"]}
        onClick={toggleCollapsed}
      />
    )
  }

  const renderActions = () => {
    return (
      <div className={classes["actions"]}>
        {renderArrow()}
      </div>
    )
  }

  return (
    <div>
      <Header
        action={renderActions()}
        className={classes["header"]}
        title={title}
      />
      {isCollapsed && <div className={classes["rule-body"]}>
        Nikolka je skvela
      </div>}
    </div>
  )
}

export default Rule
