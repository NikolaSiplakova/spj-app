import "./Grammar.scss"
import React, { useState } from "react"
import assign from "../../pics/assign.png" // Tell Webpack this JS file uses this image
import ifPic from "../../pics/if.png"
import repeat from "../../pics/repeat.png" // Tell Webpack this JS file uses this image
import whilePic from "../../pics/while.png"

import TopBar from "../../components/Spj/_components/TopBar/TopBar"
import RuleHolder from "./_components/RuleHolder/RuleHolder"

const Grammar = () => {
  return (
    <div className="holder">
      <TopBar />
      <div className="grammar">
        <RuleHolder title="Príkaz priradenia" pic={assign} />
        <RuleHolder title="Podmieňovací príkaz" pic={ifPic} />
        <RuleHolder title="Príkaz cyklu while" pic={whilePic} />
        <RuleHolder title="Príkaz cyklu repeat" pic={repeat} />
      </div>
    </div>
  )
}

export default Grammar
