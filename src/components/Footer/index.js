import React from 'react'
import * as S from './styles'

import { graphql, useStaticQuery } from 'gatsby'

export function Footer() {

  const data = useStaticQuery(graphql`
        query {
            alldata {
              footers {
                about
                facebook {
                  url
                }
                insta {
                  url
                }
                pinterest {
                  url
                }
                twitter {
                  url
                }
                paragraph
                recipes
                subscribe
              }
            }
        }
    `)

  const { about, recipes, subscribe,
    paragraph, twitter, pinterest,
    facebook, insta } = data.alldata.footers[0]

  return (
    <>
      <S.Container>
        <S.ContainerRedes>
          <S.Redes src={insta.url} alt="" />
          <S.Redes src={twitter.url} alt="" />
          <S.Redes src={facebook.url} alt="" />
          <S.Redes src={pinterest.url} alt="" />
        </S.ContainerRedes>
        <S.ContainerBtn>
          <S.Btn>{about}</S.Btn>
          <S.Btn>{recipes}</S.Btn>
          <S.Btn>{subscribe}</S.Btn>
        </S.ContainerBtn>
      </S.Container>
      <S.BoxInfo>
        <S.Info>{paragraph}</S.Info>
      </S.BoxInfo>
    </>
  )
}
