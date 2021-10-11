import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 3rem;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const Title = styled.h1`
    color: rgb(34, 37, 75);
    width: 360px;
`

export const Paragraph = styled.p`
    color: rgb(34, 37, 75);
    opacity: 0.8;
    width: 380px;
`

export const BtnStart = styled.button`
    background-color: gold;
    width: 150px;
    height: 30px; 
    border: 0;
    font-weight: bold;
`

export const BoxBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TitleBottom = styled.h2`
    color: rgb(34, 37, 75);
`

export const ParagraphBottom = styled.p`
    color: rgb(34, 37, 75);
    opacity: 0.8;
    width: 465px;
    text-align: center;
`

export const ImageGif = styled.img`
    width: 250px;
`

export const BoxReal = styled.div`
    display: flex;
    justify-content: center;
    background: rgb(34, 37, 75);
`

export const BoxText = styled.div`
    display: flex;
    flex-direction: column;

    h2 {
        color: #fff;
    }

    p {
        width: 450px;
        color: #fff;
    }
`

export const BoxLike = styled.div`
    display: flex;
    align-items: center;


    div p {
        width: 415px;
    }
`

export const BoxFor = styled.div`
    display: flex;
    justify-content: center;
    background: rgb(34, 37, 75);

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    h2 {
        text-align: center;
        width: 335px;
        color: #fff;
    }

    p {
        text-align: center;
        width: 650px;
        color: #fff;
    }
`