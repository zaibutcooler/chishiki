import { BsFillEnvelopeFill, BsLockFill } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = "http://localhost:5000/user/login";
  const navigator = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      axios
        .post(url, { email, password })
        .then((res) => console.log(res.data.token));
      navigator("/");
    } catch (error) {
      console.log(error);
      console.log("Fking error");
    }
  };

  return (
    <div className="flex items-center justify-center mt-28">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl text-center text-sky-700 font-bold mb-8">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 relative">
            <label
              htmlFor="email"
              className="block text-sky-700 text-sm font-semibold mb-1">
              Email
            </label>
            <div className="flex items-center absolute inset-y-0 left-0 pl-3">
              <BsFillEnvelopeFill className="h-5 w-5 text-sky-500" />
            </div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-sky-300 rounded focus:outline-none focus:border-sky-500 text-sky-700"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sky-700 text-sm font-semibold mb-1">
              Password
            </label>
            <div className="flex items-center absolute inset-y-0 left-0 pl-3">
              <BsLockFill className="h-5 w-5 text-sky-500" />
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-sky-300 rounded focus:outline-none focus:border-sky-500 text-sky-700"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 transition duration-200">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
