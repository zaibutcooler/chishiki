import React, { useState, ChangeEvent, FormEvent } from "react";

interface AdminCreateFormProps {
  onSubmit: (formData: AdminFormData) => void;
  onBack: () => void;
}

interface AdminFormData {
  name: string;
  qualification: File | null;
  experience: number;
  email: string;
  contactNumber: string;
  profileImg: File | null;
  country: string;
  city: string;
  subject: string;
}

const AdminCreateForm: React.FC<AdminCreateFormProps> = ({
  onSubmit,
  onBack,
}) => {
  const [formData, setFormData] = useState<AdminFormData>({
    name: "",
    qualification: null,
    experience: 0,
    email: "",
    contactNumber: "",
    profileImg: null,
    country: "",
    city: "",
    subject: "",
  });

  const [activeForm, setActiveForm] = useState(1);
  const formDisplay = () => {
    switch (activeForm) {
      case 1:
        return (
          <>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label
                htmlFor="profileImg"
                className="block text-gray-700 font-medium mb-1">
                Profile Image:
              </label>
              <input
                type="file"
                id="profileImg"
                name="profileImg"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            {" "}
            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-1">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label
                htmlFor="experience"
                className="block text-gray-700 font-medium mb-1">
                Experience (in years):
              </label>
              <input
                type="number"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label
                htmlFor="qualification"
                className="block text-gray-700 font-medium mb-1">
                Qualification (Document):
              </label>
              <input
                type="file"
                id="qualification"
                name="qualification"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div>
              <label
                htmlFor="contactNumber"
                className="block text-gray-700 font-medium mb-1">
                Contact Number:
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-gray-700 font-medium mb-1">
                Country:
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-gray-700 font-medium mb-1">
                City:
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
              />
            </div>
          </>
        );
    }
  };

  const buttonDisplay = () => {
    switch (activeForm) {
      case 1:
        return (
          <>
            <div className="flex justify-between">
              <button
                onClick={onBack}
                className="text-sky-500 hover:text-sky-600 focus:outline-none">
                Back
              </button>
              <button
                onClick={() => {
                  setActiveForm(2);
                }}
                className="text-sky-500 hover:text-sky-600 focus:outline-none">
                Next
              </button>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="flex justify-between">
              <button
                onClick={() => {
                  setActiveForm(1);
                }}
                className="text-sky-500 hover:text-sky-600 focus:outline-none">
                Back
              </button>
              <button
                onClick={() => {
                  setActiveForm(3);
                }}
                className="text-sky-500 hover:text-sky-600 focus:outline-none">
                Next
              </button>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="flex justify-between">
              <button
                onClick={() => {
                  setActiveForm(2);
                }}
                className="text-sky-500 hover:text-sky-600 focus:outline-none">
                Back
              </button>
              <button
                type="submit"
                className="text-sky-500 hover:text-sky-600 focus:outline-none">
                Done
              </button>
            </div>
          </>
        );
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    if (files && files.length > 0) {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: files[0] }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="flex justify-center items-center mt-12">
      <form
        className="bg-white shadow-md rounded-lg p-8 border border-sky-200 w-full sm:max-w-md"
        onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">
          Fill out your informations
        </h2>
        <div className="space-y-4 mb-4">{formDisplay()}</div>
        {buttonDisplay()}
      </form>
    </div>
  );
};

export default AdminCreateForm;
