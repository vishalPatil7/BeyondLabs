import { memo } from "react";

function AdditionalInfoForm({ formState, onChange, onBack, isValid }) {
  return (
    <div>
      <h2>Additional Details</h2>
      <div>
        <label>Role</label>
        <select name="role" value={formState.role} onChange={onChange}>
          <option value="">Select Role</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
      </div>

      <div>
        <input
          type="checkbox"
          name="acceptedTerms"
          checked={formState.acceptedTerms}
          onChange={onChange}
        />
        <label>Accept Terms & Conditions</label>
      </div>

      <div>
        <button type="button" onClick={onBack}>
          Back
        </button>
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default memo(AdditionalInfoForm);
