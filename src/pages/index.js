import React from 'react'

import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'

import { Helmet } from 'react-helmet'
import GlobalStyle from '../components/GlobalStyles/global'

export default function Index() {

  return (
    <div>
      <Helmet>
        <title>Recipes</title>
      </Helmet>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
