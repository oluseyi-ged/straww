import "../styles/globals.css"
import type { AppProps } from "next/app"
import store from "../store"
import { Provider } from "react-redux"
import AppWrapper from "@components/application/AppWrapper"
import { Shield } from "@routes/Shield"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import { NextPage } from "next"
import { PropsWithChildren, ReactElement, ReactNode, useEffect } from "react"
import Head from "next/head"

let persistor = persistStore(store)

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const PersistGateFixed = PersistGate as unknown as React.FC<
  PropsWithChildren<{ loading: any; persistor: any }>
>

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  const ComponentFixed = Component as unknown as React.FC<
    PropsWithChildren<any>
  >

  return (
    <>
      <Head>
        <title>STRAWW</title>
        <meta
          name="description"
          // content="The secure and simple way to send and receive money across borders. Make secure and affordable cross-border transactions on XPAD."
        />
      </Head>
      {getLayout(
        <Provider store={store}>
          <AppWrapper>
            <PersistGateFixed loading={null} persistor={persistor}>
              {/* <Shield> */}
              <ComponentFixed {...pageProps} />
              {/* </Shield> */}
            </PersistGateFixed>
          </AppWrapper>
        </Provider>
      )}
    </>
  )
}

export default App
