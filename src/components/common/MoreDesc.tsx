import { useState } from "react";
import styled from "styled-components";

type MoreDescProps = {
  description: Array<string>;
};

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

const splitParts = (arr: string[]): { first: string[]; last: string[] } => ({
  first: arr.slice(0, 3),
  last: arr.slice(3),
});

export default function MoreDesc({ description }: MoreDescProps): JSX.Element {
  const [showState, setShowState] = useState<boolean>(false);

  const { first, last } = splitParts(description);

  return (
    <DescData>
      {first.join(", ")}
      {!showState && last.length > 0 && (
        <ShowMore onClick={() => setShowState(true)}>
          +{last?.length || ""} more
        </ShowMore>
      )}
      {showState && `, ${last.join(", ")}`}
    </DescData>
  );
}
