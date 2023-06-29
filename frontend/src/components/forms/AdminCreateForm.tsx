import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
interface AdminCreateFormProps {
  onBack: () => void;
}

const AdminCreateForm: React.FC<AdminCreateFormProps> = ({ onBack }) => {
  const navigator = useNavigate();

  const [name, setName] = useState("");
  const [experience, setExperience] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [subject, setSubject] = useState("");

  const [activeForm, setActiveForm] = useState(1);
  const user = useSelector((state: RootState) => state.registerID.id);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/admin", {
        user,
        name,
        email,
        experience,
        contactNumber,
        country,
        city,
        subject,
      })
      .then((res) => {
        console.log(res.data);
        navigator("/login");
      })
      .catch((err) => console.log("error", err));
  };

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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={() => {}}
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
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
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
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
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
                onChange={() => {}}
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
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
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
                value={country}
                onChange={(e) => setCountry(e.target.value)}
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
                value={city}
                onChange={(e) => setCity(e.target.value)}
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
