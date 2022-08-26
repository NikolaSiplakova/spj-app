import Button from "common/Button/Button"
import { React, memo } from "react"
import { Link } from "react-router-dom"
import { useIntl } from "react-intl"

import { APP_ROUTES } from "constants/routes"

import { ReactComponent as TukeLogo } from "styles/icons/tukeLogo.svg"
import { ReactComponent as QuestionIcon } from "styles/icons/question.svg"
import { ReactComponent as BookIcon } from "styles/icons/book.svg"
import { ReactComponent as VisualizationIcon } from "styles/icons/visualization.svg"

import skLang from "./langs/langSK.png"
import enLang from "./langs/langEN.png"

import classes from "./TopBar.module.scss"

const TopBar = () => {
  const pathName = window.location.pathname
  const intl = useIntl()

  return (
    <div className={classes["top-bar"]}>
      <div className={classes["top-bar__title"]}>
        <TukeLogo />
        <span>{intl.formatMessage({ id: "app_title" })}</span>
      </div>
      <div className={classes["navigation"]}>
        <Link
          className={classes["navigation__link"]}
          to={APP_ROUTES.VISUALIZATION}
        >
          <Button
            primary
            isActive={
              APP_ROUTES.VISUALIZATION === pathName ||
              APP_ROUTES.ROOT === pathName
            }
            isExtended
            label="Vizualizácia"
            icon={<VisualizationIcon className={classes["icon"]} />}
          />
        </Link>
        <Link className={classes["navigation__link"]} to={APP_ROUTES.EXAMPLES}>
          <Button
            primary
            isActive={APP_ROUTES.EXAMPLES === pathName}
            isExtended
            label="Učebnica"
            icon={<BookIcon className={classes["icon"]} />}
          />
        </Link>
        <Link className={classes["navigation__link"]} to={APP_ROUTES.GRAMMAR}>
          <Button
            primary
            isActive={APP_ROUTES.GRAMMAR === pathName}
            isExtended
            label="Gramatika"
            icon={<QuestionIcon className={classes["icon"]} />}
          />
        </Link>
        <div className={classes["languages"]}>
          <img src={skLang} alt="SK" className={classes["lang"]} />
          <img src={enLang} alt="EN" className={classes["lang"]} />
        </div>
      </div>
    </div>
  )
}

export default memo(TopBar)
