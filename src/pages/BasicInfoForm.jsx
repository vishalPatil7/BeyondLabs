import { memo } from "react";

function BasicInfoForm({ formState, onChange, isValid }) {
  return (
    <div>
      <h2>Basic Information</h2>
      <div>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formState.fullName}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={onChange}
          required
        />
      </div>
      <button type="submit" disabled={!isValid}>
        Next
      </button>
    </div>
  );
}

export default memo(BasicInfoForm);
