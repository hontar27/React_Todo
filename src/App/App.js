import React from 'react';
import MyInput from "../MyInput/MyInput";
import DropList from "../DropList/DropList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  addItem = newItem => {
       this.setState(state => ({
        items: [...state.items,newItem]
      }));
  };

  deleteItem = index => {
      const items = this.state.items.concat()
      items.splice(index, 1)
      this.setState({items})
  };

  render() {
    return (
        <div>
          <MyInput addItem={this.addItem}/>
          <DropList items={this.state.items}
                    deleteItem={this.deleteItem} />
        </div>
    );
  }
}
export default App;