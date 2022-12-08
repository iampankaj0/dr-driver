import React from "react";
import styled from "styled-components";

const FixDriverForm = () => {
  const FixDriver = styled.div`
    background: var(--container-color);
    padding: 10px;
    margin: 40px 15px;
    border-radius: 25px;

    > div {
      padding: 30px;
      @media screen and (max-width: 450px) {
        padding: 30px 0;
      }
      > div {
        height: 300px;
        border: 2px solid var(--blue-color);
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: center;

        > div {
          text-align: center;
          position: relative;

          > h3 {
            font-size: 18px;
            color: var(--title-color);
            margin: 15px 0;
          }
          > .main__head {
            font-size: 30px;
            line-height: 1.1;
            font-weight: var(--font-semi-bold);
            color: var(--blue-color);
            margin: 15px 0;

            @media screen and (max-width: 450px) {
              font-size: 27px;
            }
          }
          > .description {
            font-size: 14px;
          }
          > .section__btn {
            display: block;
            margin: 25px auto 15px;
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
      }
      > .permanent__driver {
        margin-bottom: 20px;
      }
    }
  `;

  return (
    <FixDriver>
      <div>
        <div className="permanent__driver">
          <div>
            <h3>Driver on Fixed Salary</h3>
            <div className="main__head">Permanent Driver</div>
            <p className="description">For long term</p>
            <button className="section__btn">Hire Me</button>
          </div>
        </div>
        <div className="subscribe__save">
          <div>
            <h3>Keep it Simple</h3>
            <div className="main__head">Subscribe & Save</div>
            <p className="description">Same Driver With Flexible Schedule</p>
            <button className="section__btn">Subscribe</button>
          </div>
        </div>
      </div>
    </FixDriver>
  );
};

export default FixDriverForm;
