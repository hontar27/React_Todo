import React from 'react';

export default props => (
    <div style={{ display: "flex", justifyContent: "start"}}>
        <div style={{
            textDecoration: props.item.complete ? "line-through" : ""
        }}
            onClick={props.toggleComplete}
        >
            <li>{props.item.newItem}
                <button onClick={props.deleteItem}>delete</button>
            </li>
        </div>
    </div>
);