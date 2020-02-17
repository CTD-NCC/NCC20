import React from "react";
import "../styles/header.css";

import { Component } from "react";

class header extends Component {
  render() {
    return (
      <div className="header">
        <svg
          id="Layer_2"
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 690.54 317"
          className="logo"
        >
          <title>ctd</title>
          <path
            d="M863.5,651h-252s-48-.5-48-50.5V403s-2.5-50,49-50h165"
            transform="translate(-554.48 -344)"
            fill="none"
            stroke="#0074af"
            stroke-miterlimit="10"
            stroke-width="18"
            class="c"
          />
          <path
            d="M936,651h252s48-.5,48-50.5V403s2.5-50-49-50H1022"
            transform="translate(-554.48 -344)"
            fill="none"
            stroke="#0074af"
            stroke-miterlimit="10"
            stroke-width="18"
            class="c"
          />
          <line
            x1="345.52"
            y1="17"
            x2="345.52"
            y2="317"
            fill="none"
            stroke="#0074af"
            stroke-miterlimit="10"
            stroke-width="18"
            class="ce"
            id="hide"
          />
          <line
            x1="345.52"
            y1="9"
            x2="244.52"
            y2="9"
            fill="none"
            stroke="#0074af"
            stroke-miterlimit="10"
            stroke-width="18"
            class="hide"
            id="t1"
          />
          <line
            x1="444.02"
            y1="9"
            x2="343.02"
            y2="9"
            fill="none"
            stroke="#0074af"
            stroke-miterlimit="10"
            stroke-width="18"
            class="hide"
            id="t2"
          />
        </svg>
        <img src="/logopisb.png" className="pisb"></img>
      </div>
    );
  }
}

export default header;
