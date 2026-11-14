// One row of the checklist. It doesn't own the item; it tells App which item
// was toggled, and App updates the list.
function ListItem({ item, onToggle }) {
  const inputId = `item-${item.id}`;

  return (
    <li className="item-entry">
      <input
        type="checkbox"
        id={inputId}
        className="item-checkbox"
        checked={item.checked}
        onChange={() => onToggle(item.id)}
      />
      <label htmlFor={inputId} className="item-name">
        {item.name}
      </label>
    </li>
  );
}

export default ListItem;
