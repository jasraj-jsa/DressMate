import styled from "styled-components";
export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => `${props.theme.body}`};
  position: relative;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    @media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;
