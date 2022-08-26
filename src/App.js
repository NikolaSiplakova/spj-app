import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { IntlProvider } from "react-intl"
import { LOCALES } from "i18n/locales"
import { messages } from "i18n/messages"

import { APP_ROUTES } from "constants/routes"

import Examples from "./routes/Examples/Examples"
import Grammar from "./routes/Grammar/Grammar"
import Spj from "./routes/Spj/Spj"

import "./App.scss"

function App() {
  const [language, setLanguage] = useState(LOCALES.SLOVAK)

  return (
    <IntlProvider
      messages={messages[language]}
      locale={language}
      defaultLocale={LOCALES.ENGLISH}
    >
      <BrowserRouter>
        <Routes>
          <Route path={APP_ROUTES.GRAMMAR} element={<Grammar />} />
          <Route path={APP_ROUTES.EXAMPLES} element={<Examples />} />
          <Route path={APP_ROUTES.ROOT} element={<Spj />} />
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  )
}

export default App
