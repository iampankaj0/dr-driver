import React from "react";
import { RiStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import styled from "styled-components";
import dummyUser from "../../assets/user_dummy.png";
import CustomButton from "../reusable/CustomButton";
import { ratings } from "./ratingArray";

const AllRatingsReviews = () => {
  const RatingsContainer = styled.section`
    background: var(--container-color);
    padding: 10px;
    margin: 40px 15px 40px;
    border-radius: 25px;
  `;
  return (
    <RatingsContainer>
      <div className="rating__reviews__container_main">
        {ratings.map((data, idx) => {
          return (
            <div key={idx}>
              <div className="imgName">
                <span>
                  <img src={dummyUser} alt="dummyUser" />
                  <h2>{data.name}</h2>
                </span>
                <h3>{data.location}</h3>
              </div>
              <div className="ratingStarDate">
                <span>
                  {data.star === 1 && <RiStarFill />}
                  {data.star === 2 && (
                    <>
                      <RiStarFill />
                      <RiStarFill />
                    </>
                  )}
                  {data.star === 3 && (
                    <>
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </>
                  )}
                  {data.star === 4 && (
                    <>
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </>
                  )}
                  {data.star === 5 && (
                    <>
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </>
                  )}
                </span>
                <span>{data.date}</span>
              </div>
              <div className="reviewDescription">
                <p> {data.review} </p>
              </div>
            </div>
          );
        })}
        <div className="button__back">
          <Link to="/dr-driver">
            <CustomButton name="Return" position="center" />
          </Link>
        </div>
      </div>
    </RatingsContainer>
  );
};

export default AllRatingsReviews;
