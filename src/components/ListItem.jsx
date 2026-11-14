// One row of the checklist. It doesn't own the item; it tells App which item
// was toggled or removed, and App updates the list.
function ListItem({ item, onToggle, onDelete }) {
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
      <button
        type="button"
        className="item-delete"
        onClick={() => onDelete(item.id)}
        // Screen readers would just say "times" for ×, so give it a real name.
        aria-label={`Remove ${item.name}`}
      >
        ×
      </button>
    </li>
  );
}

export default ListItem;
