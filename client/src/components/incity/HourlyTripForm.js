import React, { useState } from "react";
// import roundTrip from "../../assets/round__trip.png";
// import oneWayTrip from "../../assets/one__way.png";
import right__icon from "../../assets/rt_icon.png";
import WifiTetheringErrorIcon from "@mui/icons-material/WifiTetheringError";
import { BiTrip } from "react-icons/bi";
import styled from "styled-components";
import { RupeeSymbol } from "../reusable/reuseStyle";
import { AiOutlineRight } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import InCityInputs from "./InCityInputs";

const HourlyTripForm = () => {
  const TripFormContainer = styled.div`
    background: var(--container-color);
    padding: 10px;
    margin: 40px 15px;
    border-radius: 25px;

    > .trip__type {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > div {
        flex: 1;
        background: transparent;
        color: var(--blue-color);
        border: 1px solid var(--blue-color);
        height: 100px;
        margin: 15px 0;
        padding: 10px;
        border-radius: 25px;
        cursor: pointer;

        &:first-child {
          margin-right: 15px;

          @media screen and (max-width: 350px) {
            margin-right: 5px;
          }
        }

        > h3 {
          color: #fff;
          font-size: 14px;
          text-transform: capitalize;
          margin-bottom: 10px;
          line-height: 26px;
          display: inline-block;
          background: #fff;
          color: var(--blue-color);
          padding: 0 4px;
          margin-left: -12px;
          position: relative;

          &:before {
            content: "";
            background: url(${right__icon});
            position: absolute;
            right: -15px;
            top: 0;
            width: 16px;
            height: 26px;
            background-size: cover;
            background-repeat: no-repeat;
          }
        }

        > svg {
          width: 100%;
          font-size: 40px;
        }
      }

      > .active__trip {
        flex: 1;
        background: var(--blue-bg);
        color: #fff;
        border: 1px solid var(--blue-color);
        height: 100px;
        margin: 15px 0;
        padding: 10px;
        border-radius: 25px;

        > svg {
          width: 100%;
          animation: activeSvgSize 1s infinite;
        }
      }
    }

    > .heading__trip__plan {
      text-align: center;
      margin: 25px 0;
      text-transform: uppercase;
    }
  `;

  const RoundTrip = styled.div`
    > .select__hour_distance {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > div {
        &:first-child {
          display: flex;
          align-items: center;

          input {
            margin-right: 5px;
          }
        }

        > select {
          border: 1px solid var(--text-color);
          width: 140px;
          background: var(--text-color);
          color: #fff;
          border-radius: 5px;
          padding: 2px 5px;
          cursor: pointer;
          font-size: 15px;

          &:focus {
            outline: none;
          }

          > option {
            padding: 5px 0;
          }
        }
      }
    }

    > .price__section {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 15px 0;

      > div {
        color: var(--blue-color);

        &:first-child {
          font-weight: var(--font-semi-bold);
          font-size: 25px;
        }

        > p {
          font-size: 12px;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  `;

  const OneWayTrip = styled.div`
    > .select__hour_distance {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > div {
        &:first-child {
          display: flex;
          align-items: center;

          input {
            margin-right: 5px;
          }
        }

        > select {
          border: 1px solid var(--text-color);
          width: 140px;
          background: var(--text-color);
          color: #fff;
          border-radius: 5px;
          padding: 2px 5px;
          cursor: pointer;
          font-size: 15px;

          &:focus {
            outline: none;
          }

          > option {
            padding: 5px 0;
          }
        }
      }
    }

    > .price__section {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 15px 0;

      > div {
        color: var(--blue-color);

        &:first-child {
          font-weight: var(--font-semi-bold);
          font-size: 25px;
        }

        > p {
          font-size: 12px;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  `;

  // Active form type => RoundTrip Or One Way trip
  const [activeRound, setActiveRound] = useState(0);

  // Active Price details modal
  const [pricingDetail, setPricingDetail] = useState(false);

  // round trip price set states
  const [hourIntoMoney, setHourIntoMoney] = useState(1);

  // one way kms states
  const [kmsInto, setKmsInto] = useState(0);

  return (
    <TripFormContainer>
      <div className="trip__type">
        <div
          className={`${activeRound === 0 ? "active__trip" : ""}`}
          onClick={() => setActiveRound(0)}
        >
          <h3>Round Trip</h3>
          <WifiTetheringErrorIcon />
        </div>
        <div
          className={`${activeRound === 1 ? "active__trip" : ""}`}
          onClick={() => setActiveRound(1)}
        >
          <h3>One Way Drop</h3>
          <BiTrip />
        </div>
      </div>

      <div className="heading__trip__plan">PLAN YOUR DAY</div>
      {activeRound === 0 && (
        <RoundTrip className="round__Trip">
          <div className="select__hour_distance">
            <div>
              <input type="checkbox" checked readOnly />
              Hour
            </div>
            <div className="select__box">
              <select onClick={(e) => setHourIntoMoney(e.target.value)}>
                <option value="1">1 Hour</option>
                <option value="2">2 Hour</option>
                <option value="3">3 Hour</option>
                <option value="4">4 Hour</option>
                <option value="5">5 Hour</option>
                <option value="6">6 Hour</option>
                <option value="7">7 Hour</option>
                <option value="8">8 Hour</option>
                <option value="9">9 Hour</option>
                <option value="10">10 Hour</option>
                <option value="11">11 Hour</option>
                <option value="12">12 Hour</option>
                <option value="13">13 Hour</option>
              </select>
            </div>
          </div>
          <div className="price__section">
            <div>
              <RupeeSymbol /> {hourIntoMoney === 1 && 424}{" "}
              {hourIntoMoney > 1 && 250 * hourIntoMoney}
            </div>
            <div>
              <p onClick={() => setPricingDetail(!pricingDetail)}>View More</p>
            </div>
            <div
              className={`price_details_content ${
                pricingDetail ? "price_details_content-active" : ""
              }`}
            >
              <div>
                <button
                  className="close__modal"
                  onClick={() => setPricingDetail(!pricingDetail)}
                >
                  <GrClose />
                </button>
                <h3>Pricing</h3>
                <ul>
                  <li>
                    <div>
                      <AiOutlineRight />
                    </div>
                    Prices shown are GST Inclusive & Hour's based
                  </li>
                  <li>
                    <div>
                      <AiOutlineRight />
                    </div>
                    Rs 1.5 Per Minute to be charged incase actual travel time
                    exceeds your package time
                  </li>
                  <li>
                    <div>
                      <AiOutlineRight />
                    </div>
                    Rs 150 Night travel charges (NTA) to be applied in case you
                    travel in between 10:00 PM To 06:00 AM
                  </li>
                </ul>
                <h3>Things To Know</h3>
                <ul>
                  <li>
                    <div>
                      <AiOutlineRight />
                    </div>
                    Nearby driver in 90 Mins at your doorstep
                  </li>
                  <li>
                    <div>
                      <AiOutlineRight />
                    </div>
                    Experienced Driver
                  </li>
                  <li>
                    <div>
                      <AiOutlineRight />
                    </div>
                    Pay at the end of trip
                  </li>
                  <li>
                    <div>
                      <AiOutlineRight />
                    </div>
                    You need not to provide food or travel expenses to the
                    driver
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <form className="trip_inputs">
            <InCityInputs />
          </form>
        </RoundTrip>
      )}
      {activeRound === 1 && (
        <OneWayTrip className="oneWay__Trip">
          <div className="select__hour_distance">
            <div>
              <input type="checkbox" checked readOnly />
              Distance
            </div>
            <div className="select__box">
              <select onChange={(e) => setKmsInto(e.target.value)}>
                <option value="">Select Distance</option>
                <option value="1">1-5 Kms</option>
                <option value="2">5-10 Kms</option>
                <option value="3">10-20 Kms</option>
                <option value="4">20-35 Kms</option>
                <option value="5">35-50 Kms</option>
                <option value="6">50-100 Kms</option>
              </select>
            </div>
          </div>
          <div className="price__section">
            <div>
              <RupeeSymbol /> {kmsInto * 247}
            </div>
            <div>
              <p onClick={() => setPricingDetail(!pricingDetail)}>View More</p>
            </div>
            <div
              className={`price_details_content ${
                pricingDetail ? "price_details_content-active" : ""
              }`}
            >
              <div>
                <button
                  className="close__modal"
                  onClick={() => setPricingDetail(!pricingDetail)}
                >
                  <GrClose />
                </button>
                <h3>Pricing</h3>
                <ul>
                  <li>
                    <div>
                      <AiOutlineRight />
                    </div>
                    Prices shown are GST Inclusive & Hour's based
                  </li>
                  <li>
                    <div>
                      <AiOutlineRight />
                    </div>
                    Rs 1.5 Per Minute to be charged incase actual travel time
                    exceeds your package time
                  </li>
                  <li>
                    <div>
                      <AiOutlineRight />
                    </div>
                    Rs 150 Night travel charges (NTA) to be applied in case you
                    travel in between 10:00 PM To 06:00 AM
                  </li>
                </ul>
                <h3>Things To Know</h3>
                <ul>
                  <li>
                    <div>
                      <AiOutlineRight />
                    </div>
                    Nearby driver in 90 Mins at your doorstep
                  </li>
                  <li>
                    <div>
                      <AiOutlineRight />
                    </div>
                    Experienced Driver
                  </li>
                  <li>
                    <div>
                      <AiOutlineRight />
                    </div>
                    Pay at the end of trip
                  </li>
                  <li>
                    <div>
                      <AiOutlineRight />
                    </div>
                    You need not to provide food or travel expenses to the
                    driver
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <form className="trip_inputs">
            <InCityInputs />
          </form>
        </OneWayTrip>
      )}
    </TripFormContainer>
  );
};

export default HourlyTripForm;
