import React from 'react';

export default props => (
    <div
        style={{
            textDecoration: props.item.complete ? "line-through" : ""
        }}
        onClick={props.toggleComplete}
    >
        <li>{props.item.newItem}</li>
        <button onClick={props.deleteItem}>delete</button>
    </div>
);