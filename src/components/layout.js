import * as React from "react"
import Header from "./header"
import { GlobalStyle } from "./Globalstyles"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer id="about" />
    </>
  )
}
export default Layout
