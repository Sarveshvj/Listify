import { useState } from "react";
import Header from "./components/Header.jsx";
import AddItemForm from "./components/AddItemForm.jsx";
import ItemList from "./components/ItemList.jsx";
import ListSummary from "./components/ListSummary.jsx";
import StartOverButton from "./components/StartOverButton.jsx";

// Starting data until Step 3 loads the saved list from localStorage.
const initialItems = [
  { id: 1, name: "Apple", checked: false },
  { id: 2, name: "Banana", checked: true },
  { id: 3, name: "Orange", checked: false },
  { id: 4, name: "Cucumber", checked: false },
];

function App() {
  // App is the closest common parent of everything that reads or changes
  // the list, so the list's state lives here ("lifting state up").
  const [items, setItems] = useState(initialItems);

  function addItems(names) {
    const newItems = names.map((name) => ({
      id: crypto.randomUUID(),
      name,
      checked: false,
    }));
    // Never change the old array; build a new one so React sees the change.
    setItems((prev) => [...prev, ...newItems]);
  }

  function toggleItem(id) {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  }

  function deleteItem(id) {
    // filter keeps every item except the one with this id.
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function clearItems() {
    setItems([]);
  }

  return (
    <>
      <Header />
      <main className="app">
        <AddItemForm onAdd={addItems} />
        <ItemList items={items} onToggle={toggleItem} onDelete={deleteItem} />
        <div className="list-footer">
          <ListSummary items={items} />
          <StartOverButton onClear={clearItems} disabled={items.length === 0} />
        </div>
      </main>
    </>
  );
}

export default App;
