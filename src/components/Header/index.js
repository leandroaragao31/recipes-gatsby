import React from 'react'
import * as S from './styles'

import { graphql, useStaticQuery } from 'gatsby'

export function Header() {

    const data = useStaticQuery(graphql`
        query {
            alldata {
                headers {
                    btnabout
                    btnrecipes
                    btnsub
                    logoimg {
                      url
                    }
                    backgroundimg {
                      url
                    }
                    headertitle
                  }
            }
        }

    `)

    const { logoimg, btnabout, btnrecipes,
        btnsub, headertitle, backgroundimg } = data.alldata.headers[0]

    return (
        <S.Container back={backgroundimg.url}>
            <S.Wrraper>
                <figure>
                    <img src={logoimg.url} alt="" />
                </figure>
                <S.BoxBtn>
                    <S.Btn>{btnabout}</S.Btn>
                    <S.Btn>{btnrecipes}</S.Btn>
                    <S.Btn>{btnsub}</S.Btn>
                </S.BoxBtn>
            </S.Wrraper>
            <S.BoxTitle>
                <S.Title>{headertitle}</S.Title>
            </S.BoxTitle>
        </S.Container>
    )
}