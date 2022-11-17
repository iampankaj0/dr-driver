import styled from "styled-components";

export const RupeeSymbol = () => {
  return "₹";
};

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 30px 50px;
  background: var(--body-color);

  @media screen and (max-width: 991px) {
    padding: 30px;
  }
  @media screen and (max-width: 767px) {
    padding: 15px;
  }
  @media screen and (max-width: 575px) {
    padding: 0;
  }
`;

export const Container = styled.div`
  background: var(--blue-bg);
  height: 100%;
  width: 100%;
  border-radius: 15px;
  padding: 0 0 30px;
  position: relative;
  ${"" /* overflow-y: auto; */}

  @media screen and (max-width: 767px) {
    padding: 0 0 15px;
    overflow-y: auto;
  }
  @media screen and (max-width: 575px) {
    padding: 0 0 15px;
    border-radius: 0;
  }
`;

export const SubSection = styled.div``;
