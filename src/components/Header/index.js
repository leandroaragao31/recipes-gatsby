import React from 'react'
import * as S from './style'

export function Header({
    image,
    blog,
    faq,
    enter,
    lang
}) {
    return (
        <S.Container>
            <S.LogoImg src={image} alt="" />
            <div>
                <S.BtnInfo>{blog}</S.BtnInfo>
                <S.BtnInfo>{faq}</S.BtnInfo>
                <S.BtnInfo>{enter}</S.BtnInfo>
                <S.BtnInfo>{lang}</S.BtnInfo>
            </div>
        </S.Container>
    )
}
