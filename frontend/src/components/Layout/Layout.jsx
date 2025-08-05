import React from 'react'

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Routers from '../../router/Routers';
import ScrollToTop from '../ScrollToTop';

const Layout = () => {
  return <>
  <ScrollToTop />
  <Header/>
  <Routers/>
  <Footer/>
  </>
}

export default Layout