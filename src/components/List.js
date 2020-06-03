import React from 'react';
import Item from './Item';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    printItems = () => {
        console.log('I am printing!');
        console.log(this.props.content);
        return this.props.content.map(item =><Item value={item}></Item>)
    };

    render() {
        return (
            <div className="ui divided items">
                <div className="ui huge header">Huge Header</div>
                {this.printItems()}
            </div>
        )
    }
}

export default List;