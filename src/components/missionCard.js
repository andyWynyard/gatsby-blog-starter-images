import React, { Component } from "react";

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
          <ExpansionPanelSummary
            onClick={() =>
              this.setState(state => ({ showDetail: !state.showDetail }))
            }
            expandIcon={<ExpandMoreIcon />}
          >
            <div className={`mission-card`}>
              <ul className="mission-card__list  mission-card__tablet-list">
                <li className={`mission-card__list--item`}>
                  {this.props.data.logo ? (
                    <img
                      style={{ height: "12px", marginRight: "10px" }}
                      src={this.props.data.logo.childImageSharp.original.src}
                      alt="company logo"
                    />
                  ) : null}
                  {this.props.data.name}
                </li>
              </ul>

              <ul className={`mission-card__list mission-card__desktop-list`}>
                <li className={`mission-card__list--item`}>
                  {this.props.data.logo ? (
                    <img
                      style={{ height: "12px", marginRight: "10px" }}
                      src={this.props.data.logo.childImageSharp.original.src}
                      alt="company logo"
                    />
                  ) : null}
                  {this.props.data.name}
                </li>

                <li className={`mission-card__list--item`}>
                  {this.props.data.date}
                </li>

                {!this.props.education ? (
                  <li className={`mission-card__list--item`}>
                    {this.props.data.role}
                  </li>
                ) : null}
              </ul>
            </div>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <div className="mission-card__expansion">
              <ul className={`mission-card__list mission-card__tablet-list`}>
                <li className="mission-card__list--item" />
                <li className={`mission-card__list--item`}>
                  {this.props.data.date}
                </li>

                <li className={`mission-card__list--item`}>
                  {this.props.data.role}
                </li>
              </ul>
              <div className="mission-card__about">
                <h5 className="mission-card__about--title">About:</h5>
                <p className="mission-card__about--content">
                  {this.props.data.about}
                </p>
              </div>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default MissionCard;
