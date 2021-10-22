import styled from "styled-components";
import MoreDesc from "./MoreDesc";
import { TourNormalized } from "../../types";

type MainDescProps = {
  tour: TourNormalized;
};

const MainDescriptionContainer = styled.div`
  margin: 12px 0;
  line-height: 14px;
  max-width: 100%;
  border-top: 1px solid #ebeef2;
`;

const DescriptionWrapper = styled.div`
  margin-top: 4px;
`;

const DescName = styled.div`
  display: inline-block;
  width: 34%;
  font-size: 12px;
  font-weight: 700;
  color: #2c3e50;
  vertical-align: top;
`;

const DescData = styled.div`
  display: inline-block;
  width: 66%;
  vertical-align: top;
  font-size: 12px;
`;

export default function MainDesc({ tour }: MainDescProps): JSX.Element {
  const {
    destinations,
    age_max: ageMax,
    age_min: ageMin,
    regions,
    travel_styles: travelStyles,
    operated_in: operatedIn,
  } = tour;

  return (
    <MainDescriptionContainer>
      <DescriptionWrapper>
        <DescName>Destination</DescName>
        <MoreDesc description={destinations} />
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescName>Age Range</DescName>
        <DescData>
          {ageMin} to {ageMax} years old
        </DescData>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescName>Country Region</DescName>
        <MoreDesc description={regions} />
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescName>Travel Style</DescName>
        <MoreDesc description={travelStyles} />
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescName>Operated in</DescName>
        <DescData>{operatedIn}</DescData>
      </DescriptionWrapper>
    </MainDescriptionContainer>
  );
}
