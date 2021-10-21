import styled from "styled-components";
import { RatingStars, MainDesc } from "../../common";
import breakpoint from "../../../breakpoints";
import { Tour } from "../../../types";

type CardInfoProps = {
  tour: Tour;
};

const CardInfoContainer = styled.div`
  padding-top: 16px;
  padding-bottom: 13px;
  margin-left: 16px;
  margin-right: 16px;
  width: 100%;
  @media only screen and ${breakpoint.device.lg} {
    width: auto;
  }
`;

const TourTravelStyle = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 1.25;
  font-weight: 700;
`;

const TourTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  margin: 0;
  color: #2c3e50;
  max-height: 44px;
  overflow-y: hidden;
  &:first-letter {
    text-transform: capitalize;
  }
`;

const ReviewComments = styled.span`
  font-size: 12px;
  line-height: 16px;
  margin: 8px 0 0;
  word-break: break-word;
  font-style: italic;
`;

export default function CardInfo({ tour }: CardInfoProps): JSX.Element {
  const { reviews, travel_styles: travelStyles, title } = tour;
  const { sample } = reviews;

  return (
    <CardInfoContainer>
      <TourTravelStyle>{travelStyles[0]}</TourTravelStyle>
      <TourTitle>{title}</TourTitle>
      <RatingStars reviews={reviews} />
      <ReviewComments>{sample}</ReviewComments>
      <MainDesc tour={tour} />
    </CardInfoContainer>
  );
}
