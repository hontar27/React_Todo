import React from 'react';
// import './DropList.css';

class DropList extends React.Component {

    render() {
        const listItems = this.props.items.map((item,index)=>(
            <div onClick={() => this.props.toggleComplete(index)}>
                <li  style={{
                    textDecoration: this.props.items.complete ? "line-through" : ""
                }}
                     key={item.id}>
                    {item.newItem}
                    <button onClick={() =>this.props.deleteItem(index)}>Deleted
                    </button>
                </li>
            </div>
        ));
        return (
            <>
                <ul>{listItems}</ul>
            </>
        )
    }
}
export default DropList