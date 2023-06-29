import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

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
    const email = localStorage.getItem("emailSchool");
    const token = localStorage.getItem("tokenSchool");
    const roleString = localStorage.getItem("roleSchool");
    const profileId = localStorage.getItem("profileIdSchool");

    const role = roleString ? JSON.parse(roleString) : null; // Parse role back to boolean

    const validToken = isTokenValid(String(token));
    if (validToken) {
      dispatch(
        setUser({
          email: String(email),
          token: String(token),
          isAuthenticated: true,
          role,
          profileId: profileId || "",
        })
      );
    }
  }, [dispatch]);

  return null;
};

export default useAuthentication;
