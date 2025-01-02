/* eslint-disable react/prop-types */

import Card from "./Card";

const CardWrapper = ({ users }) => {
  return (
    <div className="wrapper d-flex flex-wrap gap-3">
      {users.map((user) => (
        <Card
          key={user.id}
          firstName={user.firstName}
          lastName={user.lastName}
          age={user.age}
          gender={user.gender}
          email={user.email}
          phone={user.phone}
          image={user.image}
        />
      ))}
    </div>
  );
};

export default CardWrapper;
