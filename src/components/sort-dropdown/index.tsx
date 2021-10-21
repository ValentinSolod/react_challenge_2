import styled from "styled-components";
import SortArrows from "../../assets/images/sort-arrows.svg";
import OpenArrow from "../../assets/images/open-arrow.svg";

type OptionValue = string | number;

type Props<Value extends OptionValue> = {
  value: Value;
  onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
};

const SortSelect = styled.select`
  padding: 16px 32px;
  border-radius: 5px;
  color: #2c3e50;
  font-size: 14px;
  line-height: 16px;
  border: 1px solid #c7d0d9;
  border-radius: 3px;
  outline: 0;
  background-image: url(${SortArrows}), url(${OpenArrow});
  background-position: left 14px center, right 14px center;
  background-size: 12px, 10px;
  appearance: none;
  background-color: #fff;
  background-repeat: no-repeat;
`;

export default function SortDropdown<Value extends OptionValue>(
  props: Props<Value>
): JSX.Element {
  return (
    <SortSelect value={props.value} onChange={props.onChange}>
      <option value="cheap">Total price: Lowest first</option>
      <option value="expensive">Total price: Highest first</option>
      <option value="short">Duration: Shortest first</option>
      <option value="long">Duration: Longest first</option>
    </SortSelect>
  );
}
