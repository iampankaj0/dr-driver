import React from "react";
import styled from "styled-components";

const CustomButton = ({ name, position, onClick }) => {
  const Button = styled.button`
    display: block;
    margin: 25px 0 15px;
    color: var(--container-color);
    background-color: var(--blue-color);
    padding: 7px 25px;
    border: 1px solid var(--blue-color);
    border-radius: 50px;
    transition: 0.3s;
    text-transform: capitalize;

    &:hover {
      color: var(--blue-color);
      background-color: transparent;
    }
  `;

  return (
    <Button
      id="my_custom_button"
      style={{ margin: `${position === "center" && "25px auto 15px"}` }}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

export default CustomButton;
