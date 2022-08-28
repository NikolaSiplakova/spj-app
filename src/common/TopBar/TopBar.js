import Button from "common/Button/Button"
import { React, memo } from "react"
import { Link } from "react-router-dom"
import { useIntl } from "react-intl"
import classnames from "classnames"

import { LOCALES } from "i18n/locales"

import { APP_ROUTES } from "constants/routes"

import { ReactComponent as TukeLogo } from "styles/icons/tukeLogo.svg"
import { ReactComponent as QuestionIcon } from "styles/icons/question.svg"
import { ReactComponent as BookIcon } from "styles/icons/book.svg"
import { ReactComponent as VisualizationIcon } from "styles/icons/visualization.svg"

import skLang from "./langs/langSK.png"
import enLang from "./langs/langEN.png"

import classes from "./TopBar.module.scss"

const TopBar = (props) => {
  const pathName = window.location.pathname
  const intl = useIntl()

  const handleLanguageSwitch = (locale) => {
    props.setLanguage(locale)
    localStorage.setItem("locale", locale)
  }

  return (
    <div className={classes["top-bar"]}>
      <div className={classes["top-bar__title"]}>
        <TukeLogo />
        <span>{intl.formatMessage({ id: "app_title" })}</span>
      </div>
      <div className={classes["navigation"]}>
        <Link className={classes["navigation__link"]} to={APP_ROUTES.ROOT}>
          <Button
            primary
            isActive={APP_ROUTES.ROOT === pathName}
            isExtended
            label={intl.formatMessage({ id: "link_visualization" })}
            icon={<VisualizationIcon className={classes["icon"]} />}
          />
        </Link>
        <Link className={classes["navigation__link"]} to={APP_ROUTES.EXAMPLES}>
          <Button
            primary
            isActive={APP_ROUTES.EXAMPLES === pathName}
            isExtended
            label={intl.formatMessage({ id: "link_examples" })}
            icon={<BookIcon className={classes["icon"]} />}
          />
        </Link>
        <Link className={classes["navigation__link"]} to={APP_ROUTES.GRAMMAR}>
          <Button
            primary
            isActive={APP_ROUTES.GRAMMAR === pathName}
            isExtended
            label={intl.formatMessage({ id: "link_grammars" })}
            icon={<QuestionIcon className={classes["icon"]} />}
          />
        </Link>
        <div className={classes["languages"]}>
          <img
            src={skLang}
            alt="SK"
            className={classnames(classes["lang"], {
              [classes["lang--disabled"]]: props.language !== LOCALES.SLOVAK,
            })}
            onClick={() => handleLanguageSwitch(LOCALES.SLOVAK)}
          />
          <img
            src={enLang}
            alt="EN"
            className={classnames(classes["lang"], {
              [classes["lang--disabled"]]: props.language !== LOCALES.ENGLISH,
            })}
            onClick={() => handleLanguageSwitch(LOCALES.ENGLISH)}
          />
        </div>
      </div>
    </div>
  )
}

export default memo(TopBar)
