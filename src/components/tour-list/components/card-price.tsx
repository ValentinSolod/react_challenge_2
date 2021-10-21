import styled from "styled-components";
import { Button, FlexTick } from "../../common";
import breakpoint from "../../../breakpoints";

type CardPriceProps = {
  price: number;
  flexible: boolean;
};

const CardPriceContainer = styled.div`
  padding-top: 24px;
  width: 200px;
  margin-right: 8px;
  margin-left: 8px;
  padding-top: 16px;
  flex-shrink: 0;
  @media only screen and ${breakpoint.device.lg} {
    width: auto;
    margin: 24px 0 12px;
    padding: 8px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  padding: 8px 0;
  flex-direction: column;
  justify-content: center;
`;

const PriceFrom = styled.span`
  font-size: 14px;
  line-height: 17px;
`;

const PriceAmount = styled.div`
  color: #41c4ab;
  font-size: 24px;
  line-height: 29px;
`;

const ButtonContainer = styled.div`
  @media only screen and ${breakpoint.device.lg} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
  }
`;

export default function CardPrice({
  price,
  flexible,
}: CardPriceProps): JSX.Element {
  return (
    <CardPriceContainer>
      <PriceContainer>
        <PriceFrom>From</PriceFrom>
        <PriceAmount>${Math.round(price)}</PriceAmount>
      </PriceContainer>
      {flexible && <FlexTick />}
      <ButtonContainer>
        <Button primary={false}>View Tour</Button>
        <Button primary>Download Brochure</Button>
      </ButtonContainer>
    </CardPriceContainer>
  );
}
