import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const postRequest = async (url: string, data: any) => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector((state: RootState) => state.user.token);
  axios
    .post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => setResult(res.data))
    .then(() => setIsLoading(false))
    .catch((err) => {
      console.log("error!!");
      console.log(err);
    });

  return { result, isLoading };
};

export default postRequest;
