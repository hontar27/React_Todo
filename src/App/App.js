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

    deleteItem = id => {
        const items = this.state.items;
        items.filter(item => item.id !== id);
        this.setState({items})
    };

    toggleComplete = id => {
        this.setState(state => ({
            items: state.items.map(item => {
                if (item.id === id) {
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
            {this.state.items.map(item => (
                <DropList
                    key={item.id}
                    toggleComplete={() => this.toggleComplete(item.id)}
                    deleteItem={() => this.deleteItem(item.id)}
                    item={item}
                />
            ))}
        </div>
    );
  }
}
export default App;