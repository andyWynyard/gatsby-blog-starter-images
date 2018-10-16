import React, { Component } from "react";
import { CSSTransition } from "react-transition-group"; // ES6

import { css } from "react-emotion";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./missionCard.css";

class MissionCard extends Component {
  state = {
    showDetail: false
  };

  render() {
    return (
      <div className="mission-card__wrapper">
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div
              onClick={() =>
                this.setState(state => ({ showDetail: !state.showDetail }))
              }
              className={`mission-card`}
            >
              <p className="mission-card__show-button">
                {this.state.showDetail ? "Show less" : "Read more"}
              </p>

              <ul className={`mission-card__list`}>
                <li className={`mission-card__list--item`}>
                  <h5 className="mission-card__title">
                    {this.props.data.name}
                  </h5>
                </li>
                <span className={`mission-card__dots`}>
                  &nbsp;&nbsp;&#183;&nbsp;&nbsp;
                </span>
                <li className={`mission-card__list--item`}>
                  {this.props.data.date}
                </li>
                <span className={`mission-card__dots`}>
                  &nbsp;&nbsp;&#183;&nbsp;&nbsp;
                </span>
                <li className={`mission-card__list--item`}>
                  {this.props.data.role}
                </li>
              </ul>
            </div>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <span className="mission-card__about">
              <h5 className="mission-card__about--title">About the position</h5>
              <p className="mission-card__about--content">
                {this.props.data.about}
              </p>
            </span>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default MissionCard;
