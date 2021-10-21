import styled from "styled-components";
import TickSvg from "../../assets/images/tick.svg";

const FlexibleBookContainer = styled.div`
  padding: 8px 0;
  position: relative;
`;

const FlexibleBookTitle = styled.span`
  display: flex;
  align-items: center;
  padding-left: 24px;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 16px;
    height: 16px;
    top: 8px;
    background-image: url(${TickSvg});
    background-size: 16px;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

export default function FlexTick(): JSX.Element {
  return (
    <FlexibleBookContainer>
      <FlexibleBookTitle>Book With Flexibility</FlexibleBookTitle>
    </FlexibleBookContainer>
  );
}
