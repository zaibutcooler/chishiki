import React, { useState, ChangeEvent, FormEvent } from "react";

interface StudentCreateFormProps {
  onSubmit: (formData: StudentFormData) => void;
  onBack: () => void;
}

interface StudentFormData {
  name: string;
  email: string;
  profilePhoto: File | null;
  birthDate: string;
  level: string;
  pastDocuments: File | null;
  country: string;
  city: string;
  phoneNumber: string;
}

const StudentCreateForm: React.FC<StudentCreateFormProps> = ({
  onSubmit,
  onBack,
}) => {
  const [formData, setFormData] = useState<StudentFormData>({
    name: "",
    email: "",
    profilePhoto: null,
    birthDate: "",
    level: "",
    pastDocuments: null,
    country: "",
    city: "",
    phoneNumber: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
    setFormData({
      name: "",
      email: "",
      profilePhoto: null,
      birthDate: "",
      level: "",
      pastDocuments: null,
      country: "",
      city: "",
      phoneNumber: "",
    });
  };

  const [activeForm, setActiveForm] = useState(1);
  const formDisplay = () => {
    switch (activeForm) {
      case 1:
        return (
          <>
            {" "}
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
                htmlFor="profilePhoto"
                className="block text-gray-700 font-medium mb-1">
                Profile Photo:
              </label>
              <input
                type="file"
                id="profilePhoto"
                name="profilePhoto"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div>
              <label
                htmlFor="birthDate"
                className="block text-gray-700 font-medium mb-1">
                Birth of Date:
              </label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label
                htmlFor="level"
                className="block text-gray-700 font-medium mb-1">
                Level:
              </label>
              <select
                id="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-sky-500">
                <option value="">Select Level</option>
                <option value="middleschool">Middle School</option>
                <option value="highschool">High School</option>
                <option value="uni">University</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="pastDocuments"
                className="block text-gray-700 font-medium mb-1">
                Past Documents:
              </label>
              <input
                type="file"
                id="pastDocuments"
                name="pastDocuments"
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
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 font-medium mb-1">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
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

  return (
    <div className="flex justify-center items-center mt-12">
      <form
        className="bg-white shadow-md rounded-lg p-6 border border-sky-200 w-full sm:max-w-md"
        onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Please fill in your information
        </h2>
        <div className="space-y-4 mb-4">{formDisplay()}</div>
        {buttonDisplay()}
      </form>
    </div>
  );
};

export default StudentCreateForm;
