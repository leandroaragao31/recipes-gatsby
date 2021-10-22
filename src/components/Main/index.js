import React from 'react'
import * as S from './styles'

import { graphql, useStaticQuery } from 'gatsby'

export function Main() {

    const data = useStaticQuery(graphql`
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
            }
        }
    `)

    const { latesttitle, imgcake, imgpizza, imgshake, imgspoon, paragraphcake, paragraphpizza, paragraphshake, abouttitle, lorem, subscribe, submit, signup } = data.recipedata.mains[0]

    return (
        <>
            <div>
                <S.Title>{latesttitle}</S.Title>
            </div>
            <S.ContainerLatest>
                <S.Box>
                    <figure>
                        <S.Image src={imgcake.url} alt="" />
                    </figure>
                    <S.BoxParagraph>
                        <S.Paragraph>{paragraphcake}</S.Paragraph>
                    </S.BoxParagraph>
                </S.Box>
                <S.Box>
                    <figure>
                        <S.Image src={imgpizza.url} alt="" />
                    </figure>
                    <S.BoxParagraph>
                        <S.Paragraph>{paragraphpizza}</S.Paragraph>
                    </S.BoxParagraph>
                </S.Box>
                <S.Box>
                    <figure>
                        <S.Image src={imgshake.url} alt="" />
                    </figure>
                    <S.BoxParagraph>
                        <S.Paragraph>{paragraphshake}</S.Paragraph>
                    </S.BoxParagraph>
                </S.Box>
            </S.ContainerLatest>
            <S.ContainerAbout>
                <figure>
                    <img src={imgspoon.url} alt="" />
                </figure>
                <S.BoxAbout>
                    <S.AboutTitle>{abouttitle}</S.AboutTitle>
                    <S.Lorem>{lorem}</S.Lorem>
                </S.BoxAbout>
            </S.ContainerAbout>
            <S.ContainerSignup>
                <S.SubTitle>{subscribe}</S.SubTitle>
                <p>{signup}</p>
                <S.Ipt type="email" placeholder="Your Email" />
                <S.BtnSub>{submit}</S.BtnSub>
            </S.ContainerSignup>
        </>
    )
}

