import { React, memo } from "react"
import { Link } from "react-router-dom"

import "./TopBar.scss"

const TopBar = () => (
  <div>
    <div className="top-bar">
      <img
        src="https://kpi.fei.tuke.sk/sites/www2.kpi.fei.tuke.sk/files/logo-kpi-web_0.png"
        alt=""
      />
      <div className="top-bar__title">Sémantika programovacích jazykov</div>
    </div>
    <div className="second-line">
      <Link className="second-line__link" to="/spj-app/visualisation">
        Vizualizácia
      </Link>
      <Link className="second-line__link" to="/spj-app/grammar">
        Gramatika
      </Link>
    </div>
  </div>
)

export default memo(TopBar)
