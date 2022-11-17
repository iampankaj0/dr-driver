import React from "react";
import Header from "../header/Header";
import ChooseDriverType from "../reusable/ChooseDriverType";
import MetaTitle from "../reusable/MetaTitle";
import { Container, Section } from "../reusable/reuseStyle";
import SelectYourCity from "../reusable/SelectYourCity";
import "./MonthlyDriver.scss";

const MonthlyDriver = () => {
  const bookingMode = "monthly";
  return (
    <Section>
      <MetaTitle title="Monthly Driver Options - Dr. Driver" />

      <Container>
        <Header />

        <div className="MonthlyDriver_main__container">
          <ChooseDriverType />
          <div className="MonthlyDriver_scroll__container">
            <SelectYourCity bookingMode={bookingMode} />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MonthlyDriver;
