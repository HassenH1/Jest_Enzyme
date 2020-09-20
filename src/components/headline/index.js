import React, { Component } from "react";
import Proptypes from "prop-types";

export default class Headline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { header, description, tempRay } = this.props;

    if (!header) {
      return null;
    }

    return (
      <div data-test="HeadlineComponent">
        <h1 data-test="header">{header}</h1>
        <p data-test="decr">{description}</p>
      </div>
    );
  }
}

//we must test proptypes with npm install --save-dev check-prop-types
Headline.propTypes = {
  header: Proptypes.string,
  description: Proptypes.string,
  tempRay: Proptypes.arrayOf(
    Proptypes.shape({
      fName: Proptypes.string,
      lName: Proptypes.string,
      email: Proptypes.string,
      age: Proptypes.number,
      onlineStatue: Proptypes.bool,
    })
  ),
};
