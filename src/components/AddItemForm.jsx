import { useState } from "react";
import { parseList } from "../utils/parseList.js";

// The text being typed is local state: nothing else needs it until the user
// clicks Add. Then the parser splits it into names and the form hands them
// up to App through `onAdd`.
function AddItemForm({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); // stop the browser from reloading the page
    const names = parseList(text);
    if (names.length === 0) return; // nothing but blanks, bullets or commas
    onAdd(names);
    setText("");
  }

  return (
    <form className="item-form" onSubmit={handleSubmit}>
      <label htmlFor="item-input">Add groceries</label>
      <textarea
        id="item-input"
        className="item-input"
        rows="3"
        placeholder="e.g. apples, bananas, milk — or paste a whole list"
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
