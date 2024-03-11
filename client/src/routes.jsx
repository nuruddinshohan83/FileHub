import React from "react"
import Dashboard from "./page/Dashboard"
import PageNotFound from "./page/PageNotFound"
import Login from "./page/Login"

function defineRoutes(path, element) {
  return { path: path, element: element }
}
export default function allRoutes(user) {
  // console.log(user)
  return [
    defineRoutes("*", <PageNotFound></PageNotFound>),
    defineRoutes("/", user === undefined ? <Login /> : <Dashboard />),
  ]
}
