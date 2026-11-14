import ListItem from "./ListItem.jsx";

function ItemList({ items, onToggle }) {
  return (
    <ul className="item-list">
      {items.map((item) => (
        // `key` must be stable and unique, so use the id, not the array index.
        <ListItem key={item.id} item={item} onToggle={onToggle} />
      ))}
    </ul>
  );
}

export default ItemList;
