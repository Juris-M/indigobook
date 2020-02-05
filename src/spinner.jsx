import React from "react";
import { css } from "@emotion/core";
import ScaleLoader from "react-spinners/ScaleLoader";

import './spinner.css';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
`;

class Spinner extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
    }

    render() {
      return (
        <div className="loading">
          <ScaleLoader
            size={150}
            css={override}
            //size={"150px"} this also works
            color={"gray"}
            loading={this.state.loading}
          />
        </div>
      );
    }
}

export default Spinner;