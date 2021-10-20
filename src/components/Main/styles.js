import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #F2F4F1;
`

export const Title = styled.h2`
    text-transform: uppercase;
    display: flex;
    justify-content: center;
`

export const Image = styled.img`
    width: 500px;
`

export const Box = styled.div`
    box-shadow: 0px 7px 6px #00000029;
`

export const BoxParagraph = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25vh;
`

export const Paragraph = styled.p`
    font-size: 30px;

    &:before {
        content: "";
        width: 50px;
        height: 5px;
        background: #000;
        display: block;
        position: relative;
        bottom: 30px;
        left: 75px;
    }
`