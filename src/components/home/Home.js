import React from "react";
import styled from "styled-components";
import MetaTitle from "../reusable/MetaTitle";
import Header from "../header/Header.js";

const Home = () => {
  const Section = styled.section`
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

  const Container = styled.div`
    background: var(--blue-bg);
    height: 100%;
    width: 100%;
    border-radius: 15px;
    padding: 0 0 30px;
    position: relative;

    @media screen and (max-width: 767px) {
      padding: 0 0 15px;
    }
    @media screen and (max-width: 575px) {
      padding: 0 0 15px;
      border-radius: 0;
    }
  `;

  return (
    <Section>
      <MetaTitle title="Dr. Driver - Home" />

      <Container>
        <Header />
      </Container>
    </Section>
  );
};

export default Home;
