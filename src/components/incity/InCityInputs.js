import React from "react";
import {
  BsPersonFill,
  BsFillClockFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { SiQzone } from "react-icons/si";
import { FaCalendarAlt, FaCar } from "react-icons/fa";

const InCityInputs = () => {
  return (
    <div>
      <div className="input__group">
        <div>
          <BsPersonFill />
        </div>
        <input type="text" placeholder="Name" />
      </div>
      <div className="input__group">
        <div>
          <ImLocation />
        </div>
        <input type="text" placeholder="Enter Pickup Address" />
      </div>
      <div className="input__group">
        <div>
          <SiQzone />
        </div>
        <select placeholder="Select Zone">
          <option value="">Select Zone</option>
        </select>
      </div>
      <div className="input__group">
        <div>
          <FaCalendarAlt />
        </div>
        <input type="date" placeholder="Date" />
      </div>
      <div className="input__group">
        <div>
          <BsFillClockFill />
        </div>
        <select placeholder="Select Time">
          <option value="">Select Time</option>
          <option value="12:00 pm">12:00 pm</option>
          <option value="1:00 pm">1:00 pm</option>
          <option value="2:00 pm">2:00 pm</option>
          <option value="3:00 pm">3:00 pm</option>
          <option value="4:00 pm">4:00 pm</option>
          <option value="5:00 pm">5:00 pm</option>
          <option value="6:00 pm">6:00 pm</option>
          <option value="7:00 pm">7:00 pm</option>
          <option value="8:00 pm">8:00 pm</option>
          <option value="9:00 pm">9:00 pm</option>
          <option value="10:00 pm">10:00 pm</option>
          <option value="11:00 pm">11:00 pm</option>
          <option value="12:00 am">12:00 am</option>
          <option value="01:00 am">1:00 am</option>
          <option value="02:00 am">2:00 am</option>
          <option value="3:00 am">3:00 am</option>
          <option value="4:00 am">4:00 am</option>
          <option value="5:00 am">5:00 am</option>
          <option value="6:00 am">6:00 am</option>
          <option value="7:00 am">7:00 am</option>
          <option value="8:00 am">8:00 am</option>
          <option value="9:00 am">9:00 am</option>
          <option value="10:00 am">10:00 am</option>
          <option value="11:00 am">11:00 am</option>
        </select>
      </div>
      <div className="input__group">
        <div>
          <BsFillTelephoneFill />
        </div>
        <input type="text" placeholder="Mobile Number" />
      </div>
      <div className="input__group">
        <div>
          <FaCar />
        </div>
        <select placeholder="Vehicle Type">
          <option value="">Vehicle Type</option>
        </select>
      </div>

      <button className="book__now__btn">Book Now</button>
    </div>
  );
};

export default InCityInputs;
