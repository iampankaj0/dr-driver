import React from "react";
import "./hourlyDriver.scss";
import Header from "../header/Header";
import MetaTitle from "../reusable/MetaTitle";
import { Container, Section } from "../reusable/reuseStyle";
import ChooseDriverType from "../reusable/ChooseDriverType";
import SelectYourCity from "../reusable/SelectYourCity";

const HourlyDriver = () => {
  const bookingMode = "hourly";
  return (
    <Section>
      <MetaTitle title="In City Round Trip - Dr. Driver" />

      <Container>
        <Header />

        <div className="HourlyDriver_main__container">
          <ChooseDriverType />
          <div className="HourlyDriver_scroll__container">
            <SelectYourCity bookingMode={bookingMode} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HourlyDriver;
