import { useSelector } from "react-redux";
import { RootState } from "../store";

const HomePage = () => {
  const user = useSelector((state: RootState) => state.user);
  console.log(user);

  return (
    <div>
      <div>
        {user ? (
          <div>
            <h1>Email: {user.email}</h1>
            <h1>Token: {user.token}</h1>
          </div>
        ) : (
          <h1>No user yet bitch</h1>
        )}
      </div>
    </div>
  );
};

export default HomePage;
