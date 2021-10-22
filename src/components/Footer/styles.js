import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;

    background-color: #F2F4F1;

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

export const BoxInfo = styled.div`
display: flex;
justify-content: center;

background-color: #446061;
`
    
export const Info = styled.p`
    color: #fff;
    opacity: 0.5;
`