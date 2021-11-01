import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items:center;
    height:45vh;
    background-color: #F2F4F1;

`

export const Btn = styled.button`
    background: transparent;
    border:none;
    cursor: pointer;
    font-size: 1.3vw;
    text-transform: uppercase;

    &:hover {
        border: solid 2px;
    }
`

export const BoxInfo = styled.div`
display: flex;
justify-content: center;

background-color: #446061;
`
    
export const Info = styled.p`
    color: #fff;
    opacity: 0.5;
`

export const ContainerRedes = styled.div`
    width:40%;
    display:flex;
    justify-content:space-evenly;
`


export const Redes = styled.img`
    
    &:hover{
        margin-bottom:2vh;
        cursor:pointer;
    }

`

export const ContainerBtn = styled.div`
    width:40%;
    display:flex;
    justify-content:space-evenly;

`