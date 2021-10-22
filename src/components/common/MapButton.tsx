import styled from "styled-components";
import MapSvg from "../../assets/images/map.svg";
import breakpoint from "../../constants/breakpoints";

const MapButtonContainer = styled.div`
  position: absolute;
  top: 175px;
  right: 0;
  display: inline-block;
  font-size: 11px;
  line-height: 12px;
  color: #fff;
  background-color: #0a7bbd;
  padding: 6px 8px 6px 22px;
  border-bottom-left-radius: 3px;
  background-repeat: no-repeat;
  background-size: 10px;
  background-position: left 7px center;
  background-image: url(${MapSvg});

  @media only screen and ${breakpoint.device.lg} {
    padding: 30px 8px 6px 6px;
    border-radius: 3px;
    background-size: 16px;
    background-position: top 8px center;
  }
`;

const MapButtonText = styled.span`
  display: inline;
  @media only screen and ${breakpoint.device.lg} {
    font-size: 11px;
  }
`;

export default function MapButton(): JSX.Element {
  return (
    <MapButtonContainer>
      <MapButtonText>View Map</MapButtonText>
    </MapButtonContainer>
  );
}
