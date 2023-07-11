import React from 'react'//?
import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;//클래스 네임을 만들어주는 구간 card의 여백이 있어야 한다.

  return <div className={classes}>{props.children}</div>;
};

export default Card;