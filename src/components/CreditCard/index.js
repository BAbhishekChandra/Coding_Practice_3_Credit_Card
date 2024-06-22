// Write your code here
import {useState} from 'react'
import {
  CreditCardContainer,
  CardContainer,
  CardHeading,
  CardBackGroundImage,
  CardNumberParagraph,
  CardHolderTitleParagraph,
  CardHolderNameParagraph,
  FormContainer,
  FormElement,
  FormHeading,
  CardNumberInput,
  CardNameInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeCardName = event => {
    setCardName(event.target.value)
  }

  return (
    <CreditCardContainer>
      <CardContainer>
        <CardHeading>CREDIT CARD</CardHeading>
        <CardBackGroundImage data-testid="creditCard">
          <CardNumberParagraph>{cardNumber}</CardNumberParagraph>
          <CardHolderTitleParagraph>CARDHOLDER NAME</CardHolderTitleParagraph>
          <CardHolderNameParagraph>
            {cardName.toUpperCase()}
          </CardHolderNameParagraph>
        </CardBackGroundImage>
      </CardContainer>
      <FormContainer>
        <FormElement>
          <FormHeading>Payment Method</FormHeading>
          <CardNumberInput
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCardNumber}
          />
          <CardNameInput
            type="text"
            placeholder="Cardholder Name"
            value={cardName}
            onChange={onChangeCardName}
          />
        </FormElement>
      </FormContainer>
    </CreditCardContainer>
  )
}
export default CreditCard
