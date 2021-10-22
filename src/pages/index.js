import React from 'react'
import { graphql } from 'gatsby'

import { Header } from '../components/Header'
import { Main } from '../components/Main'

import { Helmet } from 'react-helmet'

export const query = graphql`
    query {
        recipedata {
              mains {
                latesttitle
                imgcake {
                  url
                }
                imgpizza {
                  url
                }
                imgshake {
                  url
                }
                imgspoon {
                  url
                }
                paragraphcake
                paragraphpizza
                paragraphshake
                abouttitle
                lorem
                subscribe
                submit
                signup
              }
              footers {
                instagram {
                  url
                }
                facebook {
                  url
                }
                twitter {
                  url
                }
                pinterest {
                  url
                }
                about
                recipes
                subscribe
                info
              }
        }
    }
`


export default function Index({ data }) {

    console.log("to aqui:", data)

    // const dataHeaders = data.recipedata.headers[0]
    const dataMains = data.recipedata.mains[0]

    return (
        <div>
          <Helmet>
            <title>Recipes</title>
          </Helmet>
            <Header />
            <Main
              latesttitle={dataMains.latesttitle}
              imgcake={dataMains.imgcake.url}
              paragraphcake={dataMains.paragraphcake}
              imgpizza={dataMains.imgpizza.url}
              paragraphpizza={dataMains.paragraphpizza}
              imgshake={dataMains.imgshake.url}
              paragraphshake={dataMains.paragraphshake}
            />
        </div>
    )
}
