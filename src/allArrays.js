import { BsShieldFillCheck } from "react-icons/bs";
import { FaCalendarAlt, FaHandshake } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
// import { SlSettings } from "react-icons/si";
import { RiSurgicalMaskFill } from "react-icons/ri";
import { IoCall, IoLocationSharp, IoSettingsSharp } from "react-icons/io5";

export const facilityArray = [
  {
    id: 1,
    icon: <BsShieldFillCheck />,
    name: "Trained",
  },
  {
    id: 2,
    icon: <FaCalendarAlt />,
    name: "Punctual",
  },
  {
    id: 3,
    icon: <GrUserExpert />,
    name: "Experienced",
  },
  {
    id: 4,
    icon: <RiSurgicalMaskFill />,
    name: "Safe",
  },
  {
    id: 5,
    icon: <IoLocationSharp />,
    name: "Our Presence",
  },
  {
    id: 6,
    icon: <IoCall />,
    name: "24*7",
  },
  {
    id: 7,
    icon: <FaHandshake />,
    name: "Convenient",
  },
  {
    id: 8,
    icon: <IoSettingsSharp />,
    name: "How It Works",
  },
];

export const facilityBrief = [
  {
    id: 1,
    p__tag: "We ensure briefing of driver before onboarding.",
    h2__tag: "Stay safe with",
    span__tag: "Dr. Driver",
    openTag: "trained",
  },
  {
    id: 2,
    p__tag:
      "Our drivers are briefed about the importance of time, Also we track their performance & provide them feedback as & when required.",
    h2__tag: "On Time, ",
    span__tag: "Everytime",
    openTag: "punctual",
  },
  {
    id: 3,
    p__tag:
      "Our drivers are 5+ Years of experience driving Manual & automatic cars in Local, Highway & Hills stations. We assign a driver who is having relevant driving experience as per the Customer Vehicle.",
    h2__tag: "Expert Driving ",
    span__tag: "Experience",
    openTag: "experience",
  },
  {
    id: 4,
    p__tag:
      "Drivers are equipped with masks & sanitizers and Your car will be sanitize before you enter it. We train drivers at each trip & ensure Covid Safety adherence.",
    h2__tag: "Your Safety Matters",
    span__tag: "",
    openTag: "safe",
  },
  {
    id: 5,
    p__tag:
      "We are presently available in Delhi/NCR, Mumbai, Pune, Chandigarh. Our Head office is at Office No G-39, Vardhman Grand Market, Sector 3, Dwarka, New Delhi- 110078",
    h2__tag: "Driver in 90 Minutes at your doorstep",
    span__tag: "",
    openTag: "ourPresence",
  },
  {
    id: 6,
    p__tag:
      "Services available 24*7, Book your drive for any time. Our customer care number is 9999160322 available in between 06:00 AM to 06:00 PM (Monday To Saturday)",
    h2__tag: "Go anywhere at ",
    span__tag: "anytime",
    openTag: "24x7",
  },
  {
    id: 7,
    p__tag:
      "Cancellation, Reschedule, Instant Refunds, Download Invoice, Multiple Payment Mode's, Customer Support",
    h2__tag: "Everything Covered",
    span__tag: "",
    openTag: "convenient",
  },
  {
    id: 8,
    p__tag:
      "Book > Confirmation > Driver Assignment > Driver Accept > Driver On the Way > Driver Reach > Trip Start through OTP > Trip End > Billing > Payment > Rate Your Experience > Download Invoice",
    h2__tag: "Everything Covered",
    span__tag: "",
    openTag: "howItWorks",
  },
];
