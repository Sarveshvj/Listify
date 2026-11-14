// The counts are worked out from `items` each render, not stored separately,
// so they can never get out of sync with the list.
function ListSummary({ items }) {
  const checkedCount = items.filter((item) => item.checked).length;

  return (
    <p className="item-summary">
      {checkedCount} of {items.length} items checked
    </p>
  );
}

export default ListSummary;
