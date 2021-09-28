import React from 'react'

import * as S from './style'

import { Link } from 'gatsby'

export function Header() {
    return (
        <S.Container>
            <S.List>
                <Link to="/">inicio</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Contatos">Contatos</Link>
            </S.List>
        </S.Container>
    )
}
