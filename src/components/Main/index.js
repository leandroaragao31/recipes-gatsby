import React, { useState, useEffect } from 'react'

import { api } from '../../services/api'

import * as S from './style'

export function Main() {

    const [list, setList] = useState([])

    useEffect(() => {
        api.get()
            .then(response => setList(response.data))
        console.log(api.get())
    }, [])

    return (
        <S.Container>
            {list.slice(0,24).map((item, index) => (
                <S.BoxMap key={index}>
                    <p>{item.name}</p>
                    <img style={{width: "200px", height: "300px"}} src={item.image} alt="" />
                </S.BoxMap>
            ))}
        </S.Container>
    )
}
