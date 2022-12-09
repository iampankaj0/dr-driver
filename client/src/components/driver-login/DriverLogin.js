import React from "react";
import Header from "../header/Header";
import MetaTitle from "../reusable/MetaTitle";
import { Container, Section } from "../reusable/reuseStyle";
import "./DriverLogin.scss";
import DriverContainer from "./DriverContainer";

const DriverLogin = () => {
  return (
    <Section>
      <MetaTitle title="Driver Login - Dr. Driver" />

      <Container>
        <Header />
        <div className="main__single__container center__container">
          <DriverContainer />
        </div>
      </Container>
    </Section>
  );
};

export default DriverLogin;
