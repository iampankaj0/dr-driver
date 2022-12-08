import React, { useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import rt_icon from "../../assets/rt_icon.png";
import CustomButton from "../reusable/CustomButton";
import { GrClose } from "react-icons/gr";
import { BsPersonFill } from "react-icons/bs";

const DriverJobContainer = () => {
  const DriverJob = styled.div`
    background: var(--container-color);
    margin: 40px auto 40px;
    border-radius: 25px;
    display: block;

    > .heading__div {
      background: var(--blue-color);
      border-radius: 15px;
      padding: 10px;

      > p {
        font-size: 14px;
        text-transform: capitalize;
        margin-bottom: 10px;
        line-height: 26px;
        display: inline-block;
        background: #fff;
        color: var(--blue-color);
        padding: 0 4px;
        margin-left: -10px;
        top: 13px;
        position: relative;

        &:before {
          content: "";
          background: url(${rt_icon});
          position: absolute;
          right: -15px;
          top: 0;
          width: 16px;
          height: 26px;
          background-size: cover;
          background-repeat: no-repeat;
        }
      }
      > h3 {
        text-align: center;
        color: var(--container-color);
        text-transform: capitalize;
        margin-top: 30px;
      }
    }

    > .share__details_head {
      text-align: center;
      padding: 15px 10px 0;
      font-size: 18px;
    }

    > .share__details_description-link {
      color: var(--blue-color);
      margin: 0 10px 15px;
      text-align: center;
      font-size: 13px;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    > .driver__detail_type {
      padding: 10px;

      > .detail {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 30px;
        margin: 10px 0;
        > div {
          height: 100%;
        }
        > select {
          height: 100%;
          width: 130px;
          outline: none;
          border: 1px solid var(--text-color);
          background: var(--text-color);
          color: var(--container-color);
        }
      }
    }

    > .driver__detail_form {
      padding: 0 10px 15px;

      > .form__item {
        display: flex;
        align-items: center;
        height: 35px;
        margin: 10px 0;

        > div {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 35px;
          background: var(--blue-color);
          color: #fff;
          font-size: 18px;
        }
        > input,
        > select {
          height: 100%;
          width: 100%;
          border: 1px solid var(--text-color);
          border-left: none;
          outline: none;
          padding-left: 10px;
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

  const DriverJobModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -1000%);
    background: var(--body-color);
    border-radius: 15px;
    width: 450px;
    box-sizing: border-box;
    overflow-y: scroll;
    transition: 0.5s;

    @media screen and (min-width: 767px) {
      height: 80vh;
    }
    @media screen and (max-width: 500px) {
      width: 100%;
      height: 100vh;
      border-radius: 0;
    }

    > .close__btn {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 18px;
      cursor: pointer;

      > svg path {
        stroke: #fff;
      }
    }

    > .heading__div {
      background: var(--blue-color);
      border-radius: 15px;
      padding: 10px;

      @media screen and (max-width: 500px) {
        border-radius: 0;
      }

      > p {
        font-size: 14px;
        text-transform: capitalize;
        margin-bottom: 10px;
        line-height: 26px;
        display: inline-block;
        background: #fff;
        color: var(--blue-color);
        padding: 0 4px;
        margin-left: -10px;
        top: 13px;
        position: relative;

        &:before {
          content: "";
          background: url(${rt_icon});
          position: absolute;
          right: -15px;
          top: 0;
          width: 16px;
          height: 26px;
          background-size: cover;
          background-repeat: no-repeat;
        }
      }
      > h3 {
        text-align: center;
        color: var(--container-color);
        text-transform: capitalize;
        margin-top: 30px;
      }
    }

    > .selectCity__names {
      padding: 10px;

      > .cityName {
        display: flex;
        align-items: center;
        background: linear-gradient(
            to right,
            var(--blue-color) 0%,
            transparent 95%
          )
          100% center no-repeat;
        border-radius: 8px;
        padding: 5px 10px;
        margin: 10px 0;
        color: var(--container-color);

        svg {
          transform: translateX(5px);
          transition: 0.4s;
        }
        &:hover {
          svg {
            transform: translateX(10px);
          }
        }
      }
    }

    > .see__city__description {
      padding: 10px;
      ul li {
        margin: 10px;
        > span {
          color: var(--title-color-dark);
          font-weight: var(--font-semi-bold);
        }
      }
    }
  `;

  //  Driver Modal Active/InActive State
  const [driverModalActive, setdriverModalActive] = useState(true);
  const [driverDescription, setdriverDescription] = useState(false);

  const handleCloseModal = () => {
    setdriverModalActive(false);
    setdriverDescription(false);
  };

  return (
    <>
      <DriverJob>
        <div className="heading__div">
          <p>Your car, our driver</p>
          <h3>apply for driver jobs</h3>
        </div>
        <p className="share__details_head">SHARE YOUR DETAILS</p>
        <p
          className="share__details_description-link"
          onClick={() => setdriverModalActive(true)}
        >
          about driver job
        </p>
        <div className="driver__detail_type">
          <div className="detail">
            <div>Expert In?</div>
            <select>
              <option>Select</option>
              <option>Private Driver</option>
              <option>chauffeur</option>
              <option>Taxi Driver</option>
            </select>
          </div>
          <div className="detail">
            <div>Driving Experience?</div>
            <select>
              <option>Select</option>
              <option>Manual Car</option>
              <option>Automatic Car</option>
              <option>Luxury Car</option>
            </select>
          </div>
          <div className="detail">
            <div>Apply For?</div>
            <select>
              <option>Select</option>
              <option>Part Time</option>
              <option>Full Time</option>
            </select>
          </div>
          <div className="detail">
            <div>Licence Type?</div>
            <select>
              <option>Select</option>
              <option>LMV</option>
              <option>HMV</option>
              <option>HPMV/HTC</option>
              <option>MCWG</option>
              <option>HGMV</option>
              <option>HPMV</option>
            </select>
          </div>
        </div>
        <div className="driver__detail_form">
          <div className="form__item">
            <div>
              <BsPersonFill />
            </div>
            <input type="text" placeholder="Driver Name" />
          </div>
          <div className="form__item">
            <div>
              <BsPersonFill />
            </div>
            <input type="number" placeholder="Driver number" />
          </div>
          <div className="form__item">
            <div>
              <BsPersonFill />
            </div>
            <input type="text" placeholder="Enter Address" />
          </div>
          <div className="form__item">
            <div>
              <BsPersonFill />
            </div>
            <input type="number" placeholder="Pin Code" />
          </div>
          <div className="form__item">
            <div>
              <BsPersonFill />
            </div>
            <select>
              <option>City</option>
            </select>
          </div>
          <div className="form__item">
            <div>
              <BsPersonFill />
            </div>
            <select>
              <option>Zone</option>
            </select>
          </div>
          <div className="form__item">
            <div>
              <BsPersonFill />
            </div>
            <select>
              <option>Age</option>
            </select>
          </div>
          <div className="form__item">
            <div>
              <BsPersonFill />
            </div>
            <select>
              <option>Education</option>
            </select>
          </div>
          <CustomButton name="submit" position="center" />
        </div>
      </DriverJob>

      <DriverJobModal
        className={`driver_job-modal ${
          driverModalActive ? "driver__modal-active" : ""
        }`}
      >
        <div className="close__btn" onClick={handleCloseModal}>
          <GrClose />
        </div>
        <div className="heading__div">
          <p>Your car, our driver</p>
          <h3>driver job information</h3>
        </div>
        {!driverDescription ? (
          <div className="selectCity__names">
            <Link
              onClick={() => setdriverDescription(true)}
              to=""
              className="cityName"
            >
              Delhi/NCR
              <AiOutlineDoubleRight />
            </Link>
            <Link
              onClick={() => setdriverDescription(true)}
              to=""
              className="cityName"
            >
              Mumbai
              <AiOutlineDoubleRight />
            </Link>
            <Link
              onClick={() => setdriverDescription(true)}
              to=""
              className="cityName"
            >
              Chandigarh
              <AiOutlineDoubleRight />
            </Link>
            <Link
              onClick={() => setdriverDescription(true)}
              to=""
              className="cityName"
            >
              Bangalore
              <AiOutlineDoubleRight />
            </Link>
            <Link
              onClick={() => setdriverDescription(true)}
              to=""
              className="cityName"
            >
              Hyderabad
              <AiOutlineDoubleRight />
            </Link>
            <Link
              onClick={() => setdriverDescription(true)}
              to=""
              className="cityName"
            >
              Chennai
              <AiOutlineDoubleRight />
            </Link>
            <Link
              onClick={() => setdriverDescription(true)}
              to=""
              className="cityName"
            >
              Pune
              <AiOutlineDoubleRight />
            </Link>
            <Link
              onClick={() => setdriverDescription(true)}
              to=""
              className="cityName"
            >
              Kolkata
              <AiOutlineDoubleRight />
            </Link>
            <Link
              onClick={() => setdriverDescription(true)}
              to=""
              className="cityName"
            >
              Jaipur
              <AiOutlineDoubleRight />
            </Link>
            <Link
              onClick={() => setdriverDescription(true)}
              to=""
              className="cityName"
            >
              Lucknow
              <AiOutlineDoubleRight />
            </Link>
          </div>
        ) : (
          <div className="see__city__description">
            <ul>
              <li>
                कंपनी की शुरुआत Nov 2019 से हुई थी। कंपनी का उद्देश्य है
                भरोसेमंद ड्राइवर्स द्वारा कस्टमर्स को बेहतर services प्रदान करना
                और ड्राइवर्स को ज्यादा से ज्यादा रोजगार प्रदान करना।
              </li>
              <li>हम तीन तरह की services कस्टमर को देते हैं।</li>
              <li>
                <span>
                  पहली - लोकल बुकिंग्स <br />
                  दूसरी - आउटस्टेशन बुकिंग्स <br />
                  तीसरी- मंथली बुकिंग्स
                </span>
              </li>
              <li>
                <span>लोकल बुकिंग्स</span> में कस्टमर 1 घंटे से 12 घंटे तक की
                Round trip बुकिंग करते हैं या फिर 1 से 60 KM की OneWay बुकिंग्स
                करते हैं
              </li>
              <li>
                <span>ऑउटस्टेऑन बुकिंग्स</span> में कस्टमर लम्बी दूरी की
                बुकिंग्स Round Trip या One Way बुकिंग्स करते हैं।
              </li>
              <li>
                <span>मंथली बुकिंग्स</span> में कस्टमर्स ड्राइवर को तनख्वाह पर
                रखते हैं।
              </li>
              <li>
                <span>लोकल बुकिंग्स और आउटस्टेशन बुकिंग्स</span> पर कम्पनी का
                कमीशन 20 % से 10% होता है। कमीशन GST हटा के बचे हुए बिल पर लगता
                है। ओवरटाइम 1.5 Rs पर मिनट के हिसाब से दिया जाता है और रात में
                गाड़ी चलाने पर 150 Rs नाईट चार्ज दिया जाता है। ओवरटाइम और नाईट
                चार्ज पूरा ड्राइवर को दिया जाता है, इसमें कम्पनी का कोई कमीशन
                नहीं होता है।
              </li>
              <li>
                रजिस्ट्रेशन फीस 250 Rs है, तीसरी बुकिंग पूरी होने पर आपके घर 2
                sanitizer डिलीवर किये जाएंगे और दसवीं बुकिंग पूरी होने पर आपको
                250 Rs जोइनिंग बोनस भी दिया जाएगा।
              </li>
            </ul>

            <div className="apply__btn">
              <CustomButton
                name="Apply now"
                onClick={handleCloseModal}
                position="center"
              />
            </div>
          </div>
        )}
      </DriverJobModal>
    </>
  );
};

export default DriverJobContainer;
