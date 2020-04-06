import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  addItem = newItem => {
      this.setState(state => ({
        items: [...state.items,{ id: state.items.length + 1, newItem }]
      }));
  };

  render() {
    return (
        <div>
          <MyInput addItem={this.addItem}/>
          <DropList items={this.state.items}/>
        </div>
    );
  }
}

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const inputText = event.target.value;
    this.setState({value: inputText});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addItem(this.state.value);
  }

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

class DropList extends React.Component {

  render() {
    const listItems = this.props.items.map((item)=>(
        <li key={item.id}>
          {item.newItem}
        </li>
    ));
    return (
        <>
          <ul>{listItems}</ul>
        </>
    )
  }
}
export default App;