import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import CustomButton from "../reusable/CustomButton";
import "./subscribeModal.scss";

const SubscribeModal = ({ setOpenSubscribeModal }) => {
  //   email state
  const [email, setEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState(0);

  const handleSubscribe = () => {
    if (email) {
      setSubscribeMessage(1);
    }
  };

  return (
    <section className="main__subscribe__container">
      <div>
        <div
          className="close__btn"
          onClick={() => setOpenSubscribeModal(false)}
        >
          <GrClose />
        </div>
        <div className="subscribe__content">
          <div style={{ display: `${subscribeMessage === 0 ? "" : "none"}` }}>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
            <CustomButton
              disabled={email ? false : true}
              name="Subscribe"
              position="center"
              onClick={handleSubscribe}
            />
          </div>
          <div style={{ display: `${subscribeMessage === 1 ? "" : "none"}` }}>
            Hii
            <h3>{email}</h3>
            <p>
              <span>ThankYou</span> for subscribing us...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeModal;
