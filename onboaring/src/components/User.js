import React from "react";
import "../App.css";
import styled from "styled-components";

const CardStyle = styled.div`
  border: 1px solid blue;
  border-radius: 5%;
  padding: 2%;
  justify-content: center;
  align-items: center;
  background: lightgray;
  width: 13%;
  margin: 1%auto;
`;

function User({ details }) {
  return (
    <CardStyle>
      <div className="user container">
        <h2>Username: {details.username}</h2>
        <p>Email: {details.email}</p>
      </div>
    </CardStyle>
  );
}
export default User;
