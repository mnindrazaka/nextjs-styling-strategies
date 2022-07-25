import type { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  background-color: black;
`;

const Title = styled.h1`
  color: white;
`;

const CssInJs: NextPage = () => {
  return (
    <Container>
      <Title>This is using CSS in JS</Title>
    </Container>
  );
};

export default CssInJs;
