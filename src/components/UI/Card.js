import './Card.css';
import React from 'react';

const Card = (props) => {
   const styleClass = 'card ' + props.className;
    return <div className={styleClass}>{props.children}</div>
    
}

export default Card;