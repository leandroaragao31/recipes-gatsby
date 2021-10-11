import React from 'react'
import * as S from './style'

export function Main({
    title,
    paragraph,
    btnstart,
    image,
    divtitle,
    divparagraph,
    imagemain,
    gif
}) {
    return (
        <>
            <S.Container>

                <S.Wrapper>
                    <S.Title>{title}</S.Title>
                    <S.Paragraph>{paragraph}</S.Paragraph>
                    <S.BtnStart>{btnstart}</S.BtnStart>
                </S.Wrapper>

                <img style={{ width: "450px" }} src={image} alt="" />

            </S.Container>

            <S.BoxBottom>
                <S.TitleBottom>{divtitle}</S.TitleBottom>
                <S.ParagraphBottom>{divparagraph}</S.ParagraphBottom>
            </S.BoxBottom>

            <S.BoxReal>

                <figure>
                    <S.ImageGif src={imagemain} alt="" />
                </figure>

                <S.BoxText>
                    <h2>Realtime and Collaborative</h2>
                    <p>Working remotely just got a lot easier. Our collaborative spaces provide greater integration and visualization of ideas in real time.</p>
                </S.BoxText>

            </S.BoxReal>

            <S.BoxLike>

                <figure>
                    <S.ImageGif src={gif} alt="" />
                </figure>

                <div>
                    <h2>Uncomplicated, intuitive,<br /> friendly</h2>
                    <p>Ideal for who is looking to increase productivity and potentialize collaboration.<br />
                        Everything free, like thinking.</p>
                </div>

            </S.BoxLike>

            <S.BoxFor>

                <div>
                    <h2>For you, for your team and your organization</h2>
                    <p>Strytegy is a valuable tool to make you and your team more efficient in project management and new business development.</p>
                </div>

            </S.BoxFor>
        </>
    )
}
