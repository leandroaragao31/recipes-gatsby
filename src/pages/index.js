import React from 'react'
import { graphql } from 'gatsby'

import { Header } from '../components/Header'

export const query = graphql`
    query {
        recipedata {
            headers {
                logo {
                  url
                }
                about
                recipes
                subscribe
                title
                background {
                  url
                }
              }
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

    const dataHeaders = data.recipedata.headers[0]

    return (
        <div>
            <Header
                title={dataHeaders.title}
                img={dataHeaders.logo.url}
            />
        </div>
    )
}
