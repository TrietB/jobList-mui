import React from 'react'
import { Outlet } from 'react-router-dom'
import Theming from '../theme/ThemeProvider'
import PrimarySearchAppBar from './SearchAppBar'



function LayOut() {
  return (
    <Theming>
    <PrimarySearchAppBar/>
    <Outlet/>
    </Theming>
  )
}

export default LayOut