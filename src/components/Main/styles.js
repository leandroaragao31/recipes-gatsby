import styled from 'styled-components'


export const Container = styled.div`
    height:10vw;
    background-color: #F2F4F1;
    margin-top:5vh;

`

export const ContainerLatest = styled.div`
    display: flex;
    align-items:center;
    height:90vh;
    justify-content: space-evenly;
    background-color: #F2F4F1;
`

export const Title = styled.h2`
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    height:20vw;
    align-items:center;
    &::after {
        content: "";
        width: 6vw;
        height: 0.8vh;
        background: #000;
        display: block;
        position: relative;
        top:40px; 
        right:140px;
    }
`

export const Image = styled.img`
    width: 20vw;    
`

export const Box = styled.div`
    box-shadow: 0px 7px 6px #00000029;
    transition:1s;
    cursor:pointer;
    &:hover{
        transform: scale(105%)
    }
`

export const BoxParagraph = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25vh;
`
export const SpoonImg = styled.img`
    width:50vw;
    position:relative;
    right:40px;
    bottom:16px;
`


export const Paragraph = styled.p`
    font-size: 2.1vw;


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
    width:100%;
   
`

export const Lorem = styled.p`
     width:30vw;
    font-size: 1.2vw;
    text-align:justify;
`

export const AboutTitle = styled.h2`
    font-size: 2.9vw;
    text-transform: uppercase;
    margin-bottom:7vh;
    &:after {
        content: "";
        width: 3.6vw;
        height: 0.7vh;
        background: #000;
        display: block;
        position: relative;
        top:20px;
        left: 3rem;
    }
`

export const BoxAbout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:50%;
`

export const ContainerSignup = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height:38vw;
    justify-content: center;
    background-color: #DFE4DE;
`

export const SubTitle = styled.h2`
    text-transform: uppercase;
    margin-top:9vh;

`

export const Ipt = styled.input`
    width: 50vw;
    height:10vh;
    padding-left: 20px;
    border: 0;
    
`
export const Signup = styled.p`
    font-size:4vh;
`

export const BtnSub = styled.button`
    width: 20vw;
    height: 8vh;
    margin-top:5vh;
    cursor:pointer;
    text-transform: uppercase;
    background: transparent;
    transition: 1.5s;
    border: solid 4px #000;
    &:hover{
        background-color:#1C1C1C;
        border:none;
        color:#fff;
    }
`