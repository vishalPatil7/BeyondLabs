import { useMemo, useState } from "react";
import BasicInfoForm from "./pages/BasicInfoForm";
import AdditionalInfoForm from "./pages/AdditionalInfoForm";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    role: "",
    acceptedTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const isBasicInfoValid = useMemo(() => {
    return formState.fullName.trim() !== "" && formState.email.trim() !== "";
  }, [formState.fullName, formState.email]);

  const isAdditionalInfoValid = useMemo(() => {
    return formState.role !== "" && formState.acceptedTerms === true;
  }, [formState.role, formState.acceptedTerms]);

  const goToNext = () => setCurrentStep(2);
  const gotToPrevious = () => setCurrentStep(1);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentStep === 1 && isBasicInfoValid) {
      goToNext();
    } else if (currentStep === 2 && isAdditionalInfoValid) {
      setCurrentStep(3);
    }
  };

  return (
    <div style={{ width: "400px", margin: "50px auto" }}>
      <form onSubmit={handleFormSubmit}>
        {currentStep === 1 && (
          <BasicInfoForm
            formState={formState}
            onChange={handleInputChange}
            isValid={isBasicInfoValid}
          />
        )}

        {currentStep === 2 && (
          <AdditionalInfoForm
            formState={formState}
            onChange={handleInputChange}
            onBack={gotToPrevious}
            isValid={isAdditionalInfoValid}
          />
        )}

        {currentStep === 3 && (
          <div>
            <h2>Submission Summary</h2>
            <p>Full Name: {formState.fullName}</p>
            <p>Email: {formState.email}</p>
            <p>Role: {formState.role}</p>
            <p>Terms Accepted? {formState.acceptedTerms ? "Yes" : "No"}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
