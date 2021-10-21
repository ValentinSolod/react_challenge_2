import styled from "styled-components";
import StarSvgFull from "../../assets/images/star-full.svg";
import StarSvgEmpty from "../../assets/images/star-empty.svg";
import StarSvgHalf from "../../assets/images/star-half.svg";

type RatingStarsProps = {
  reviews: {
    avg: number;
    cnt: number;
  };
};

const RatingContainer = styled.div`
  vertical-align: middle;
  margin-right: 8px;
`;

const StarsWrapper = styled.div`
  vertical-align: middle;
  display: inline-block;
`;

const RatingStar = styled.div`
  display: inline-block;
  margin-right: 1px;
  width: 13px;
  height: 13px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
  background-image: url(${({ img }: { img: string }) => img});
`;

const ReviewCount = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
  color: #818d99;
  line-height: 12px;
  margin-left: 4px;
`;

const RenderStars = (avg) => {
  const stars = [];

  new Array(5).fill(null).reduce((acc: number) => {
    if (acc < 1 && acc > 0) {
      stars.push(<RatingStar key={acc} img={StarSvgHalf} />);
    } else if (acc >= 1) {
      stars.push(<RatingStar key={acc} img={StarSvgFull} />);
    } else if (acc <= 0) {
      stars.push(<RatingStar key={acc} img={StarSvgEmpty} />);
    } else {
      stars.push(<RatingStar key={acc} img={StarSvgEmpty} />);
    }

    return acc - 1;
  }, avg);

  return stars;
};

export default function RatingStars({
  reviews,
}: RatingStarsProps): JSX.Element {
  const { avg, cnt } = reviews;
  const Stars = RenderStars(avg);

  return (
    <RatingContainer>
      <StarsWrapper>{Stars}</StarsWrapper>
      <ReviewCount>{cnt} reviews</ReviewCount>
    </RatingContainer>
  );
}
