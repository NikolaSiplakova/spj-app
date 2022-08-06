import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { APP_ROUTES } from "constants/routes"

import App from "./App"
import Examples from "./routes/Examples/Examples"
import Grammar from "./routes/Grammar/Grammar"
import Spj from "./routes/Spj/Spj"

import "./index.scss"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
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
)
