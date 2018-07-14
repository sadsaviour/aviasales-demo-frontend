import React from "react";
import styled from "styled-components";

import checkmark from "./checkmark.svg";

const StyledCheckbox = styled.label`
  /* CustomStyledCheckboxize the label (the styledCheckbox) */

  display: block;
  position: relative;
  padding-left: 24px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* Hide the browser's default checkbox */

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  /* Create a custom checkbox */

  .checkmark {
    position: absolute;
    top: 9px;
    left: 0;
    height: 18px;
    width: 18px;
    background: #ffffff;
    border: 1px solid #a0b0b9;
    box-sizing: border-box;
    border-radius: 4px;
  }

  /* On mouse-over, add a grey background color */

  :hover input ~ .checkmark {
    background-color: #e1f8ff;
  }

  /* When the checkbox is checked, add a blue background */

  input:checked ~ .checkmark {
    background: #e1f8ff;
    border: 1px solid #00ace2;
  }

  /* Create the checkmark/indicator (hidden when not checked) */

  .checkmark:after {
    content: url(${checkmark});
    position: absolute;
    display: none;
  }

  /* Show the checkmark when checked */

  input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */

  .checkmark:after {
    box-sizing: border-box;
    left: 4px;
    top: -11px;
  }
`;

const Checkbox = function Checkbox({
  className,
  children,
  defaultChecked,
  checked,
  onChange
}) {
  return (
    <StyledCheckbox className={className}>
      {children}
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChange}
      />
      <span className="checkmark" />
    </StyledCheckbox>
  );
};

export default Checkbox;
