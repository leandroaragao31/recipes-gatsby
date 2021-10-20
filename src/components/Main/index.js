import React from 'react'
import * as S from './styles'

export function Main({
    latesttitle,
    imgcake,
    imgpizza,
    imgshake,
    imgspoon,
    paragraphcake,
    paragraphpizza,
    paragraphshake,
    abouttitle,
    lorem,
    subscribe,
    submit,
    signup
}) {
    return (
        <>
            <div>
                <S.Title>{latesttitle}</S.Title>
            </div>
            <S.Container>
                <S.Box>
                    <figure>
                        <S.Image src={imgcake} alt="" />
                    </figure>
                    <S.BoxParagraph>
                        <S.Paragraph>{paragraphcake}</S.Paragraph>
                    </S.BoxParagraph>
                </S.Box>
                <S.Box>
                    <figure>
                        <S.Image src={imgpizza} alt="" />
                    </figure>
                    <S.BoxParagraph>
                        <S.Paragraph>{paragraphpizza}</S.Paragraph>
                    </S.BoxParagraph>
                </S.Box>
                <S.Box>
                    <figure>
                        <S.Image src={imgshake} alt="" />
                    </figure>
                    <S.BoxParagraph>
                        <S.Paragraph>{paragraphshake}</S.Paragraph>
                    </S.BoxParagraph>
                </S.Box>
            </S.Container>
        </>
    )
}
