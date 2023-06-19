import { BsFillEnvelopeFill, BsLockFill } from "react-icons/bs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setUser } from "../../store/userSlice";
import { User } from "../../store/types";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const url = "http://localhost:5000/user/login";
  const navigator = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(url, { email, password });
      const { token, role, profileID } = response.data;

      dispatch(
        setUser({
          isAuthenticated: true,
          token,
          email,
          role,
          profileId: profileID,
        })
      );

      setIsLoading(false);
      navigator("/");
    } catch (error) {
      console.log(error);
      console.log("Error occurred during login");
      setIsLoading(false);
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
            <div className="flex items-center absolute inset-y-0 left-0 pl-3 pt-5">
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
            <div className="flex items-center absolute inset-y-0 left-0 pl-3 pt-5">
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
