import styled from 'styled-components'

export const Container = styled.div`
    background-image: url(${props => props.back});
    background-position-y: -23rem;
    background-size: cover;
    height: 100vh;
`

export const Wrraper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`

export const BoxBtn = styled.div`
    width: 400px;
    display: flex;
    justify-content: space-evenly;
`

export const Btn = styled.button`
    background: transparent;
    border: 0;
    cursor: pointer;
    font-size: 20px;
    text-transform: uppercase;

    &:hover {
        border: solid 2px;
    }
`

export const BoxTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 44vh;

`

export const Title = styled.h1`
    font-size: 8rem;
    color: #373737;
    text-transform: uppercase;
    font-weight: 500;
`