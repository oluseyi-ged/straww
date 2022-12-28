/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { useState } from "react"
import Nav from "./styles"

const Navbar = () => {
  const [toggle, toggleNav] = useState(false)
  const router = useRouter()

  // console.log(router)

  return (
    <Nav>
      <div className="navbar">
        <div className="navbar__identity">
          <p>STRAWW</p>
        </div>
        <div className="navbar__avi">
          <p>Avi</p>
        </div>
      </div>
    </Nav>
  )
}

export default Navbar
