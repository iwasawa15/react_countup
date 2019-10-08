import { render } from "react-dom"
import React, { useState, ReactNode, FC, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

interface Props {
}

const Layout: FC<Props> = (props) => {
  return(
    <Fragment>
      <header>
        hello
      </header>
      <div>
        {props.children}
      </div>
      <footer>
        Atrae, Inc.
      </footer>
    </ Fragment>
  )
}

export default Layout;