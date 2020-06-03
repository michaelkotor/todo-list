import React from 'react';

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = { text: this.props.value };
    }


    render() {
        return (
            <div className="ui item">
                <div className="middle aligned content" style={{ "font-size": "30px"}}>{this.state.text}</div>
                <div className="ui section divider"></div>
            </div>

        )
    };
}

export default Item;