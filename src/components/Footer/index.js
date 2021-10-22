import React from 'react'
import * as S from './styles'

import { graphql, useStaticQuery } from 'gatsby'

export function Footer() {

  const data = useStaticQuery(graphql`
        query {
            recipedata {
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
    `)

  const { about, recipes, subscribe, info, twitter, pinterest, facebook, instagram } = data.recipedata.footers[0]

  return (
    <>
      <S.Container>
        <div>
          <img src={instagram.url} alt="" />
          <img src={twitter.url} alt="" />
          <img src={facebook.url} alt="" />
          <img src={pinterest.url} alt="" />
        </div>
        <div>
          <S.Btn>{about}</S.Btn>
          <S.Btn>{recipes}</S.Btn>
          <S.Btn>{subscribe}</S.Btn>
        </div>
      </S.Container>
      <S.BoxInfo>
        <S.Info>{info}</S.Info>
      </S.BoxInfo>
    </>
  )
}
