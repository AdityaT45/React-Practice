import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserListWrapper from "./UserListWrapper";
import ProductDetails from "./ProductDetails";

const App = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data.users));
  }, []);

  return (
    <>
    <ProductDetails></ProductDetails>
    {/* <UserListWrapper  users={user}/> */}
      
    </>
  );
};

export default App;
