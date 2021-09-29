import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'

const Title = styled.h1`
    color: red;
`

export default function Contatos() {
    return (
        <div>
            <Link to="/">voltar</Link>
            <Title>Contatos:</Title>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae deleniti dolores maiores quibusdam aliquid natus quaerat tempora, nostrum ex debitis modi distinctio quae repellat cum. Mollitia excepturi natus facilis maiores?</p>
        </div>
    )
}
