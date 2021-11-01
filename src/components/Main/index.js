import React from 'react'
import * as S from './styles'

import { graphql, useStaticQuery } from 'gatsby'

export function Main() {

    const data = useStaticQuery(graphql`
        query {
            alldata {
                mains {
                    imgcake {
                      url
                    }
                    imgpizza {
                      url
                    }
                    imgshake {
                      url
                    }
                    spoon {
                      url
                    }
                    aboutTitle
                    lastTitle
                    lorem
                    paragraphAbout
                    paragraphCake
                    paragraphPizza
                    paragraphShake
                    singup
                    submit
                    subscribeMain
                  }
            }
        }
    `)

    const { lastTitle, imgcake, imgpizza,
        imgshake, spoon, paragraphCake,
        paragraphPizza, paragraphShake,
        aboutTitle, paragraphAbout, subscribeMain,
        submit, singup } = data.alldata.mains[0]

    return (
        <>
            <S.Container>
                <S.Title>{lastTitle}</S.Title>
            </S.Container>
            <S.ContainerLatest>
                <S.Box>
                    <figure>
                        <S.Image src={imgcake.url} alt="" />
                    </figure>
                    <S.BoxParagraph>
                        <S.Paragraph>{paragraphCake}</S.Paragraph>
                    </S.BoxParagraph>
                </S.Box>
                <S.Box>
                    <figure>
                        <S.Image src={imgpizza.url} alt="" />
                    </figure>
                    <S.BoxParagraph>
                        <S.Paragraph>{paragraphPizza}</S.Paragraph>
                    </S.BoxParagraph>
                </S.Box>
                <S.Box>
                    <figure>
                        <S.Image src={imgshake.url} alt="" />
                    </figure>
                    <S.BoxParagraph>
                        <S.Paragraph>{paragraphShake}</S.Paragraph>
                    </S.BoxParagraph>
                </S.Box>
            </S.ContainerLatest>
            <S.ContainerAbout>
                <figure>
                    <S.SpoonImg src={spoon.url} alt="" />
                </figure>
                <S.BoxAbout>
                    <S.AboutTitle>{aboutTitle}</S.AboutTitle>
                    <S.Lorem>{paragraphAbout}</S.Lorem>
                </S.BoxAbout>
            </S.ContainerAbout>
            <S.ContainerSignup>
                <S.SubTitle>{subscribeMain}</S.SubTitle>
                <S.Signup>{singup}</S.Signup>
                <S.Ipt type="email" placeholder="Your Email" />
                <S.BtnSub>{submit}</S.BtnSub>
            </S.ContainerSignup>
        </>
    )
}

