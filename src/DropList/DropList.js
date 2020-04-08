import React from 'react';
import './DropList.css';

class DropList extends React.Component {

    render() {
        const listItems = this.props.items.map((item,index)=>(
            <li key={item.id}>
                {item.newItem}
                <button onClick={this.props.deleteItem.bind(this, index)}>Deleted
                </button>
            </li>
        ));
        return (
            <>
                <ul>{listItems}</ul>
            </>
        )
    }
}
export default DropList