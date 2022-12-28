import React, { FC } from "react"
import { Grid } from "./styles"

interface Props {
  white?: boolean
}

const appStore = `https://apps.apple.com/ng/app/gigx-pad/id1589206329`
const googleStore = `https://play.google.com/store/apps/details?id=com.giggroup.gigxpadmobile`

export const Download: FC<Props> = ({ white }) => {
  return (
    <Grid>
      <a target="_blank" href={googleStore} rel="noreferrer">
        <div
          className="grid__item"
          style={
            white
              ? {
                  backgroundColor: "#fff",
                }
              : {
                  backgroundColor: "#f2f6f7",
                }
          }
        >
          <img
            src="https://res.cloudinary.com/gigx-technologies/image/upload/v1668764381/xpad/play_svg_vmwuup.svg"
            alt="play download"
          />
          <div>
            <p>Get it on</p>
            <p>Google Play</p>
          </div>
        </div>
      </a>

      <a target="_blank" href={appStore} rel="noreferrer">
        <div
          className="grid__item"
          style={
            white
              ? {
                  backgroundColor: "#fff",
                }
              : {
                  backgroundColor: "#f2f6f7",
                }
          }
        >
          <img
            src="https://res.cloudinary.com/gigx-technologies/image/upload/v1668764381/xpad/apple_svg_wxpwrf.svg"
            alt="play download"
          />
          <div>
            <p>Get it on</p>
            <p>App Store</p>
          </div>
        </div>
      </a>
    </Grid>
  )
}
