import React, { PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./Theme"
import { RootState, useAppSelector } from "../../../../store"
import { GlobalStyle } from "./globalStyles"

function AppWrapper({ children }: any) {
  const { theme } = useAppSelector<any>((store: RootState) => store.theme)
  const ThemeProviderFixed = ThemeProvider as unknown as React.FC<
    PropsWithChildren<any>
  >
  const GlobalStyleFixed = GlobalStyle as unknown as React.FC<any>

  return (
    <ThemeProviderFixed
      theme={lightTheme}
      // theme={theme === "light" ? lightTheme : darkTheme
    >
      <GlobalStyleFixed />
      {children}
    </ThemeProviderFixed>
  )
}

export default AppWrapper
