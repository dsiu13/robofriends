import React from 'react';
import Card from './card';
import { robots } from '../robots';

class CardList extends React.Component {
  render(){
    return(
      <div>
  {
    robots.map((user, i) => {
      return (
        <Card
          key={i}
          id={robots[i].id}
          name={robots[i].name}
          email={robots[i].email}
          />
      );
    })
  }
</div>
    );
  };
}

export default CardList;
