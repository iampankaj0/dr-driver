import React from "react";
import Header from "../header/Header";
import ChooseDriverType from "../reusable/ChooseDriverType";
import MetaTitle from "../reusable/MetaTitle";
import { Container, Section } from "../reusable/reuseStyle";
import AllRatingsReviews from "./AllRatingsReviews.js"
import "./ratingReviews.scss";

const RatingReviews = () => {
  return (
    <Section>
      <MetaTitle title="Ratings and Reviews - Dr. Driver" />

      <Container>
        <Header />

        <div className="MonthlyDriver_main__container">
          <ChooseDriverType />
          <div className="MonthlyDriver_scroll__container">
            <AllRatingsReviews />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default RatingReviews;
