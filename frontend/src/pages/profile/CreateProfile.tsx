import React, { useState } from "react";
import UserTypeForm from "../../components/forms/UserTypeForm";
import StudentCreateForm from "../../components/forms/StudentCreateForm";
import AdminCreateForm from "../../components/forms/AdminCreateForm";

const CreateProfile = () => {
  const [askType, setAskType] = useState(true);
  const [formType, setFormType] = useState("");
  const [showForm, setShowForm] = useState(null);

  const handleType = (userType: string) => {
    setFormType(userType);
    console.log(formType);
  };

  const renderForm = () => {
    switch (formType) {
      case "student":
        return <StudentCreateForm onSubmit={handleStudentFormSubmit} />;
      case "teacher":
        return <AdminCreateForm onSubmit={handleAdminFormSubmit} />;
      default:
        return <UserTypeForm handleType={handleType} />;
    }
  };

  const handleStudentFormSubmit = (formData: any) => {
    console.log("Submitted form data:", formData);
    // Handle form submission logic here
  };

  const handleAdminFormSubmit = (formData: any) => {
    console.log("Submitted form data:", formData);
    // Handle form submission logic here
  };

  return (
    <>
      <div>{renderForm()}</div>
    </>
  );
};

export default CreateProfile;
