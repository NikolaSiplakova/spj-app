import "./TopBar.scss"
import { Link } from "react-router-dom"

const TopBar = () => {
  return (
    <div>
      <div className="top-bar">
        <img
          src="https://kpi.fei.tuke.sk/sites/www2.kpi.fei.tuke.sk/files/logo-kpi-web_0.png"
          alt=""
        />
        <div className="top-bar__title">Sémantika programovacích jazykov</div>
      </div>
      <div className="second-line">
        <Link className="second-line__link" to="/visualisation">
          Vizualizácia
        </Link>
        <Link className="second-line__link" to="/grammar">
          Gramatika
        </Link>
      </div>
    </div>
  )
}

export default TopBar
