import { ReactElement, useState } from "react"
import Layout from "src/layout"
import { Container } from "./styles"
import { useRouter } from "next/router"
import Button from "@components/application/Button"

const Details = () => {
  const router = useRouter()
  const [tab, setTab] = useState("bio")
  const [stake, setStake] = useState(false)

  const poolData = {
    id: 1,
    name: "Bola Ahmed Tinubu",
    party: "All Progressive Congress (APC)",
    lr: 65,
    odds: 0.87,
    rate: 74,
    status: "up",
    img: "https://cdn.punchng.com/wp-content/uploads/2022/06/09141433/Bola-Tinubu-.jpg",
  }

  const manifesto = [
    {
      id: 1,
      title: "Infrastructure",
      dets: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim arcu at est vulputate tempus.",
    },
    {
      id: 2,
      title: "Credit Financing",
      dets: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim arcu at est vulputate tempus.",
    },
    {
      id: 3,
      title: "Mortgage",
      dets: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim arcu at est vulputate tempus.",
    },
    {
      id: 4,
      title: "Debt Financing",
      dets: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim arcu at est vulputate tempus.",
    },
    {
      id: 5,
      title: "Budget",
      dets: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim arcu at est vulputate tempus.",
    },
  ]

  return (
    <Container>
      {stake ? (
        <div className="stake__header">
          <p>Stake</p>

          <p onClick={() => setStake(false)}>
            <span>x</span> Cancel
          </p>
        </div>
      ) : (
        <div className="page__back" onClick={() => router.back()}>
          <p>
            <span>{"<   "}</span> Back
          </p>
        </div>
      )}

      <div className="data__section">
        {tab !== "interviews" && !stake && (
          <div className="data__section__img">
            <img src={poolData.img} alt="" />
          </div>
        )}
        <div className="data__section__dets">
          <div className="data__section__dets__left">
            <p>{poolData.name}</p>
            <p>{poolData.party}</p>
          </div>
          <div className="data__section__dets__right">
            <p>{poolData.rate}</p>
            <p>
              Odds <span>{poolData.odds}</span>
            </p>
          </div>
        </div>
        {!stake ? (
          <div className="data__section__main">
            <div className="data__section__main__toggle">
              <div
                className={
                  tab === "bio" ? "toggle__active" : "toggle__disabled"
                }
                onClick={() => setTab("bio")}
              >
                <p>Bio</p>
              </div>
              <div
                className={
                  tab === "mani" ? "toggle__active" : "toggle__disabled"
                }
                onClick={() => setTab("mani")}
              >
                <p>Manifesto</p>
              </div>
              <div
                className={
                  tab === "interviews" ? "toggle__active" : "toggle__disabled"
                }
                onClick={() => setTab("interviews")}
              >
                <p>Interviews</p>
              </div>
            </div>
            {tab === "bio" ? (
              <div className="data__section__main__bio">
                <p>
                  Peter Gregory Obi CON (born 19 July 1961) is a Nigerian
                  businessman and politician who served as governor of Anambra
                  from March to November 2006, February to May 2007, and from
                  June 2007 to March 2014. In May 2022, he became the Labour
                  Party candidate for President of Nigeria in the 2023
                  presidential election,[1][2][3][4] after defecting from the
                  PDP.[5][6][7][8][9][10][11] Obi’s presidential campaign has
                  been described as populist[12] and has been noted for its
                  support among many young Nigerians,[13] who have been
                  nicknamed “Obi-dients”.[14][15] <br /> <br /> <br /> Obi ran
                  for governor in 2003 as a member of the All Progressives Grand
                  Alliance, but his main opponent was unlawfully declared
                  victor. After three years of legal battles, Obi was declared
                  winner in 2006 and assumed office in March 2006. He was
                  impeached in November the same year, but his impeachment was
                  overturned and he returned to office in February the next
                  year. Obi was removed during the 2007 Anambra State
                  gubernatorial election, and the judiciary again intervened,
                  ruling that he should be allowed to complete a full four-year
                  term. In 2010, he won re-election to a second term.[16][17]
                  Obi’s terms were marked by improvements in state finances,
                  education, and healthcare
                </p>
              </div>
            ) : tab === "mani" ? (
              <div className="data__section__main__mani">
                {manifesto.map((item, i) => (
                  <div className="list__item" key={i}>
                    <p>{i + 1}.</p>
                    <div className="list__item__dets">
                      <h3>{item?.title}</h3>
                      <p>{item?.dets}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="data__section__main__inter">
                <div className="video__tabs" />
                <div className="video__tabs" />
                <div className="video__tabs" />
                <div className="video__tabs" />
              </div>
            )}
          </div>
        ) : (
          <div className="data__section__stake">
            <p>Select amount to Stake</p>
            <div className="stake__options">
              <div className="stake__options__item">
                <p>N200</p>
              </div>
              <div className="stake__options__item">
                <p>N500</p>
              </div>
              <div className="stake__options__item">
                <p>N1000</p>
              </div>
              <div className="stake__options__item">
                <p>N5000</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {!stake && (
        <div className="stake__section">
          <Button
            title="STAKE ON TINUBU"
            textStyle={{
              fontFamily: "Rubik-Bold",
              fontSize: "14px",
              textAlign: "center",
              textTransform: "uppercase",
            }}
            btnStyle={{ borderRadius: "0", width: "100%" }}
            onClick={() => setStake(true)}
          />
        </div>
      )}
    </Container>
  )
}

export default Details

Details.getLayout = function getLayout(children: ReactElement) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  )
}
