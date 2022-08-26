import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { IntlProvider } from "react-intl"
import { LOCALES } from "i18n/locales"
import { messages } from "i18n/messages"

import { APP_ROUTES } from "constants/routes"

import App from "./App"
import Examples from "./routes/Examples/Examples"
import Grammar from "./routes/Grammar/Grammar"
import Spj from "./routes/Spj/Spj"

import "./index.scss"

const locale = LOCALES.SLOVAK

const root = ReactDOM.createRoot(document.getElementById("root"))
//const [language, setLanguage] = useState(locale)

root.render(
  <IntlProvider
    messages={messages[locale]}
    locale={locale}
    defaultLocale={LOCALES.ENGLISH}
  >
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path={APP_ROUTES.ROOT} element={<App />} />
        {/*maybe the path is /spj-app/ */}
        <Route path={APP_ROUTES.GRAMMAR} element={<Grammar />} />
        <Route path={APP_ROUTES.VISUALIZATION} element={<Spj />} />
        <Route path={APP_ROUTES.EXAMPLES} element={<Examples />} />
      </Routes>
    </BrowserRouter>
  </IntlProvider>
)
