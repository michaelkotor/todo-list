import React from 'react';

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            item: {
                id: props.value.id,
                text: props.value.text,
                isDone: props.value.isDone
            } 
        };
    }

    onChange = (event) => {
        this.setState({
            item: {
                id: this.state.item.id,
                text: this.state.item.text,
                isDone: !this.state.item.isDone
            }
        });
    }

    displayIcon = () => {
        if(this.state.item.isDone) return <i className="check icon green large" style={{ "marginRight": "30px"}}></i>;
    }

    render() {
        return (
            <div className="ui item">
                <div className="middle aligned content" style={{ "fontSize": "30px" }}>{this.state.item.text}</div>
                {this.displayIcon()}
                <div className="ui fitted toggle checkbox">
                    <input onChange={this.onChange} value={this.state.item.isDone} type="checkbox" />
                    <label/>
                </div>

            </div>
        )
    };
}

export default Item;