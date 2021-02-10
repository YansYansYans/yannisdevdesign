import React from "react";
import Buttons from '@material-ui/core/Button';

export default function Button({ text, className, href, newTab }) {
  return (
    <div className={className}>
      <a class="main-button" href={href} target={newTab && "_blank"}>
      <buttons>
        {text}
        </buttons>
      </a>
    </div>
  );
}
