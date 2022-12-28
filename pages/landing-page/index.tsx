import React, { useState } from "react"
import { Container } from "./styles"
import { useRouter } from "next/router"

const LandingPage = () => {
  const poolData = [
    {
      id: 1,
      name: "Bola Ahmed Tinubu",
      party: "All Progressive Congress (APC)",
      lr: 65,
      odds: 0.87,
      rate: 74,
      status: "up",
      img: "https://cdn.punchng.com/wp-content/uploads/2022/06/09141433/Bola-Tinubu-.jpg",
    },
    {
      id: 2,
      name: "Dr. Peter Obi",
      party: "Labour Party (LP)",
      lr: 75,
      odds: 4.87,
      rate: 72,
      status: "down",
      img: "https://leadership.ng/wp-content/uploads/2022/06/Peter-Obi-.webp",
    },
    {
      id: 3,
      name: "Atiku Abubakar",
      party: "People Democratic Party (PDP)",
      lr: 58,
      odds: 7.07,
      rate: 58,
      status: null,
      img: "https://www.channelstv.com/wp-content/uploads/2022/09/Atiku-Abubakar.jpg",
    },
    {
      id: 4,
      name: "Rabiu Kwankwaso",
      party: "WTH this MF",
      lr: 45,
      odds: 8.47,
      rate: 48,
      status: "up",
      img: "https://media.premiumtimesng.com/wp-content/files/2022/09/Rabiu-Kwankwaso-636x419-1.jpg",
    },
  ]
  const [tab, setTab] = useState("rates")
  const router = useRouter()

  return (
    <Container>
      <div className="page__toggler">
        <div
          className={tab === "rates" ? "toggle__active" : "toggle__disabled"}
          onClick={() => setTab("rates")}
        >
          <p>Ratings</p>
        </div>
        <div
          className={tab !== "rates" ? "toggle__active" : "toggle__disabled"}
          onClick={() => setTab("candidates")}
        >
          <p>Candidates</p>
        </div>
      </div>

      {tab === "rates" ? (
        <div className="rates__tab">
          <p className="rates__tab__header">Current Rating</p>

          <div className="rates__tab__list">
            {poolData.map((data, i) => (
              <div className="rates__tab__item" key={i}>
                <div className="rates__tab__item__left">
                  <img src={data?.img} alt="" />
                  <div className="item__extras">
                    <h4>{data?.name}</h4>
                    <p>Last Ranking - {data?.lr}%</p>
                    <p>
                      Current Odds <span>{data?.odds}</span>
                    </p>
                  </div>
                </div>
                <div className="rates__tab__item__right">
                  <h2>{data?.rate}</h2>
                </div>
              </div>
            ))}
          </div>

          <div className="perf__section">
            <p className="rates__tab__header">Performance Index</p>
            <div className="perf__graph" />
          </div>
        </div>
      ) : (
        <div className="rates__tab">
          <div className="rates__tab__list">
            {poolData.map((data, i) => (
              <div
                className="rates__tab__item"
                key={i}
                onClick={() => router.push("/details")}
              >
                <div className="rates__tab__item__left">
                  <img src={data?.img} alt="" />
                  <div className="item__extras">
                    <h4>{data?.name}</h4>
                    <p className="candidates__texts">{data?.party}</p>
                    <div className="canditate__extra__grid">
                      <div className="grid__item">
                        <p>
                          <span>⚫️</span>
                          {data?.lr}%
                        </p>
                      </div>
                      <div className="grid__item">
                        <p>
                          <span>⚫️</span>
                          {data?.rate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rates__tab__item__right">
                  <p>{">"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Container>
  )
}

export default LandingPage
