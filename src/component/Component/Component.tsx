import React from 'react';
import Img from '../../img/images.webp'

import styled from 'styled-components';

export const Component = () => {
    return (
        <ComponentStyled>

                <Imag src={Img} alt=""/>
                <Title>Headline</Title>
                <Paragraf>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Paragraf>
                <ButtonStyled>
                    <Button>See more</Button>
                    <Button>Save</Button>
                </ButtonStyled>



        </ComponentStyled>
    );
};

export const ComponentStyled = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 300px;
    height: 370px;
    background: #ffffff;
    margin: 200px auto;


    border-radius: 8px;
    box-shadow:  5px 5px 25px 25px #878181;
    //box-shadow:  0 0 2px 0 #878181;
    
`

export const Imag = styled.img`
    width: 280px;
    height: 170px;

    padding: 10px;
    border-radius: 6px;
    `

export const Title = styled.h1`
    width: 70px;
    height: 19px;
    margin: 10px 20px 20px 20px;
    font-size: 16px;
    font-weight: 700;
    text-align: left;
`
export const Paragraf = styled.p`
    margin: 0 20px 19px 20px;
    text-align: left;
   color: #ABB3BA;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
`

export const Button = styled.button`
    background-color: transparent;
    padding: 4px 20px 6px 20px;
    margin: 0 0 22px 20px;
    border-radius: 5px;
    border-color: #4E71FE;
    color: #4E71FE;
    font-weight: 700;
    text-align: left;

    &:hover {
        background: #4E71FE;
        color: aliceblue;
        font-weight: 700;
        line-height: 20px;
        text-align: left;

    ;
`

export const ButtonStyled = styled.div`
    text-align: left;
   
    `