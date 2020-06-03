import React from 'react';

class InputBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    onChange = event => {
        this.setState({ value: event.target.value });
        console.log(event.target.value);
    }

    onSubmit = event => {
        event.preventDefault();
        if(this.state.value.length > 0) {
            this.sendValue();
            this.state.value = '';
        }
    }

    sendValue = () => {
        this.props.parentCallback(this.state.value);
    }

    render() {
        return (
            <div>
                <form  onSubmit={this.onSubmit}>
                    <label className="ui label massive ">New task</label>
                    <div className="ui input massive focus">
                        <input type="text" value={this.state.value} onChange={this.onChange}></input>
                    </div>
                    <button className="ui red button massive" type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default InputBar;