import React from "react";
import Header from "../header/Header";
import ChooseDriverType from "../reusable/ChooseDriverType";
import MetaTitle from "../reusable/MetaTitle";
import { Container, Section } from "../reusable/reuseStyle";
import SelectYourCity from "../reusable/SelectYourCity";
import "./OutstationDriver.scss";

const OutstationDriver = () => {
  const bookingMode = "outstation";
  return (
    <Section>
      <MetaTitle title="Outstation Round Trip - Dr. Driver" />

      <Container>
        <Header />

        <div className="outstationDriver_main__container">
          <ChooseDriverType />
          <div className="outstationDriver_scroll__container">
            <SelectYourCity bookingMode={bookingMode} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default OutstationDriver;
