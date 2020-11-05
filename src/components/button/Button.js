import React from "react";
import Button2 from "./Button.css";
import Buttons from '@material-ui/core/Button';

export default function Button({ text, className, href, newTab }) {
  return (
    <div className={className}>
      <a class="main-button" href={href} target={newTab && "_blank"}>
      <Buttons variant="contained" color="primary" style={{ backgroundColor: '#e9343f' }}>
        {text}
        </Buttons>
      </a>
    </div>
  );
}
