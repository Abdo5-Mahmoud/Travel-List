import React from "react";

function Item({ item, onDeletItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
        <button onClick={() => onDeletItem(item.id)}>❌</button>
      </span>
    </li>
  );
}

export default Item;
