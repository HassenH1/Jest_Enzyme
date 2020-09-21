import React, { Component } from "react";
import PropTypes from "prop-types";

class ListItem extends Component {
  render() {
    const { title, description } = this.props;

    if (!title) {
      return null;
    }

    return (
      <div data-test="listItemComponent">
        <h1 data-test="componentTitle">{title}</h1>
        <div data-test="componentDesc">{description}</div>
      </div>
    );
  }
}

ListItem.prototypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ListItem;
