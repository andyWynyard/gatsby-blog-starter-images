import React from "react";

import "./card.css";

export default props => (
  <div className={`card`}>
    <div className={`card__image-wrapper`}>
      <img src={props.img} alt={props.img} className={`card__img`} />
    </div>
    <div className={`card__content`}>
      <h4 className={`card__content-level`}>{props.level}</h4>
      <h3 className={`card__content-name`}>{props.name}</h3>
      <h5 className={`card__content-core-strengths--title`}>Core Strengths</h5>
      <p>{props.strengths.map(item => item + ", ")}</p>
    </div>
  </div>
);
