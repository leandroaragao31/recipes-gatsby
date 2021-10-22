import React from 'react'
import * as S from './styles'

import { graphql, useStaticQuery } from 'gatsby'

export function Header() {

    const data = useStaticQuery(graphql`
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
            }
        }

    `)

    const { logo, about, recipes, subscribe, title, background } = data.recipedata.headers[0]

    return (
        <S.Container back={background.url}>
            <S.Wrraper>
                <figure>
                    <img src={logo.url} alt="" />
                </figure>
                <S.BoxBtn>
                    <S.Btn>{about}</S.Btn>
                    <S.Btn>{recipes}</S.Btn>
                    <S.Btn>{subscribe}</S.Btn>
                </S.BoxBtn>
            </S.Wrraper>
            <S.BoxTitle>
                <S.Title>{title}</S.Title>
            </S.BoxTitle>
        </S.Container>
    )
}