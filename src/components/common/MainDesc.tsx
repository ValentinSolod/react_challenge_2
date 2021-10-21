import { useState } from "react";
import styled from "styled-components";
import { Tour } from "../../types";

type MainDescProps = {
  tour: Tour;
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

const ShowMore = styled.span`
  padding: 0 10px;
  color: #409cd1;
  cursor: pointer;
`;

const splitParts = (arr) => ({ first: arr.slice(0, 3), last: arr.slice(3) });

export default function MainDesc({ tour }: MainDescProps): JSX.Element {
  const [showState, setShowState] = useState({
    destination: false,
    region: false,
    travelStyle: false,
  });

  const {
    destinations,
    age_max: ageMax,
    age_min: ageMin,
    regions,
    travel_styles: travelStyles,
    operated_in: operatedIn,
  } = tour;

  const splitedDestinations = splitParts(destinations);
  const splitedRegions = splitParts(regions);
  const splitedStyles = splitParts(travelStyles);

  return (
    <MainDescriptionContainer>
      <DescriptionWrapper>
        <DescName>Destination</DescName>
        <DescData>
          {splitedDestinations.first.join(", ")}
          {!showState.destination && splitedDestinations.last.length > 0 && (
            <ShowMore
              onClick={() => setShowState({ ...showState, destination: true })}
            >
              +{splitedDestinations.last?.length || ""} more
            </ShowMore>
          )}
          {showState.destination && `, ${splitedDestinations.last.join(", ")}`}
        </DescData>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescName>Age Range</DescName>
        <DescData>
          {ageMin} to {ageMax} years old
        </DescData>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescName>Country Region</DescName>
        <DescData>
          {splitedRegions.first.join(", ")}
          {!showState.region && splitedRegions.last.length > 0 && (
            <ShowMore
              onClick={() => setShowState({ ...showState, region: true })}
            >
              +{splitedRegions.last?.length || ""} more
            </ShowMore>
          )}
          {showState.region && `, ${splitedRegions.last.join(", ")}`}
        </DescData>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescName>Travel Style</DescName>
        <DescData>
          {splitedStyles.first.join(", ")}
          {!showState.travelStyle && splitedStyles.last.length > 0 && (
            <ShowMore
              onClick={() => setShowState({ ...showState, travelStyle: true })}
            >
              +{splitedStyles.last.length || ""} more
            </ShowMore>
          )}
          {showState.travelStyle && `, ${splitedStyles.last.join(", ")}`}
        </DescData>
      </DescriptionWrapper>
      <DescriptionWrapper>
        <DescName>Operated in</DescName>
        <DescData>{operatedIn}</DescData>
      </DescriptionWrapper>
    </MainDescriptionContainer>
  );
}
