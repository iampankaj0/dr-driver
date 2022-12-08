import React from "react";
import Header from "../header/Header";
import MetaTitle from "../reusable/MetaTitle";
import { Container, Section } from "../reusable/reuseStyle";
import "./MyRides.scss";
import RidesContainer from "./RidesContainer";

const MyRides = () => {
  return (
    <Section>
      <MetaTitle title="My Rides & history - Dr. Driver" />

      <Container>
        <Header />

        <div className="main__single__container">
          <RidesContainer />
        </div>
      </Container>
    </Section>
  );
};

export default MyRides;
