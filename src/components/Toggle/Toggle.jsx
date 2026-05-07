import "./Toggle.css";

export const Toggle = ({ isChecked, handleChange }) => (
  <div className="toggle-switch">
    <input
      type="checkbox"
      id="darkmode-toggle"
      className="toggle-switch-checkbox"
      onChange={handleChange}
      checked={isChecked}
    />
    <label htmlFor="darkmode-toggle" className="toggle-switch-label">
      <span className="toggle-switch-inner" />
      <span className="toggle-switch-switch" />
    </label>
  </div>
);

export default Toggle;
