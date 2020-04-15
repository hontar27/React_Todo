import React from 'react';
import shortid from 'shortid';

class MyInput extends React.Component {

    state = {value: ''};

    handleChange = (event) => {
        const inputText = event.target.value;
        this.setState({value: inputText});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addItem({
            id: shortid.generate(),
            newItem: this.state.value,
            complete: false
        });
        this.setState({
            value: ""
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.value}
                           onChange={this.handleChange}/>
                </label>
            </form>
        );
    }
}
export default MyInput