import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 5rem;
    background-color: rgba(255, 255, 255, 0.97);
    box-shadow: rgb(0 0 0 / 10%) 0px 3px 10px;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const LogoImg = styled.img`
    width: 100px;
`

export const BtnInfo = styled.button`
    background: transparent;
    border: 0;
    cursor: pointer;
    margin-right: .5rem;
    &:nth-child(3) {
        background-color: rgb(255, 235, 151);
        width: 100px;
        height: 30px;
      }
    &:nth-child(4) {
        width: 30px;
        height: 30px;
        border: solid 1px #000;
        border-radius: 50%;
        font-size: 10px;
      }
`