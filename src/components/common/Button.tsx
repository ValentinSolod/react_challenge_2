import styled from "styled-components";

type MergeElementProps<
  T extends React.ElementType,
  P extends Record<string, unknown>
> = Omit<React.ComponentPropsWithoutRef<T>, keyof P> & P;

type Props = MergeElementProps<
  "button",
  {
    primary: boolean;
  }
>;

const ButtonInteractive = styled.button`
  width: 100%;
  margin-right: 0;
  margin-top: 8px;
  padding: 6px 8px;
  white-space: nowrap;
  background-color: ${({ primary }: { primary: boolean }) =>
    primary ? "#fff" : "#0a7bbd"};
  border: 1px solid #0a7bbd;
  color: ${({ primary }: { primary: boolean }) =>
    primary ? "#0a7bbd" : "#fff"};
  display: inline-block;
  text-align: center;
  border-radius: 3px;
  outline: 0;
  text-decoration: none;
  font-size: 14px;
  line-height: 24px;
`;

export default function Button({ children, ...props }: Props): JSX.Element {
  return <ButtonInteractive {...props}>{children}</ButtonInteractive>;
}
