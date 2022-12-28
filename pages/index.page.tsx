import type { NextPage } from "next"
import Head from "next/head"
import {
  AppDispatch,
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../store"
import { setTheme } from "../slices/theme"
import LandingPage from "./landing-page"
import { ReactElement } from "react"
import Layout from "src/layout"

const Home = () => {
  const { theme } = useAppSelector<any>((store: RootState) => store.theme)
  const dispatch: AppDispatch = useAppDispatch()

  const themeToggler = () => {
    theme === "dark" ? dispatch(setTheme("light")) : dispatch(setTheme("dark"))
  }

  return (
    <div
      style={{
        padding: 0,
      }}
    >
      {/* <button onClick={themeToggler}>Switch</button> */}
      <LandingPage />
    </div>
  )
}

export default Home

Home.getLayout = function getLayout(children: ReactElement) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  )
}
