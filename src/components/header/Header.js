import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { FiChevronsRight } from "react-icons/fi";
// import { FiChevronsLeft } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const HeaderSection = styled.section``;

  const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    background: var(--container-color);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 70px;

    @media screen and (max-width: 575px) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    > .img_section img {
      width: 90px;
    }

    > .menu__icon {
      font-size: 35px;
      margin-top: 10px;
      color: var(--title-color);
      transition: 0.3s;

      &:hover {
        color: var(--title-color-dark);
      }

      > svg {
        cursor: pointer;
      }
    }

    > .links-section {
      position: absolute;
      bottom: 0;
      right: -1000%;
      height: calc(100% - 70px);
      background: var(--green-bg);
      border-bottom-left-radius: 15px;
      width: 290px;
      overflow-y: auto;
      transition: 1s;
      z-index: var(--z-fixed);

      @media screen and (max-width: 575px) {
        border-bottom-left-radius: 15px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 15px;
      }

      > .close__nav-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 20px;
        cursor: pointer;

        > path {
          stroke: var(--container-color);
        }
        &:hover > path {
          stroke: var(--title-color-dark);
        }
      }

      .choose__type {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin: 40px 0 0;
        padding: 10px 0;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
        border-radius: 10px;

        > div {
          border: 2px solid transparent;
          color: var(--title-color);
          cursor: pointer;

          &:hover {
            border-bottom: 2px solid #fff;
            color: #fff;
          }

          > span {
            font-weight: var(--font-medium);
          }
        }

        > .choose__name-active {
          border-bottom: 2px solid #fff;
          color: #fff;
        }
      }

      > .all__links {
        padding: 10px 15px 25px;
      }

      .nav__link {
        > a {
          color: var(--title-color);
          display: flex;
          align-items: center;
          margin: 10px 0;
          background: linear-gradient(to right, #fff 0%, transparent 95%) 100%
            center no-repeat;
          padding: 5px 10px;
          border-radius: 10px;

          svg {
            margin-left: 7px;
            font-size: 20px;
            width: 28px;

            > polyline {
              stroke: var(--title-color);
              transition: 0.3s;
            }
          }

          &:hover svg > polyline {
            transform: translateX(7px);
          }
        }
      }

      .see__less-link > a {
        background: linear-gradient(to right, red 0%, transparent 95%) 100%
          center no-repeat !important;
        color: #fff !important;
        margin-bottom: 70px;

        > svg > polyline {
          stroke: #fff;
        }
      }

      .see__more-link > a {
        background: linear-gradient(to right, yellow 0%, transparent 95%) 100%
          center no-repeat !important;
        color: black !important;

        > svg > polyline {
          stroke: black;
        }
      }

      > .more-links > span {
        color: #fff;
        transition: 0.3s;
        display: flex;
        align-items: center;
        cursor: pointer;

        &:hover {
          color: var(--title-color);
        }
        &:hover .back__icon-btn {
          stroke: var(--title-color);
        }

        > .back__icon-btn {
          font-size: 30px;
          stroke: #fff;
          transition: 0.3s;
          cursor: pointer;
        }
      }
    }

    .link__section-active {
      right: 0 !important;
      transition: 0.3s;
    }
  `;

  /* =============== TOGGLE MENU ================= */
  const [openNavToggle, setOpenNavToggle] = useState(false);

  /* =============== ACTIVE TYPE LINK ================= */
  const [forActive, setForActive] = useState(1);

  /* =============== ACTIVE MORE LINK ================= */
  const [moreActive, setMoreActive] = useState(0);

  return (
    <HeaderSection>
      <Container>
        <div className="img_section">
          <Link to="/dr-driver">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="menu__icon">
          <HiMenuAlt3 onClick={() => setOpenNavToggle(!openNavToggle)} />
        </div>
        {openNavToggle && (
          <div
            className={
              openNavToggle
                ? "links-section link__section-active"
                : "links-section"
            }
          >
            <GrClose
              className="close__nav-btn"
              onClick={() => setOpenNavToggle(!openNavToggle)}
            />

            <>
              <div className="choose__type">
                <div
                  className={forActive === 1 && "choose__name-active"}
                  onClick={() => setForActive(1)}
                >
                  <span className="active__type">For Customer</span>
                </div>
                <div
                  className={forActive === 2 && "choose__name-active"}
                  onClick={() => setForActive(2)}
                >
                  <span className="active__type">For Driver</span>
                </div>
              </div>
              {/* ====== FOR CUSTOMER START ===== */}
              {forActive === 1 && (
                <ul className="all__links">
                  <li className="nav__link">
                    <Link to="/make-enquiry">
                      Make an Enquiry
                      <FiChevronsRight />
                    </Link>
                  </li>
                  <li className="nav__link">
                    <Link to="/my_rides">
                      My Rides
                      <FiChevronsRight />
                    </Link>
                  </li>
                  <li className="nav__link">
                    <Link to="/dr-driver">
                      My Subscription
                      <FiChevronsRight />
                    </Link>
                  </li>
                  <li className="nav__link">
                    <Link to="/dr-driver">
                      My Feedback
                      <FiChevronsRight />
                    </Link>
                  </li>
                  <li className="nav__link">
                    <Link to="/agent-login">
                      Agent Panel
                      <FiChevronsRight />
                    </Link>
                  </li>
                  <li className="nav__link">
                    <Link to="/about-us">
                      About Us
                      <FiChevronsRight />
                    </Link>
                  </li>
                </ul>
              )}
              {/* ====== FOR CUSTOMER ENDS ===== */}

              {/* ====== FOR DRIVER START ===== */}
              {forActive === 2 && (
                <ul className="all__links">
                  <li className="nav__link">
                    <Link to="/driver-login">
                      Trusted Driver
                      <FiChevronsRight />
                    </Link>
                  </li>
                  <li className="nav__link">
                    <Link to="/agent-login">
                      Agent Panel
                      <FiChevronsRight />
                    </Link>
                  </li>
                  <li className="nav__link">
                    <Link to="/dr-driver">
                      Clear My Due
                      <FiChevronsRight />
                    </Link>
                  </li>
                  <li className="nav__link">
                    <Link to="/dr-driver">
                      My Bonus Status
                      <FiChevronsRight />
                    </Link>
                  </li>
                  <li className="nav__link">
                    <Link to="/apply-driver-job">
                      Apply for Driver Job
                      <FiChevronsRight />
                    </Link>
                  </li>
                  {moreActive !== 3 ? (
                    <li className="nav__link see__more-link">
                      <Link onClick={() => setMoreActive(3)}>
                        More
                        <FiChevronsRight />
                      </Link>
                    </li>
                  ) : (
                    <li
                      style={{
                        color: "var(--container-color)",
                        textAlign: "center",
                      }}
                    >
                      More Useful Links
                    </li>
                  )}

                  {/* ====== FOR MORE => START ===== */}
                  {moreActive === 3 && (
                    <ul className="all__links">
                      {/* <span onClick={() => setForActive(2)}>
                      <FiChevronsLeft className="back__icon-btn" />
                      Back
                    </span> */}
                      <li className="nav__link">
                        <Link to="/dr-driver">
                          Duty Report
                          <FiChevronsRight />
                        </Link>
                      </li>
                      <li className="nav__link">
                        <Link to="/dr-driver">
                          My Overtime Status
                          <FiChevronsRight />
                        </Link>
                      </li>
                      <li className="nav__link">
                        <Link to="/dr-driver">
                          Gift to Customers
                          <FiChevronsRight />
                        </Link>
                      </li>
                      <li className="nav__link">
                        <Link to="/dr-driver">
                          Complete My Verification
                          <FiChevronsRight />
                        </Link>
                      </li>
                      <li className="nav__link">
                        <Link to="/dr-driver">
                          Hiring Trainer Panel
                          <FiChevronsRight />
                        </Link>
                      </li>
                      <li className="nav__link">
                        <Link to="/dr-driver">
                          Onboarding Trainer
                          <FiChevronsRight />
                        </Link>
                      </li>
                      {moreActive === 3 && (
                        <li className="nav__link see__less-link">
                          <Link onClick={() => setMoreActive(0)}>
                            See Less
                            <FiChevronsRight stroke="#fff" />
                          </Link>
                        </li>
                      )}
                    </ul>
                  )}

                  {/* ====== FOR MORE => ENDS ===== */}
                </ul>
              )}
              {/* ====== FOR DRIVER ENDS ===== */}
            </>
          </div>
        )}
      </Container>
    </HeaderSection>
  );
};

export default Header;
