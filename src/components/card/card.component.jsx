import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='monster'
      // src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      src={`https://i.pravatar.cc/180?u=a042581f4e29026704d/${props.monster.id}`}
    />
    <h2> {props.monster.name} </h2>
    <p> {props.monster.email} </p>
    <p>{props.monster.username} </p>
  </div>
);
