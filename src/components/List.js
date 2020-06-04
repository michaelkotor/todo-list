import React from 'react';
import Item from './Item';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    printItems = () => {
        console.log(this.props.content);
        return this.props.content.map(item =><Item key={item.id} value={item}></Item>)
    };

    onSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="ui divided items">
                <div className="ui huge header">Tasks TODO:</div>
                {this.printItems()}
                <form onSubmit={this.onSubmit}>
                    <button className="ui button red big right floated" type="submit">Resolve</button>
                </form>
            </div>
        )
    }
}

export default List;