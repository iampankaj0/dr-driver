import React from "react";
import "./aboutUs.scss";
import Header from "../header/Header";
import ChooseDriverType from "../reusable/ChooseDriverType";
import MetaTitle from "../reusable/MetaTitle";
import { Container, Section } from "../reusable/reuseStyle";
import AboutContainer from "./AboutContainer";

const AboutUs = () => {
  return (
    <Section>
      <MetaTitle title="About Us - Dr. Driver" />

      <Container>
        <Header />

        <div className="MonthlyDriver_main__container">
          <ChooseDriverType />
          <div className="MonthlyDriver_scroll__container">
            <AboutContainer />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutUs;
