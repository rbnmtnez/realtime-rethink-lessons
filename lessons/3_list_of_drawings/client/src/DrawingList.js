import React, { Component } from 'react';
import { subscribeToDrawings } from './api';

class DrawingList extends Component {
  constructor (props) {
    super(props);
    subscribeToDrawings(drawing => {
      debugger;
      this.setState(prevState => ({
        drawings: prevState.drawings.concat([drawing]),
      }));
    });
  }
  state = {
    drawings: [],
  };

  render () {
    console.log(JSON.stringify(this.state.drawings));
    const drawings = this.state.drawings.map(drawing => (
      <li className='DrawingList-item' key={drawing.id}>
        {drawing.name}
      </li>
    ));

    return <ul className='DrawingList'>{drawings}</ul>;
  }
}

export default DrawingList;
