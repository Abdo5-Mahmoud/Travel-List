import { React, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Logo from "./components/Logo/Logo";
import Form from "./components/Form/Form";
import PackingList from "./components/Packing/PackingList";
import Stats from "./components/Stats/Stats";

function App() {
  const [allItems, setAllItems] = useState([]);

  function handelAllItems(item) {
    setAllItems([...allItems, item]);
  }

  function handelDeletItem(id) {
    setAllItems(allItems.filter((item) => item.id !== id));
  }

  function handelToggleItem(id) {
    setAllItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handeleClear() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items ?"
    );
    if (confirmed) setAllItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form handelAllItems={handelAllItems} />
      <PackingList
        onToggleItem={handelToggleItem}
        allItems={allItems}
        onDeletItem={handelDeletItem}
        handeleClear={handeleClear}
      />
      <Stats allItems={allItems} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
