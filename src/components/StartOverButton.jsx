// Clears the whole list. Disabled when there is nothing to clear.
function StartOverButton({ onClear, disabled }) {
  return (
    <button
      type="button"
      className="start-over-button"
      onClick={onClear}
      disabled={disabled}
    >
      Start over
    </button>
  );
}

export default StartOverButton;
