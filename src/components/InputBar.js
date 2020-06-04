import React from 'react';

class InputBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {
                id: 0,
                text: '',
                isDone: false
            }
        };
    }

    onChange = event => {
        this.setState({
            item: {
                id: 'id' + (new Date()).getTime(),
                text: event.target.value,
                isDone: false
            }
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.state.item.text.length > 0) {
            this.sendValue();
            this.setState({
                item: {
                    id: 'id' + (new Date()).getTime(),
                    text: '',
                    isDone: false
                }
            });
        }
    }

    sendValue = () => {
        this.props.addItem(this.state.item);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label className="ui label massive ">New task</label>
                    <div className="ui input massive focus">
                        <input type="text" value={this.state.item.text} onChange={this.onChange}></input>
                    </div>
                    <button className="ui green button massive" type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default InputBar;