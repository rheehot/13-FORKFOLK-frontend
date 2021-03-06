import React, { Component } from "react";
import "./ExpandedView.scss";

class ExpandedView extends Component {
  render() {
    const {
      field,
      title,
      artsnCulture,
      description,
      imgSrc,
    } = this.props.contents;
    return (
      <div className="ExpandedView">
        <div>
          <h3>{field}</h3>
          <span>{title}</span>
          <p className={!artsnCulture ? "artsnCulture" : ""}>{description}</p>
        </div>
        <div className="wrapper">
          <img alt="representative" src={imgSrc} />
        </div>
      </div>
    );
  }
}

export default ExpandedView;
