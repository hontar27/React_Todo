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
      this.state.items.splice(index, 1);
      this.setState({items: this.state.items});
  };

    toggleComplete = index => {
        console.log('test');
        this.setState(state => ({
            items: state.items.map(item => {
                if (item.index === index) {
                    return {
                        ...item,
                        complete: !item.complete
                    };
                } else {
                    return item;
                }
            })
        }));
    };

  render() {
    return (
        <div>
          <MyInput addItem={this.addItem}/>
          <DropList items={this.state.items}
                    deleteItem={this.deleteItem}
                    toggleComplete={this.toggleComplete}/>

        </div>
    );
  }
}
export default App;