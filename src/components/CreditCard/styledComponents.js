// Style your elements here

import styled from 'styled-components'

export const CreditCardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    height: 100vh;
  }
`

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3b4b69;
  @media screen and (min-width: 576px) {
    width: 50%;
    height: 100%;
  }
`

export const CardHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  padding: 0 0 10px 0;
  margin-top: 40px;
  border-bottom: 4px solid #ffd773;
  @media screen and (min-width: 576px) {
    font-size: 32px;
  }
`

export const CardBackGroundImage = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 80%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 40px;
  padding: 30px 0 0 30px;
  margin: 40px 0 50px 0;
  @media screen and (min-width: 576px) {
    margin: 100px 0 20px 0;
    width: 80%;
    height: 350px;
    padding: 30px 0 0 60px;
  }
`

export const CardNumberParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  margin: 40px 0 10px 0;
  @media screen and (min-width: 576px) {
    font-size: 36px;
  }
`

export const CardHolderTitleParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  color: #ffffff;
  margin: 35px 0 15px 0;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`

export const CardHolderNameParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  @media screen and (min-width: 576px) {
    font-size: 22px;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 576px) {
    width: 50%;
  }
`

export const FormElement = styled.form`
  width: 90%;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 1px 2px 3px 2px #d3d9e0;
  border-radius: 10px;
  margin: 40px 0 50px 0;
  @media screen and (min-width: 576px) {
    width: 80%;
    height: 300px;
  }
`

export const FormHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 26px;
  font-weight: 900;
  color: #344e7a;
  margin-bottom: 40px;
  @media screen and (min-width: 576px) {
    font-size: 28px;
    margin-bottom: 60px;
  }
`

export const CardNumberInput = styled.input`
  width: 80%;
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  border-radius: 3px;
  margin-bottom: 25px;
  padding: 15px 15px 15px 20px;
  border: 1px solid #d3d9e0;
  @media screen and (min-width: 576px) {
    font-size: 14px;
    padding: 15px;
  }
`

export const CardNameInput = styled.input`
  width: 80%;
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  border-radius: 3px;
  padding: 15px 15px 15px 20px;
  border: 1px solid #d3d9e0;
  margin: 0;
  @media screen and (min-width: 576px) {
    font-size: 14px;
    margin-bottom: 50px;
    padding: 15px;
  }
`
