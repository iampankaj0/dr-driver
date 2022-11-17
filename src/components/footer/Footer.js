import React from "react";
import styled from "styled-components";
import { GrMail } from "react-icons/gr";
import { TbBuildingBank } from "react-icons/tb";
import { ImHeadphones } from "react-icons/im";
import { FiChevronsRight } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { SiTwitter } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  const Footer = styled.section`
    margin: 40px 15px 0;
    display: flex;

    > div {
      flex: 1;
    }

    > .address__contact {
      color: var(--container-color);

      h2 {
        color: var(--container-color);
        font-size: 18px;
        margin: 0 0 15px;
      }

      .contact__details {
        p {
          display: grid;
          grid-template-columns: 25px 1fr;
          margin: 10px 0;

          svg {
            font-size: 20px;
            line-height: 1.3;
          }

          a {
            color: #fff;
            transition: 0.3s;
            font-size: 14px;
            &:hover {
              color: var(--body-color);
            }
          }

          span {
            font-size: 14px;
          }
        }
      }
      > .follow__us {
        h3 {
          color: var(--container-color);
          font-size: 16px;
          margin: 30px 0 15px;
        }

        > .social__icons {
          display: flex;
          > a {
            width: 35px;
            height: 35px;
            border: 1px solid var(--container-color);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            border-radius: 50%;
            color: #fff;

            &:hover .facebook__icon {
              color: var(--blue-color);
            }
            &:hover .instagram__icon {
              color: #f77737;
            }
            &:hover .twitter__icon {
              color: #2bc4ff;
            }

            .facebook__icon {
              font-size: 20px;
              transition: 0.3s;
            }
            .instagram__icon {
              font-size: 20px;
              transition: 0.3s;
            }
            .twitter__icon {
              font-size: 20px;
              transition: 0.3s;
            }
          }
        }
      }
    }

    > .link__footer {
      display: flex;
      align-items: center;
      justify-content: right;
      flex-direction: column;
      margin: 0 0 0 20px;

      > a {
        color: var(--title-color);
        margin: 5px 0;
        background: linear-gradient(to right, #fff 0%, transparent 95%) 100%
          center no-repeat;
        padding: 5px 20px 5px 10px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        transition: 0.4s;
        width: 100%;

        > svg {
          font-size: 20px;
          transform: translateX(5px);
          transition: 0.4s;
        }
        &:hover {
          color: var(--title-color-dark);
        }
        &:hover svg {
          transform: translateX(10px);
        }
      }

      > .privacy__footer {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 15px;

        > a {
          color: var(--container-color);
          font-size: 12px;

          &:first-child:after {
            content: "|";
            margin: 0 10px;
          }
        }
      }

      @media screen and (max-width: 515px) {
        margin: 40px 0 0;
      }
    }

    @media screen and (min-width: 768px) {
      display: none;
    }

    @media screen and (max-width: 515px) {
      flex-direction: column;
    }
  `;

  const DriverJob = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;

    > .job__apply__btn {
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
  `;

  return (
    <>
      <Footer>
        <div className="address__contact">
          <h2>Contact Us</h2>

          <div className="contact__details">
            <p>
              <GrMail />

              <a href="mailto:drdriversupport@gmail.com">
                drdriversupport@gmail.com
              </a>
            </p>
            <p>
              <ImHeadphones />

              <a href="tel:8295536***">8295536***</a>
            </p>
            <p>
              <TbBuildingBank />
              <span>
                Office No G-39, Vardhman Grand Market, Sector 3, Dwarka, New
                Delhi- 110078
              </span>
            </p>
          </div>
          <div className="follow__us">
            <h3>Follow Us</h3>
            <div className="social__icons">
              <Link>
                <FaFacebook className="facebook__icon" />
              </Link>
              <Link>
                <IoLogoInstagram className="instagram__icon" />
              </Link>
              <Link>
                <SiTwitter className="twitter__icon" />
              </Link>
            </div>
          </div>
        </div>
        <div className="link__footer">
          <Link to="/dr-driver">
            Make an Enquiry <FiChevronsRight />
          </Link>
          <Link to="/dr-driver">
            Cancel my Booking <FiChevronsRight />
          </Link>
          <Link to="/dr-driver">
            My Weekly Schedule <FiChevronsRight />
          </Link>
          <Link to="/dr-driver">
            Download Invoice <FiChevronsRight />
          </Link>
          <Link to="/dr-driver">
            My Feedback <FiChevronsRight />
          </Link>
          <Link to="/dr-driver">
            About Us <FiChevronsRight />
          </Link>
          <div className="privacy__footer">
            <Link to="/dr-driver">Terms & Conditions</Link>
            <Link to="/dr-driver">Privacy Policy</Link>
          </div>
        </div>
      </Footer>
      <DriverJob>
        <button className="job__apply__btn">Apply For Driver Job</button>
      </DriverJob>
    </>
  );
};

export default Footer;
