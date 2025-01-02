/* eslint-disable react/prop-types */
const Card = ({ firstName, lastName, age, gender, email, phone, image }) => {
  return (
    <div className="card" style={{ width: "24rem" }}>
      <img
        src={image}
        
      />
      <div className="card-body">
        <h5 className="card-title">
          {firstName} {lastName}
        </h5>
        <p className="card-text">Age: {age}</p>
        <p className="card-text">Gender: {gender}</p>
        <p className="card-text">Email: {email}</p>
        <p className="card-text">Phone: {phone}</p>
        <button className="btn btn-primary">Contact Now</button>
      </div>
    </div>
  );
};

export default Card;
