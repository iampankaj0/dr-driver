import React from "react";
import styled from "styled-components";
import rt_icon from "../../assets/rt_icon.png";
import CallIcon from "@mui/icons-material/Call";
import CustomButton from "../reusable/CustomButton";

const LoginContainer = () => {
  const MyRideContainer = styled.div`
    background: var(--container-color);
    margin: 40px auto 40px;
    border-radius: 25px;
    display: block;

    > .heading__div {
      padding: 15px 10px;
      background: var(--blue-color);
      border-top-right-radius: 25px;
      border-top-left-radius: 25px;

      > p {
        font-size: 16px;
        color: #fff;
        text-transform: capitalize;
        margin-bottom: 10px;
        font-weight: 400;
        line-height: 26px;
        display: inline-block;
        background: #fff;
        color: #16588e;
        padding: 0 4px;
        margin-left: -10px;
        top: 15px;
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
        text-transform: capitalize;
        color: var(--container-color);
        margin-top: 30px;
      }
    }

    > .login__form__container {
      padding: 30px 15px;

      > .input__div {
        display: flex;
        align-items: center;
        height: 35px;
        max-width: 400px;
        margin: 0 auto;

        > div {
          height: 100%;
          width: 35px;
          background: var(--blue-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--container-color);
        }

        > input {
          width: 100%;
          height: 100%;
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

  return (
    <>
      <MyRideContainer>
        <div className="heading__div">
          <p>Your Car, our driver</p>
          <h3>agent login</h3>
        </div>
        <div className="login__form__container">
          <div className="input__div">
            <div>
              <CallIcon />
            </div>
            <input type="number" placeholder="Enter Agent Mobile Number" />
          </div>
          <CustomButton name="submit" position="center" />
        </div>
      </MyRideContainer>
    </>
  );
};

export default LoginContainer;
