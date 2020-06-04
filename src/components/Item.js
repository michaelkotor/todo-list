import React from 'react';

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            text: this.props.value,
            isDone: false
         };
    }

    onChange = (event) => {
        this.setState({
            text: this.props.value,
            isDone: !this.state.isDone
        });
    }

    displayIcon = () => {
        if(this.state.isDone) return <i className="check icon green large" style={{ "marginRight": "30px"}}></i>;
    }

    render() {
        return (
            <div className="ui item">
                <div className="middle aligned content" style={{ "fontSize": "30px" }}>{this.state.text}</div>
                {this.displayIcon()}
                <div className="ui fitted toggle checkbox">
                    <input onChange={this.onChange} value={this.state.isDone} type="checkbox" />
                    <label/>
                </div>

            </div>
        )
    };
}

export default Item;