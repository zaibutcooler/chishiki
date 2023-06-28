import React, { useState } from "react";
import UserTypeForm from "../../components/forms/UserTypeForm";
import StudentCreateForm from "../../components/forms/StudentCreateForm";
import AdminCreateForm from "../../components/forms/AdminCreateForm";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const CreateProfile = () => {
  const [formType, setFormType] = useState("");

  const handleType = (userType: string) => {
    setFormType(userType);
    console.log(formType);
  };

  const user = useSelector((state: RootState) => state.registerID.id);
  console.log(user);

  const handleAdminFormSubmit = (formData: any) => {
    console.log("Submitted form data:", formData);
    // Handle form submission logic here
  };

  const handleBack = () => {
    setFormType("");
  };

  const renderForm = () => {
    switch (formType) {
      case "student":
        return <StudentCreateForm onBack={handleBack} />;
      case "teacher":
        return (
          <AdminCreateForm
            onSubmit={handleAdminFormSubmit}
            onBack={handleBack}
          />
        );
      default:
        return <UserTypeForm handleType={handleType} />;
    }
  };

  return <div>{renderForm()}</div>;
};

export default CreateProfile;
