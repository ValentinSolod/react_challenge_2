import styled from "styled-components";
import { MapButton, HeartIcon } from "../../common";
import breakpoint from "../../../constants/breakpoints";

type CardImgProps = {
  img: string;
  mapImg: string;
};

const CardImgContainer = styled.div`
  position: relative;
  width: 232px;
  flex-shrink: 0;

  @media only screen and ${breakpoint.device.lg} {
    width: 100%;
  }
`;

const TourLink = styled.a`
  display: block;
  width: 232px;

  @media only screen and ${breakpoint.device.lg} {
    width: 100%;
    height: auto;
  }
`;

const TourImg = styled.img`
  width: 232px;
  aspect-ratio: auto 232 / 170;
  height: 170px;

  @media only screen and ${breakpoint.device.lg} {
    aspect-ratio: 645/430;
    width: 100%;
    height: auto;
  }
`;

const MapImg = styled.img`
  width: 232px;
  aspect-ratio: auto 232 / 112;
  height: 112px;
  margin: 1px 0 -16px;

  @media only screen and ${breakpoint.device.lg} {
    display: none;
  }
`;

// Images inside JSON-data has injected css with display: none;
export default function CardImg({ img, mapImg }: CardImgProps): JSX.Element {
  return (
    <CardImgContainer>
      <TourLink>
        <TourImg
          alt="tourImg"
          loading="lazy"
          src={"https://via.placeholder.com/232x170" || img}
        />
        <HeartIcon />
        <MapImg
          alt="mapImg"
          loading="lazy"
          src={"https://via.placeholder.com/232x112" || mapImg}
        />
        <MapButton />
      </TourLink>
    </CardImgContainer>
  );
}
