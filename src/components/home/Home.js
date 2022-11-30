import React, { useState } from "react";
import MetaTitle from "../reusable/MetaTitle";
import Header from "../header/Header.js";
import { Container, Section } from "../reusable/reuseStyle";
import styled from "styled-components";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FaHandPointUp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { facilityArray, facilityBrief } from "../../allArrays";
import dummyUser from "../../assets/user_dummy.png";
import referImg from "../../assets/refer-and-earn.png";
import { FiChevronsRight } from "react-icons/fi";
import Footer from "../footer/Footer";
import SubscribeModal from "./SubscribeModal";

const Home = () => {
  const SubSection = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    .driver__type {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      flex-wrap: wrap;
      padding: 10px;
      margin: 40px 15px 0;
      border-radius: 25px;
      background: var(--container-color);

      > .driver__type-link {
        display: flex;
        align-items: center;
        background: var(--green-bg);
        padding: 10px 40px;
        border-radius: 30px;
        font-weight: var(--font-semi-bold);
        width: 250px;
        margin: 15px 10px;
        color: var(--container-color);

        > svg {
          font-size: 20px;
          margin-left: 7px;
          transition: 0.3s;
        }

        &:hover svg {
          transform: translateX(10px);
        }
      }
    }

    > .scrollable_div {
      overflow-y: auto;
      overflow-x: hidden;
      height: calc(100vh - 150px);
    }

    @media screen and (max-width: 767px) {
      display: block;

      .scrollable_div {
        height: auto;
      }
    }
  `;

  const DriverRequirement = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: var(--container-color);
    padding: 10px;
    margin: 40px 15px 0;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;

    > h1 {
      color: var(--green-color);
    }
    > .driver__req-icon {
      margin-top: 20px;
      color: var(--blue-color);
      font-size: 200px;
      @media screen and (min-width: 768px) {
        transform: rotate(-89deg);
      }
    }

    > .safe__driver {
      height: 230px;
      width: fit-content;
      background: var(--blue-bg);
      ${"" /* margin: 10px; */}
      border-radius: 25px;
      padding: 20px 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      @media screen and (max-width: 360px) {
        height: auto;
      }

      > p {
        color: #fff;
        font-size: 14px;
      }
      > h2 {
        color: #fff;
        font-size: 16px;
        margin-top: 20px;

        > span {
          color: var(--green-color);

          @media screen and (max-width: 400px) {
            display: block;
            text-align: center;
            color: var(--green-color);
            font-weight: var(--font-semi-bold);
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: #d8b4b4;
          }
        }
      }
    }
  `;

  const OurFacilities = styled.div`
    > .OurFacilities {
      background: var(--container-color);
      padding: 10px;
      margin: 0 15px;
      border-bottom-right-radius: 25px;
      border-bottom-left-radius: 25px;

      .class__icon {
        font-size: 40px;
        text-align: center;
        width: 100%;
        color: var(--text-color);

        path {
          stroke: var(--text-color);
        }
      }

      span.title__name {
        display: block;
        text-align: center;
        margin-top: 10px;
        font-size: 14px;
        font-weight: var(--font-semi-bold);
      }

      .swiper {
        width: 100%;
      }
    }
  `;

  const RatingContainer = styled.div`
    background: var(--container-color);
    padding: 10px;
    margin: 40px 15px 0;
    border-radius: 25px;

    > .rating__heading {
      font-size: 18px;
      margin: 15px 0;
      padding-bottom: 5px;
      font-weight: var(--font-semi-bold);
      color: var(--title-color-dark);
    }

    > .rating__section {
      display: grid;
      grid-template-columns: 160px 1fr;

      @media screen and (max-width: 400px) {
        grid-template-columns: 125px 1fr;
      }

      > div:first-child {
        p {
          color: var(--blue-color);
          font-size: 40px;
          font-weight: var(--font-semi-bold);
        }

        > .rating_star svg {
          color: var(--green-color);
          font-size: 20px;
          margin-right: 3px;
          animation: rightLeftStars 5s infinite;
        }
      }

      > .progressbar__div > div {
        display: flex;
        align-items: center;

        > span {
          margin-right: 5px;
          width: 10px;
        }
      }
    }

    .ratingPerson {
      > div:first-child {
        margin-top: 40px;
        border-top: none;
      }

      > div {
        border-top: 1px solid var(--text-color);
        padding: 10px;
      }

      > div {
        > .imgName {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;

          img {
            width: 45px;
            height: 45px;
            object-fit: cover;
            border-radius: 50%;
            margin-right: 10px;
            border: 1px solid var(--text-color);
          }

          > span {
            display: flex;
            align-items: center;

            h2 {
              font-size: 14px;
              color: var(--blue-color) !important;
            }
          }
          h3 {
            font-size: 14px;
            color: var(--blue-color) !important;
          }
        }

        .ratingStarDate {
          display: flex;
          align-items: center;

          > span:first-child {
            margin-right: 15px;
            line-height: 1;
          }

          svg {
            font-size: 20px;
            margin-right: 3px;
            color: var(--green-color);
          }
        }
      }

      > .see__more__review {
        display: flex;
        justify-content: end;

        > a {
          display: flex;
          align-items: center;
          padding: 7px 25px;
          border: 1px solid var(--blue-color);
          color: var(--blue-color);
          border-radius: 50px;
          transition: 0.3s;

          &:hover {
            background: var(--body-color);
          }
        }
      }
    }
  `;

  const Line = styled.div`
    background: #d4d4d4;
    height: 10px;
    width: 100%;
    border-radius: 15px;
    position: relative;

    > div {
      position: absolute;
      top: 0;
      left: 0;
      background: var(--green-color);
      border-radius: 15px;
      height: 100%;
    }

    > .colorPercent5star {
      width: 80%;
    }
    > .colorPercent4star {
      width: 70%;
    }
    > .colorPercent3star {
      width: 90%;
    }
    > .colorPercent2star {
      width: 20%;
    }
    > .colorPercent1star {
      width: 10%;
    }
  `;

  const SubscribeSave = styled.div`
    border: 2px solid var(--container-color);
    padding: 10px;
    margin: 40px 15px 0;
    border-radius: 25px;

    > div {
      .subscibe__heading {
        font-size: 18px;
        margin: 15px 0;
        padding-bottom: 5px;
        font-weight: var(--font-semi-bold);
        ${"" /* color: var(--title-color-dark); */}
        color: var(--container-color);
      }

      > h2 {
        text-align: center;
        color: var(--container-color);
      }

      > p {
        text-align: center;
        font-size: 14px;
        color: #f1f1f1;
      }

      > .subcribe__btn {
        display: block;
        margin: 15px auto 15px;
        color: var(--blue-color);
        background: var(--container-color);
        border: 1px solid var(--container-color);
        padding: 7px 25px;
        border-radius: 50px;
        transition: 0.3s;

        &:hover {
          color: var(--container-color);
          background: transparent;
        }
      }
    }
  `;

  const ReferAndEarn = styled.div`
    background: var(--container-color);
    padding: 10px;
    margin: 40px 15px 0;
    border-radius: 25px;
    display: flex;
    align-items: center;

    > div {
      > h2 {
        ${"" /* text-align: center; */}
        color: var(--blue-color);
        font-size: 18px;
        margin: 15px 0;
      }

      p {
        ${"" /* text-align: center; */}
        font-size: 14px;
      }

      .refer__now {
        display: block;
        margin: 25px 0 15px;
        color: var(--container-color);
        background-color: var(--blue-color);
        padding: 7px 25px;
        border: 1px solid var(--blue-color);
        border-radius: 50px;
        transition: 0.3s;

        &:hover {
          color: var(--blue-color);
          background-color: transparent;
        }
      }
    }
    > div.img__section img {
      width: 260px;
    }

    @media screen and (max-width: 500px) {
      flex-direction: column-reverse;

      > div.img__section img {
        width: 200px;
        display: block;
        margin: 0 auto;
      }
    }
  `;

  const [openFacilityId, setOpenFacilityId] = useState(0);

  const [openSubscribeModal, setOpenSubscribeModal] = useState(false);

  return (
    <Section>
      <MetaTitle title="Dr. Driver - Home" />

      <Container>
        <Header />

        <SubSection>
          <div>
            {/* DRIVER SELECTION CENTER START */}
            <div className="driver__type">
              <Link to="/hourly-driver" className="driver__type-link">
                <span>Hourly Driver</span>
                <AiOutlineDoubleRight />
              </Link>
              <Link to="/outstation-driver" className="driver__type-link">
                <span>OutStation Driver</span>
                <AiOutlineDoubleRight />
              </Link>
              <Link to="/monthly-driver" className="driver__type-link">
                <span>Monthly Driver</span>
                <AiOutlineDoubleRight />
              </Link>
            </div>
            {/* DRIVER SELECTION CENTER ENDS */}
          </div>

          <div className="scrollable_div">
            {/* I Require Driver For Section Start */}
            <DriverRequirement>
              <h1>I Require Driver For ?</h1>
              <div className="driver__req-icon">
                <FaHandPointUp />
              </div>

              {facilityBrief && (
                <div className="safe__driver">
                  <p> {facilityBrief[openFacilityId].p__tag} </p>
                  <h2>
                    {facilityBrief[openFacilityId].h2__tag}{" "}
                    {facilityBrief[openFacilityId].span__tag}
                  </h2>
                </div>
              )}
            </DriverRequirement>
            {/* I Require Driver For Section Ends */}

            {/* Our Facilities Start */}
            <OurFacilities>
              <div className="OurFacilities">
                <Swiper
                  className="testimonial__container"
                  loop={true}
                  spaceBetween={24}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    360: {
                      slidesPerView: 2,
                    },
                    430: {
                      slidesPerView: 2,
                    },
                    490: {
                      slidesPerView: 2,
                    },
                    550: {
                      slidesPerView: 3,
                    },
                    660: {
                      slidesPerView: 4,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                  modules={[Pagination]}
                >
                  {facilityArray.map((item) => {
                    return (
                      <SwiperSlide
                        className="testimonial__card testimonial__active"
                        key={item.id}
                        onClick={() => setOpenFacilityId(item.id - 1)}
                      >
                        <div className="class__icon">{item.icon}</div>
                        <span className="title__name"> {item.name} </span>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </OurFacilities>
            {/* Our Facilities Ends */}

            {/* Ratings Container Start */}
            <RatingContainer>
              <div className="rating__heading">Rating and Review</div>
              <div className="rating__section">
                <div>
                  <p>4.5</p>
                  <div className="rating_star">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarHalfFill />
                  </div>
                  <div className="total__review">76423</div>
                </div>
                <div className="progressbar__div">
                  <div>
                    <span>5</span>
                    <Line>
                      <div className="colorPercent5star"></div>
                    </Line>
                  </div>
                  <div>
                    <span>4</span>
                    <Line>
                      <div className="colorPercent4star"></div>
                    </Line>
                  </div>
                  <div>
                    <span>3</span>
                    <Line>
                      <div className="colorPercent3star"></div>
                    </Line>
                  </div>
                  <div>
                    <span>2</span>
                    <Line>
                      <div className="colorPercent2star"></div>
                    </Line>
                  </div>
                  <div>
                    <span>1</span>
                    <Line>
                      <div className="colorPercent1star"></div>
                    </Line>
                  </div>
                </div>
              </div>
              <div className="ratingPerson">
                <div>
                  <div className="imgName">
                    <span>
                      <img src={dummyUser} alt="dummyUser" />
                      <h2>Swati Kumari</h2>
                    </span>
                    <h3>Noida</h3>
                  </div>
                  <div className="ratingStarDate">
                    <span>
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </span>
                    <span>16 Nov, 2022</span>
                  </div>
                  <div className="reviewDescription">
                    <p>He did rash driving. Not a good experience! </p>
                  </div>
                </div>
                <div>
                  <div className="imgName">
                    <span>
                      <img src={dummyUser} alt="dummyUser" />
                      <h2>Ruchi Seth Trehan</h2>
                    </span>
                    <h3>Noida</h3>
                  </div>
                  <div className="ratingStarDate">
                    <span>
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </span>
                    <span>15 Nov, 2022</span>
                  </div>
                  <div className="reviewDescription">
                    <p>Driver was on time and drive well. Was polite. </p>
                  </div>
                </div>
                <div>
                  <div className="imgName">
                    <span>
                      <img src={dummyUser} alt="dummyUser" />
                      <h2>Anamika Mittal</h2>
                    </span>
                    <h3>Gurgaon</h3>
                  </div>
                  <div className="ratingStarDate">
                    <span>
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </span>
                    <span>13 Nov, 2022</span>
                  </div>
                  <div className="reviewDescription">
                    <p>On Time. Value for money. </p>
                  </div>
                </div>

                <div className="see__more__review">
                  <Link to="/ratings-and-review">
                    See more review <FiChevronsRight />
                  </Link>
                </div>
              </div>
            </RatingContainer>
            {/* Ratings Container Ends */}

            {/* Subscribe & Save Section Start */}
            <SubscribeSave>
              <div className="subscribe__and__save">
                <div className="subscibe__heading">Keep it Simple</div>
                <h2>Subscribe & Save</h2>
                <p>Same Driver With Flexible Schedule</p>
                <button
                  className="subcribe__btn"
                  onClick={() => setOpenSubscribeModal(true)}
                >
                  Subscribe Now
                </button>
                {openSubscribeModal && (
                  <SubscribeModal
                    setOpenSubscribeModal={setOpenSubscribeModal}
                  />
                )}
              </div>
            </SubscribeSave>
            {/* Subscribe & Save Section Ends */}

            {/* Refer and Earn Section Start */}
            <ReferAndEarn>
              <div className="refer__earn">
                <h2>Refer Your Friend & Get 10%</h2>
                <p>
                  You will get 10% at each & every booking of your friend. Earn
                  Rs 50,000+ every year.
                </p>
                <button className="refer__now">Refer Now</button>
              </div>
              <div className="img__section">
                <img src={referImg} alt="referImg" />
              </div>
            </ReferAndEarn>
            {/* Refer and Earn Section Ends */}

            {/* Footer Start */}
            <Footer />
            {/* Footer Ends */}
          </div>
        </SubSection>
      </Container>
    </Section>
  );
};

export default Home;
