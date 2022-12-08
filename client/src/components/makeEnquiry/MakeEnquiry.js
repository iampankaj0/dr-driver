import React from "react";
import "./MakeEnquiry.scss";
import Header from "../header/Header";
import ChooseDriverType from "../reusable/ChooseDriverType";
import MetaTitle from "../reusable/MetaTitle";
import { Container, Section } from "../reusable/reuseStyle";
import EnquiryContainer from "./EnquiryContainer";

const MakeEnquiry = () => {
  return (
    <Section>
      <MetaTitle title="Make an Enquiry - Dr. Driver" />

      <Container>
        <Header />

        <div className="MonthlyDriver_main__container">
          <ChooseDriverType />
          <div className="MonthlyDriver_scroll__container">
            <EnquiryContainer />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MakeEnquiry;
