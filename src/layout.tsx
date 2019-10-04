import { render } from "react-dom"
import React, { useState } from 'react';

const Layout = ({children}: HTMLElement) => {
  return(
    <>
      <header>
        hello
      </header>
      <div>
        {children}
      </div>
      <footer>
        Atrae, Int.
      </footer>
    </>
  )
}

export default Layout;