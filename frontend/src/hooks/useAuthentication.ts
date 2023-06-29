import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../state/userSlice";

import jwt_decode, { JwtPayload } from "jwt-decode";

const isTokenValid = (token: string): boolean => {
  try {
    const decoded: JwtPayload = jwt_decode(token);

    const currentTime = Math.floor(Date.now() / 1000);
    if (decoded.exp && decoded.exp < currentTime) {
      console.log("Token has expired");
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error decoding token:", error);
    return false;
  }
};

const useAuthentication = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const username = localStorage.getItem("username");
    const token = localStorage.getItem("token");
    const validToken = isTokenValid(String(token));
    if (validToken) {
      dispatch(
        setUser({
          username: String(username),
          token: String(token),
          isAuthenticated: true,
        })
      );
    }
  }, [dispatch]);

  return null;
};

export default useAuthentication;
