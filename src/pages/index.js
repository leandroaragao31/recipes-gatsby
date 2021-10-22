import React from 'react'

import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'

import { Helmet } from 'react-helmet'

export default function Index() {

  return (
    <div>
      <Helmet>
        <title>Recipes</title>
      </Helmet>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
