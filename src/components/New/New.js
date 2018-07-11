import React from 'react';

import Fish from '../Fish/Fish';
import Order from '../Order/Order';
import fishRequests from '../../firebaseRequests/fishes';

import './New.css';

class New extends React.Component {
  state = {
    fishes: [],
    order: {},
  }

  addToOrder = (key) => {
    const newOrder = {...this.state.order};
    newOrder[key] = newOrder[key] + 1 || 1;
    this.setState({ order: newOrder });
  }

  removeFromOrder = (key) => {
    const newOrder = {...this.state.order};
    delete newOrder[key];
    this.setState({order: newOrder});
  }

  componentDidMount () {
    fishRequests
      .getRequest()
      .then((fishes) => {
        this.setState({fishes: fishes});
      })
      .catch((err) => {
        console.error('error loading fishes');
      });
  }

  render () {
    const fishComponents = this.state.fishes.map((fish) => {
      return (
        <Fish
          key={fish.id}
          details={fish}
          addToOrder={this.addToOrder}
        />
      );
    });

    return (
      <div className="New text-center">
        <div className="col-xs-8 inventory-container">
          <h1>Inventory</h1>
          <ul>
            { fishComponents }
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
      </div>
    );
  }
}

export default New;
