import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserListWrapper from "./UserListWrapper";

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data.users));
  }, []);

  return (
    <>
    <UserListWrapper  users={user}/>
      
    </>
  );
};

export default App;
