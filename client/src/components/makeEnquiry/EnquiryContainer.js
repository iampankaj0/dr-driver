import React, { useState } from "react";
import styled from "styled-components";
import { BsPersonFill } from "react-icons/bs";
import { FaCar, FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import CustomButton from "../reusable/CustomButton";
import rt__icon from "../../assets/rt_icon.png";

const MyEnqContainer = styled.div`
  background: var(--container-color);
  padding: 10px;
  margin: 40px 15px;
  border-radius: 25px;

  > .heading__div {
    background: var(--blue-color);
    margin: 15px 0;
    padding: 10px;
    border-radius: 15px;

    > p {
      font-size: 14px;
      text-transform: capitalize;
      margin-bottom: 10px;
      font-weight: 400;
      line-height: 26px;
      display: inline-block;
      background: #fff;
      color: var(--blue-color);
      padding: 0 4px;
      margin-left: -13px;
      position: relative;

      &:before {
        content: "";
        background: url(${rt__icon});
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
      color: var(--container-color);
      text-align: center;
      text-transform: capitalize;
      margin-top: 30px;
    }
  }

  > .enquiry__content {
    li {
      font-size: 15px;
      margin: 10px;

      > span {
        color: var(--title-color-dark);
        font-weight: var(--font-semi-bold);
      }
    }
  }

  > .enquiry__form {
    margin-top: 30px;
    .form__container {
      display: flex;
      align-items: center;
      height: 35px;
      margin: 10px 0;

      > .icon {
        height: 35px;
        width: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--blue-color);
        color: #fff;
      }

      > input,
      > select {
        width: 100%;
        height: 100%;
        border: 1px solid var(--text-color);
        border-left: none;
        outline: none;
        padding: 0 0 0 10px;
        color: var(--title-color);
      }
    }
  }
`;

const EnquiryContainer = () => {
  const [emailData, setEmailData] = useState({
    name: this,
    driverRequire: "",
    phone: "",
    date: "",
  });

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };

  const { name, driverRequire, phone, date } = emailData;
  const handleSubmitData = (e) => {
    e.preventDefault();
    if (name && driverRequire && phone && date) {
      alert(
        `Name: ${name}, "Driver Required For": ${driverRequire}, "Phone Number": ${phone}, "When (Date)": ${date}`
      );
      // After Submittion Empty The Form
      setEmailData({
        name: "",
        driverRequire: "",
        phone: "",
        date: "",
      });
    } else {
      alert("All fields are required");
    }
  };

  return (
    <MyEnqContainer>
      <div className="heading__div">
        <p>Verified & experienced drivers</p>
        <h3>make an enquiry</h3>
      </div>

      <div className="enquiry__content">
        <ul>
          <li>
            We are presently available in Delhi, Gurgaon, Faridabad, Noida,
            Ghaziabad, Greater Noida.
          </li>
          <li>
            We provide one-way & round trip driver services for local &
            outstation travel. Our drivers require <span>90 Minutes</span> from
            booking time to reach at the customer's doorstep.
          </li>
          <li>
            We provide drivers with <span>5+ Years</span> of experience, who
            drive automatic & Manual cars in Local, Highway & Hills stations. We
            ensure the following verifications before deployment of the driver.
            Court Record <span>Verification</span>, License Verification, Aadhar
            Verification.
          </li>
          <li>
            We provided masks & sanitizer to our drivers to ensure the safety of
            drivers & customers from <span>Covid-19</span>.
          </li>
          <li>
            Our backend team assigns <span>nearby</span> drivers & tracks them
            to <span>ensures</span>
            they reach at customer's doorstep as per the scheduled time. Our
            customer care is <span>8295536***</span>
          </li>
          <li>
            Our <span>Head office</span> is based out of Vardhman Grand Market,
            Sector -3 Dwarka, Delhi 110075
          </li>
        </ul>
      </div>

      <div className="enquiry__form">
        <div className="form__container">
          <div className="icon">
            <BsPersonFill />
          </div>
          <input
            value={name}
            onChange={handleFormInput}
            name="name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="form__container">
          <div className="icon">
            <FaCar />
          </div>
          <select
            value={driverRequire}
            onChange={handleFormInput}
            name="driverRequire"
          >
            <option value="">Driver Require For?</option>
            <option value="Incity-One Way (Only Drop)">
              Incity-One Way (Only Drop)
            </option>
            <option value="Incity-Round (Return Trip)">
              Incity-Round (Return Trip)
            </option>
            <option value="Outstation-One Way (Only Drop)">
              Outstation-One Way (Only Drop)
            </option>
            <option value="Outstation- For a few days (Return Trip)">
              Outstation- For a few days (Return Trip)
            </option>
            <option value="few days's a week">few days's a week</option>
            <option value="monthly basis">monthly basis</option>
            <option value="Permanent Driver">Permanent Driver</option>
            <option value="Commercial Driver">Commercial Driver</option>
          </select>
        </div>
        <div className="form__container">
          <div className="icon">
            <FaPhoneAlt />
          </div>
          <input
            value={phone}
            onChange={handleFormInput}
            name="phone"
            type="number"
            placeholder="Mobile Number"
          />
        </div>
        <div className="form__container">
          <div className="icon">
            <FaCalendarAlt />
          </div>
          <input
            value={date}
            onChange={handleFormInput}
            name="date"
            type="date"
            placeholder="When ?"
          />
        </div>
        <CustomButton
          onClick={handleSubmitData}
          name="know our prices"
          position="center"
        />
      </div>
    </MyEnqContainer>
  );
};

export default EnquiryContainer;
