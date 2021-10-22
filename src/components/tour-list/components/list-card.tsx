import styled from "styled-components";
import CardImg from "./card-img";
import CardInfo from "./card-info";
import CardPrice from "./card-price";
import breakpoint from "../../../constants/breakpoints";
import { TourNormalized } from "../../../types";

type ListCardProps = {
  tour: TourNormalized;
};

const Card = styled.div`
  min-height: 285px;
  box-shadow: 0 0 12px rgb(0 0 0 / 15%);
  padding: 1px 1px 0;
  margin-bottom: 16px;
  background: #fff;
  position: relative;
  display: flex;
  justify-content: space-between;

  @media only screen and ${breakpoint.device.lg} {
    max-width: 49%;
    min-width: 290px;
    width: 100%;
    flex-direction: column;
  }

  @media only screen and ${breakpoint.device.sm} {
    max-width: 100%;
  }
`;

export default function ListCard({ tour }: ListCardProps): JSX.Element {
  const {
    img_url: imgUrl,
    map_url: mapUrl,
    price,
    flexible_booking: flexible,
  } = tour;

  return (
    <Card>
      <CardImg img={imgUrl} mapImg={mapUrl} />
      <CardInfo tour={tour} />
      <CardPrice price={price} flexible={flexible} />
    </Card>
  );
}
