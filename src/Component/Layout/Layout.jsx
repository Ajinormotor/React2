import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Overview from '../Overview/Overview'
import Our from '../Our/Our'
import Latest from '../Latest/Latest'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'

const Layout = () => {
  return (
    <Fragment>
  <Header  />
  <Hero  />
  <Overview  />
  <Our  />
  <Latest  />
   <Footer  />
    </Fragment>
  )
}

export default Layout