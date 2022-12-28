import { Footer } from "@modules/application"
import React from "react"
// import { Footer } from "src/component/Footer"
import Navbar from "src/component/Navbar"
import Container from "./styles"

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <Container>
      <div className="link__container">
        <Navbar />
      </div>
      <main className="">{children}</main>
      {/* <Footer /> */}
    </Container>
  )
}

export default Layout
