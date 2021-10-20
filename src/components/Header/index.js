import React from 'react'
import * as S from './styles'

export function Header({
    logo,
    about,
    recipes,
    subscribe,
    title,
    background
}) {
    return (
        <S.Container back={background}>
            <S.Wrraper>
                <figure>
                    <img src={logo} alt="" />
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
