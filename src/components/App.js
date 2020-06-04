import React from 'react';
import InputBar from './InputBar';
import List from './List';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: ['123']
    };
  };

  getItems = (value) => {
    this.state.items.push(value);
    this.setState({
      items: this.state.items
    });
  };

  render() {
    return (
      <div className="ui container">
        <InputBar getItems={this.getItems}></InputBar>
        <List content={this.state.items}></List>
      </div>

    )
  }
}

export default App;
