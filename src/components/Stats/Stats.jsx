import { React, useState } from "react";

function Stats({ allItems }) {
  if (!allItems.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  const numberOfItems = allItems.length;
  const itemsThatPacked = allItems.filter((ele) => ele.packed).length;
  const percentage = Math.round(itemsThatPacked / numberOfItems) * 100;
  // console.log(numberOfItems);
  // console.log(itemsThatPacked);

  return (
    <footer className="stats ">
      <em>
        {percentage === 100 ? (
          <>You got everything! Ready to go ✈</>
        ) : (
          `🎒 You have ${numberOfItems} items on your list
           , and you already packed ${itemsThatPacked} (%)`
        )}
      </em>
    </footer>
  );
}
export default Stats;
