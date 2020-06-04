import React from 'react';
import InputBar from './InputBar';
import List from './List';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  };

  addItem = (value) => {
    this.setState({
      items: [...this.state.items, value]
    })
  };

  show = () => {
    if(this.state.items.length > 0)
      return this.state.items[0].text + '!';
  }

  render() {
    return (
      <div className="ui container">
        <InputBar addItem={this.addItem}></InputBar>
        {this.show()}
        <List content={this.state.items}></List>
      </div>

    )
  }
}

export default App;
