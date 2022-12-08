import React from "react";
import Header from "../header/Header";
import ChooseDriverType from "../reusable/ChooseDriverType";
import MetaTitle from "../reusable/MetaTitle";
import { Container, Section } from "../reusable/reuseStyle";
import FixDriverForm from "./FixDriverForm";
import "./MonthlyFixDriver.scss";

const MonthlyFixDriver = () => {
  return (
    <Section>
      <MetaTitle title="In City Round Trip - Dr. Driver" />

      <Container>
        <Header />

        <div className="inCityTrip_main__container">
          <ChooseDriverType />
          <div className="inCityTrip_scroll__container">
            <FixDriverForm />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MonthlyFixDriver;
