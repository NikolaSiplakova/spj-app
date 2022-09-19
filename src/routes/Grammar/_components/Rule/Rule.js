import React, { useState } from "react"
import classes from "./Rule.module.scss"
import Header from "common/Header/Header"

import { MathJaxContext, MathJax } from "better-react-mathjax"

import { MATHJAX_CONFIG } from "constants/mathJaxConfig"

import { ReactComponent as CloseIcon } from "styles/icons/close.svg"
import { ReactComponent as OpenIcon } from "styles/icons/open.svg"

const Rule = (props) => {
  const { title } = props
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setIsCollapsed((current) => current === false)
  }

  const renderArrow = () => {
    if (isCollapsed === true) {
      return (
        <CloseIcon
          className={classes["actions__ action"]}
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
    return <div className={classes["actions"]}>{renderArrow()}</div>
  }

  return (
    <div>
      <Header
        action={renderActions()}
        className={classes["header"]}
        title={title}
      />
      {isCollapsed && (
        <div className={classes["rule-body"]}>
          Premenná na ľavej strane nadobúda hodnotu na pravej strane, ktorá
          pochádza z inej premennej, konkrétnej číselnej hodnoty alebo hodnoty
          aritemtického výrazu.
          <br />
          Správne zápisy príkazu priradenia:
          <br />
          <MathJaxContext
            version={2}
            config={MATHJAX_CONFIG}
            onStartup={(mathJax) => (mathJax.Hub.processSectionDelay = 0)}
          >
            <MathJax inline dynamic hideUntilTypeset={"first"}>
              {`$x:=y$`}
            </MathJax>
            <div className={classes["block"]}>
              <MathJax inline dynamic hideUntilTypeset={"first"}>
                {`$x:=3$`}
              </MathJax>
            </div>
            <div className={classes["block"]}>
              <MathJax inline dynamic hideUntilTypeset={"first"}>
                {`$x:=y+3$`}
              </MathJax>
            </div>
          </MathJaxContext>
        </div>
      )}
    </div>
  )
}

export default Rule
