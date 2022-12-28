import React from "react"
import { Download } from "../Download"
import { Container } from "./styles"

export const Footer = () => {
  const footerOpts = [
    {
      title: "Company",
      opts: [
        {
          path: "/",
          name: "About Us",
        },
        {
          path: "/",
          name: "Privacy Policy",
        },
        {
          path: "/",
          name: "Terms of Use",
        },
        {
          path: "/",
          name: "FAQs",
        },
      ],
    },
    {
      title: "Products",
      opts: [
        {
          path: "/",
          name: "Cross-Border",
        },
        {
          path: "/",
          name: "Crypto Wallet",
        },
        {
          path: "/",
          name: "Virtual Cards",
        },
      ],
    },
    {
      title: "Connect",
      opts: [
        {
          path: "/",
          name: "Facebook",
        },
        {
          path: "/",
          name: "Instagram",
        },
        {
          path: "/",
          name: "Telegram",
        },
      ],
    },
  ]

  return (
    <Container>
      <div className="footer__logo">
        <img
          src="https://res.cloudinary.com/gigx-technologies/image/upload/v1668764383/xpad/xpad_white_idyuhs.svg"
          alt=""
        />
      </div>
      <div className="">
        <div className="footer__links">
          {footerOpts.map((opts, i) => (
            <div className="" key={i}>
              <h5>{opts.title}</h5>
              <div className="">
                {opts.opts.map((opt, i) => (
                  <p key={i}>{opt.name}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="footer__last">
          <div className="">
            <h5>CONTACT US</h5>
            <div className="">
              <p>support@gigxpad.com</p>
            </div>
          </div>
          <div className="">
            <h5>SIGN UP TO OUR NEWSLETTER</h5>
            <div className="app__subscribe">
              <input type="text" placeholder="Email Address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
