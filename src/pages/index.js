import React from 'react'
import { graphql } from 'gatsby'

import { Header } from '../components/Header'
import { Main } from '../components/Main'

export const query = graphql`
query {
    alldata {
      projects {
        btnfaq
        btnblog
        btnenter
        btnstart
        btnlang
        divparagraph
        divtitle
        imagea {
          url
        }
        testimg {
          url
        }
        gif {
          url
        }
        imagemain {
          url
        }
        subtitle
        title
      }
  }
}
`

export default function Index({ data }) {

  const dataMain = data.alldata.projects[0]

    return (
        <div>
            {console.log("to aqui:", data)}
            <Header
                blog={dataMain.btnblog}
                faq={dataMain.btnfaq}
                enter={dataMain.btnenter}
                lang={dataMain.btnlang}
                image={dataMain.testimg.url}
            />
            <Main
              title={dataMain.title}
              paragraph={dataMain.subtitle}
              btnstart={dataMain.btnstart}
              image={dataMain.imagea.url}
              divtitle={dataMain.divtitle}
              divparagraph={dataMain.divparagraph}
              imagemain={dataMain.gif.url}
              gif={dataMain.imagemain.url}
            />
        </div>
      )
  }
