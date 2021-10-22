import styled from 'styled-components'

export const ContainerLatest = styled.div`
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

export const ContainerAbout = styled.section`
    display: flex;
    justify-content: space-between;
`

export const Lorem = styled.p`
    width: 576px;
    font-size: 20px;
`

export const AboutTitle = styled.h2`
    font-size: 40px;
    text-transform: uppercase;

    &:after {
        content: "";
        width: 50px;
        height: 5px;
        background: #000;
        display: block;
        position: relative;
        left: 3rem;
    }
`

export const BoxAbout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContainerSignup = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #DFE4DE;
`

export const SubTitle = styled.h2`
    text-transform: uppercase;
`

export const Ipt = styled.input`
    width: 700px;
    height: 100px;
    padding-left: 20px;
    border: 0;
`

export const BtnSub = styled.button`
    width: 240px;
    height: 80px;
    text-transform: uppercase;
    background: transparent;
    border: solid 4px #000;
`