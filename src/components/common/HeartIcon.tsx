import styled from "styled-components";
import HeartSvg from "../../assets/images/heart.svg";

const HeartIcon = styled.div`
  background-image: url(${HeartSvg});
  top: 0;
  right: 0;
  width: 44px;
  height: 44px;
  background-position: 50%;
  background-size: 24px;
  position: absolute;
  background-repeat: no-repeat;
`;

export default HeartIcon;
