import ListItem from "./ListItem.jsx";

function ItemList({ items, onToggle, onDelete }) {
  return (
    <ul className="item-list">
      {items.map((item) => (
        // `key` must be stable and unique, so use the id, not the array index.
        <ListItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default ItemList;
