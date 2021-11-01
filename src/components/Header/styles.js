import styled from 'styled-components'

export const Container = styled.div`
    background-image: url(${props => props.back});
    margin:8px;
    background-size: cover;
    width:99%;
`

export const Wrraper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`

export const BoxBtn = styled.div`
    width: 40vw;
    display: flex;
    
    justify-content: space-evenly;
`

export const Btn = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    width:45vw;
    font-size: 1.5vw;
    text-transform: uppercase;

    &:hover {
        border: solid 2px;
    }
`

export const BoxTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 130vh;
    

`

export const Title = styled.h1`
    font-size: 7vw;
    letter-spacing: 15.75px;
    color: #373737;
    text-transform: uppercase;
    font-weight: 700;
`


