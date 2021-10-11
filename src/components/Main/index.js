import React from 'react'
import * as S from './style'

export function Main({
    title,
    paragraph,
    btnstart,
    image,
    divtitle,
    divparagraph
}) {
    return (
        <>
        <S.Container>
            <S.Wrapper>
                <S.Title>{title}</S.Title>
                <S.Paragraph>{paragraph}</S.Paragraph>
                <S.BtnStart>{btnstart}</S.BtnStart>
            </S.Wrapper>
            <img style={{width: "450px"}} src={image} alt="" />
        </S.Container>
        <S.BoxBottom>
            <S.TitleBottom>{divtitle}</S.TitleBottom>
            <S.ParagraphBottom>{divparagraph}</S.ParagraphBottom>
        </S.BoxBottom>
        </>
    )
}
