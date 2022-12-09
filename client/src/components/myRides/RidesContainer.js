import React, { useState } from "react";
import styled from "styled-components";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { RupeeSymbol } from "../reusable/reuseStyle";
import VerifiedIcon from "@mui/icons-material/Verified";
import CustomButton from "../reusable/CustomButton";
import noBookingImg from "../../assets/my_current_rides.jpg";
import { Link } from "react-router-dom";

const RidesContainer = () => {
  const MyRideContainer = styled.div`
    background: var(--container-color);
    margin: 40px auto 40px;
    border-radius: 25px;
    display: block;

    > .myRides {
      > .back__btn {
        background: var(--blue-color);
        padding: 10px;
        border-top-right-radius: 25px;
        border-top-left-radius: 25px;

        p {
          display: flex;
          align-items: center;
          cursor: pointer;
          width: fit-content;
          color: #fff;

          > svg {
            margin-right: 8px;
          }
        }
      }

      > .current__history_tabs {
        padding: 35px 10px 10px;
        background: var(--blue-color);
        justify-content: space-evenly;
        display: flex;

        > div {
          margin: 10px;
          width: 100%;
          border-bottom: 2px solid transparent;
          text-align: center;
          padding: 5px;
          cursor: pointer;
          color: #fff;
        }
        > .tab__active {
          border-bottom: 2px solid var(--container-color);
        }
      }

      > .tabs__content {
        padding: 10px;
        margin: 10px 0;

        > .current__tab-data {
          margin-bottom: 20px;

          > .no__current__booking {
            margin: 10px;
            border: 1px solid var(--blue-color);
            padding: 10px 15px;
            border-radius: 15px;

            > div {
              img {
                display: block;
                margin: 0 auto;
                width: 300px;

                @media screen and (max-width: 500px) {
                  width: 240px;
                }
              }
              p {
                margin-top: 15px;
                text-align: center;
              }
            }
          }
        }

        > .history__tab-data {
          margin-bottom: 20px;

          > .history__card {
            background: lightblue;
            border-bottom-right-radius: 15px;
            border-bottom-left-radius: 15px;
            margin-top: 20px;

            > .date__type {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10px;
              font-size: 15px;
              background: #d7d7d7;
              color: var(--title-color-dark);
              border-bottom-right-radius: 15px;
              border-bottom-left-radius: 15px;

              > p {
                display: flex;
                align-items: center;

                > span {
                  &:first-child {
                    margin-right: 3px;
                  }
                  &:last-child {
                    margin-left: 3px;
                  }
                }

                > svg {
                  margin-left: 2px;
                  font-size: 18px;
                }
              }
            }

            > .booking__id {
              color: var(--title-color);
              padding: 10px 15px;
            }
            > .booking__Price {
              color: var(--title-color-dark);
              padding: 0 15px 10px;
              font-weight: var(--font-semi-bold);
              font-size: 20px;
            }
            > .booking__distance_package {
              color: var(--title-color);
              padding: 0 15px 10px;
            }
            > .booking__btn-sec {
              display: flex;
              justify-content: space-evenly;

              @media screen and (max-width: 370px) {
                button {
                  padding: 7px 15px;
                }
              }
            }
          }
        }
      }
    }

    @media screen and (min-width: 575px) {
      width: 500px;
    }
    @media screen and (min-width: 767px) {
      width: 550px;
    }
    @media screen and (max-width: 575px) {
      width: auto;
      margin: 0;
      padding: 15px 0;
      border-radius: 0;
    }
  `;

  //   active tab state
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <MyRideContainer>
        <div className="myRides">
          <div className="back__btn">
            <Link to="/dr-driver">
              <p>
                <BsChevronDoubleLeft /> My Rides
              </p>
            </Link>
          </div>

          <div className="current__history_tabs">
            <div
              className={activeTab === 0 ? "tab__active" : ""}
              style={{ color: activeTab === 0 ? "#fff" : "var(--text-color)" }}
              onClick={() => setActiveTab(0)}
            >
              <p>Current</p>
            </div>
            <div
              className={activeTab === 1 ? "tab__active" : ""}
              style={{ color: activeTab === 1 ? "#fff" : "var(--text-color)" }}
              onClick={() => setActiveTab(1)}
            >
              <p>History</p>
            </div>
          </div>

          <div className="tabs__content">
            {/* Current Bookings Section Start */}
            {activeTab === 0 && (
              <div className="current__tab-data">
                <div className="no__current__booking">
                  <div>
                    <img src={noBookingImg} alt="noBookingImg" />
                    <p>No Active Bookings</p>
                    <Link to="/apply-incity-driver">
                      <CustomButton name="book now" position="center" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
            {/* Current Bookings Section Start */}

            {/* History Bookings Section Start */}
            {activeTab === 1 && (
              <div className="history__tab-data">
                <div className="history__card">
                  <div className="date__type">
                    <p>
                      <span>11 Nov, 2022</span>|<span>17:00 PM</span>
                    </p>
                    <p className="red">
                      Cancelled <MdOutlineCancel />
                    </p>
                  </div>
                  <div className="booking__id">
                    <p>Booking ID: 75869</p>
                  </div>
                  <div className="booking__Price">
                    <p>
                      <RupeeSymbol /> 869
                    </p>
                  </div>
                  <div className="booking__distance_package">
                    <p>Package - 16- 20 Kms</p>
                  </div>
                  <div className="booking__btn-sec">
                    <CustomButton name="Book Again" />
                    <CustomButton name="rate Experience" />
                  </div>
                </div>
                <div className="history__card">
                  <div className="date__type">
                    <p>
                      <span>10 Nov, 2022</span>|<span>15:00 PM</span>
                    </p>
                    <p className="green">
                      Completed <VerifiedIcon />
                    </p>
                  </div>
                  <div className="booking__id">
                    <p>Booking ID: 74865</p>
                  </div>
                  <div className="booking__Price">
                    <p>
                      <RupeeSymbol /> 259
                    </p>
                  </div>
                  <div className="booking__distance_package">
                    <p>Package: 16 - 20 Kms</p>
                  </div>
                  <div className="booking__btn-sec">
                    <CustomButton name="Book Again" />
                    <CustomButton name="rate Experience" />
                  </div>
                </div>
                <div className="history__card">
                  <div className="date__type">
                    <p>
                      <span>2 Nov, 2022</span>|<span>11:00 AM</span>
                    </p>
                    <p className="green">
                      Completed <VerifiedIcon />
                    </p>
                  </div>
                  <div className="booking__id">
                    <p>Booking ID: 45210</p>
                  </div>
                  <div className="booking__Price">
                    <p>
                      <RupeeSymbol /> 451
                    </p>
                  </div>
                  <div className="booking__distance_package">
                    <p>Package: 16 - 20 Kms</p>
                  </div>
                  <div className="booking__btn-sec">
                    <CustomButton name="Book Again" />
                    <CustomButton name="rate Experience" />
                  </div>
                </div>
                <div className="history__card">
                  <div className="date__type">
                    <p>
                      <span>15 Oct, 2022</span>|<span>15:00 PM</span>
                    </p>
                    <p className="green">
                      Completed <VerifiedIcon />
                    </p>
                  </div>
                  <div className="booking__id">
                    <p>Booking ID: 123456</p>
                  </div>
                  <div className="booking__Price">
                    <p>
                      <RupeeSymbol /> 203
                    </p>
                  </div>
                  <div className="booking__distance_package">
                    <p>Package: 16 - 20 Kms</p>
                  </div>
                  <div className="booking__btn-sec">
                    <CustomButton name="Book Again" />
                    <CustomButton name="rate Experience" />
                  </div>
                </div>
              </div>
            )}
            {/* History Bookings Section Ends */}
          </div>
        </div>
      </MyRideContainer>
    </>
  );
};

export default RidesContainer;
