import { useState } from "react";

// The text being typed is local state: nothing else needs it until the user
// clicks Add, and then the form hands the name up to App through `onAdd`.
function AddItemForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // stop the browser from reloading the page
    const name = text.trim();
    if (!name) return; // ignore empty or whitespace-only input
    onAdd(name);
    setText("");
  }

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <label htmlFor="item-input">Add groceries</label>
      <textarea
        id="item-input"
        className="item-input"
        rows="3"
        placeholder="e.g. apples"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit" className="item-button">
        Add
      </button>
    </form>
  );
}

export default AddItemForm;
