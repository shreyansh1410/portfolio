import "./ToggleButton.scss";

function ToggleButton({ setOpen, open }) {
  return (
    <button className="toggleButton" onClick={() => setOpen(!open)}>
      Button
    </button>
  );
}

export default ToggleButton;
