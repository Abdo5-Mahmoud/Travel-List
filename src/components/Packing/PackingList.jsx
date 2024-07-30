import { React, useState } from "react";
import Item from "../Item/Item";

export default function PackingList({
  onToggleItem,
  allItems,
  onDeletItem,
  handeleClear,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedITems;
  if (sortBy === "input") sortedITems = allItems;
  if (sortBy === "description")
    sortedITems = allItems.sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  if (sortBy === "packed")
    sortedITems = allItems.sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedITems.map((item) => (
          <Item
            onToggleItem={onToggleItem}
            item={item}
            key={item.id}
            onDeletItem={onDeletItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={"input"}> Sort by input order</option>
          <option value={"description"}> Sort by description</option>
          <option value={"packed"}> Sort by packed Stats</option>
        </select>
        <button onClick={handeleClear}>Clear list</button>
      </div>
    </div>
  );
}
