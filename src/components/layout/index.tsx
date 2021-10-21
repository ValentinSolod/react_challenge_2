import styled from "styled-components";

type LayoutProps = {
  children: JSX.Element;
};

const LayoutWrapper = styled.div`
  max-width: 1164px;
  margin: 0 auto;
`;

export default function Layout({ children }: LayoutProps): JSX.Element {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
