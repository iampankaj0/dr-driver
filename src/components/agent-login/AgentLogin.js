import React from "react";
import Header from "../header/Header";
import MetaTitle from "../reusable/MetaTitle";
import { Container, Section } from "../reusable/reuseStyle";
import "./AgentLogin.scss";
import LoginContainer from "./LoginContainer";

const AgentLogin = () => {
  return (
    <Section>
      <MetaTitle title="Agent Login - Dr. Driver" />

      <Container>
        <Header />

        <div className="main__single__container center__container">
         <LoginContainer />
        </div>
      </Container>
    </Section>
  );
};

export default AgentLogin;
