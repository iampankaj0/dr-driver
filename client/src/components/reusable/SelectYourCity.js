import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SelectYourCity = ({ bookingMode }) => {
  const SelectCity = styled.div`
    background: var(--container-color);
    padding: 10px;
    margin: 40px 15px 40px;
    border-radius: 25px;

    > .selectCity__heading {
      margin: 15px 0;
      color: var(--title-color);
      font-size: 18px;
      font-weight: var(--font-semi-bold);
    }

    > .selectCity__names {
      display: flex;
      flex-direction: column;

      > .cityName {
        color: var(--container-color);
        display: flex;
        align-items: center;
        margin: 7px 0;
        background: linear-gradient(
            to right,
            var(--blue-color) 0%,
            transparent 95%
          )
          100% center no-repeat;
        padding: 5px 20px;
        border-radius: 10px;
        transition: 0.4s;

        > svg {
          color: var(--container-color);
          font-size: 18px;
          transform: translateX(5px);
          transition: 0.4s;
        }

        &:hover svg {
          transform: translateX(10px);
        }
      }
    }
  `;

  let myLink = "";
  if (bookingMode === "hourly") {
    myLink = "/apply-incity-driver";
  } else if (bookingMode === "outstation") {
    myLink = "/apply-outstation-driver";
  } else if (bookingMode === "monthly") {
    myLink = "/apply-monthly-driver";
  }
  return (
    <div>
      <SelectCity>
        <div className="selectCity__heading">
          Select Your City {bookingMode === "hourly" && "- Hourly Booking"}
          {bookingMode === "outstation" && "- OutStation Booking"}
          {bookingMode === "monthly" && "- Monthly Booking Options"}
        </div>
        <div className="selectCity__names">
          <Link to={myLink} className="cityName">
            Delhi/NCR
            <AiOutlineDoubleRight />
          </Link>
          <Link to={myLink} className="cityName">
            Mumbai
            <AiOutlineDoubleRight />
          </Link>
          <Link to={myLink} className="cityName">
            Chandigarh
            <AiOutlineDoubleRight />
          </Link>
          <Link to={myLink} className="cityName">
            Bangalore
            <AiOutlineDoubleRight />
          </Link>
          <Link to={myLink} className="cityName">
            Hyderabad
            <AiOutlineDoubleRight />
          </Link>
          <Link to={myLink} className="cityName">
            Chennai
            <AiOutlineDoubleRight />
          </Link>
          <Link to={myLink} className="cityName">
            Pune
            <AiOutlineDoubleRight />
          </Link>
          <Link to={myLink} className="cityName">
            Kolkata
            <AiOutlineDoubleRight />
          </Link>
          <Link to={myLink} className="cityName">
            Jaipur
            <AiOutlineDoubleRight />
          </Link>
          <Link to={myLink} className="cityName">
            Lucknow
            <AiOutlineDoubleRight />
          </Link>
        </div>
      </SelectCity>
    </div>
  );
};

export default SelectYourCity;
