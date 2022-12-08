import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ChooseDriverType = () => {
  const DriverType = styled.div`
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

    @media screen and (max-width: 767px) {
      display: none;
    }
  `;
  return (
    <DriverType>
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
    </DriverType>
  );
};

export default ChooseDriverType;
