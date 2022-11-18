import React from "react";
import Header from "../header/Header";
import MetaTitle from "../reusable/MetaTitle";
import { Container, Section } from "../reusable/reuseStyle";
import "./ApplyDriverJob.scss";
import DriverJobContainer from "./DriverJobContainer";

const ApplyDriverJob = () => {
  return (
    <Section>
      <MetaTitle title="Apply Driver Job - Dr. Driver" />

      <Container>
        <Header />

        <div className="main__single__container">
          <DriverJobContainer />
        </div>
      </Container>
    </Section>
  );
};

export default ApplyDriverJob;
